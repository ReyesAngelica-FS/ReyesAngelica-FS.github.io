
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BookOpen, ExternalLink, LoaderCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./GitHubProjects.css";

const USERNAME = "ReyesAngelica-FS";
const API = "https://api.github.com";

function GitHubProjects() {
    const [repos, setRepos] = useState([]);
    const [selectedRepo, setSelectedRepo] = useState(null);
    const [readme, setReadme] = useState("");
    const [loading, setLoading] = useState(true);
    const [readmeLoading, setReadmeLoading] = useState(false);
    const [error, setError] = useState("");
    const [readmeError, setReadmeError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function loadRepositories() {
        try {
            const response = await fetch(
            `${API}/users/${USERNAME}/repos?per_page=100&sort=updated`,
            {
                headers: {
                Accept: "application/vnd.github+json",
                },
                signal: controller.signal,
            }
            );

            if (!response.ok) {
            throw new Error(`GitHub returned ${response.status}`);
            }

            const data = await response.json();

            const filtered = data.filter(
            (repo) =>
                !repo.fork &&
                repo.name.toLowerCase() !==
                `${USERNAME.toLowerCase()}.github.io`
            );

            setRepos(filtered);
        } catch (err) {
            if (err.name !== "AbortError") {
            setError("Unable to load GitHub projects right now.");
            }
        } finally {
            if (!controller.signal.aborted) {
            setLoading(false);
            }
        }
        }

        loadRepositories();

        return () => controller.abort();
    }, []);

    async function openReadme(repo) {
        setSelectedRepo(repo);
        setReadme("");
        setReadmeError("");
        setReadmeLoading(true);

        try {
        const response = await fetch(
            `${API}/repos/${USERNAME}/${encodeURIComponent(repo.name)}/readme`,
            {
            headers: {
                Accept: "application/vnd.github.raw+json",
            },
            }
        );

        if (response.status === 404) {
            setReadmeError("This repository does not have a README yet.");
            return;
        }

        if (!response.ok) {
            throw new Error(`GitHub returned ${response.status}`);
        }

        const content = await response.text();
        setReadme(content);
        } catch {
        setReadmeError("Unable to load this README right now.");
        } finally {
        setReadmeLoading(false);
        }
    }

    return (
        <section className="github-projects" id="github-projects">
        <p className="eyebrow">MY DEVELOPMENT WORK</p>
        <h2>GitHub Projects</h2>

        <p className="github-intro">
            Explore my public development repositories, review project
            documentation, and access the source code.
        </p>

        {loading && (
            <p className="github-status" role="status">
            <LoaderCircle size={18} /> Loading projects...
            </p>
        )}

        {error && <p role="alert">{error}</p>}

        {!loading && !error && repos.length === 0 && (
            <p>No public projects are available to display.</p>
        )}

        <div className="github-grid">
            {repos.map((repo) => (
            <article className="github-card" key={repo.id}>
                <div className="github-card-top">
                <FaGithub size={26} />
                <span className="github-language">
                    {repo.language || "Project"}
                </span>
                </div>

                <h3>{repo.name.replaceAll("-", " ")}</h3>

                <p>
                {repo.description ||
                    "Explore this repository to learn more about the project."}
                </p>

                <div className="github-card-actions">
                <button
                    type="button"
                    onClick={() => openReadme(repo)}
                >
                    <BookOpen size={17} />
                    Read README
                </button>

                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ExternalLink size={17} />
                    View Code
                </a>
                </div>
            </article>
            ))}
        </div>

        {selectedRepo && (
            <div className="readme-overlay" onClick={() => setSelectedRepo(null)}>
            <div
                className="readme-dialog"
                role="dialog"
                aria-modal="true"
                aria-label={`${selectedRepo.name} README`}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="readme-header">
                <h3>{selectedRepo.name}</h3>

                <button
                    type="button"
                    onClick={() => setSelectedRepo(null)}
                    aria-label="Close README"
                >
                    Close
                </button>
                </div>

                <div className="readme-content">
                {readmeLoading && <p>Loading README...</p>}

                {readmeError && <p role="alert">{readmeError}</p>}

                {!readmeLoading && !readmeError && (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {readme}
                    </ReactMarkdown>
                )}
                </div>

                <a
                className="readme-github-link"
                href={selectedRepo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub />
                Open Repository on GitHub
                </a>
            </div>
            </div>
        )}
        </section>
    );
}

export default GitHubProjects;
