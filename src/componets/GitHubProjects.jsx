
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
    BookOpen,
    ExternalLink,
    LoaderCircle,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./GitHubProjects.css";

const USERNAME = "ReyesAngelica-FS";
const API = "https://api.github.com";

// Only these three repositories will appear.
// Names must match your GitHub repositories.
const FEATURED_REPOS = [
    {
        name: "2606-WDV-Mod2-ReyesAngelica",
        title: "🧵 StitchFlow Studio",
        description:
        "StitchFlow Studio is a multi-device embroidery production management system that demonstrates real-time communication across three connected interfaces using Socket.IO.",
    },
    {
        name: "family-heritage-tree-demo",
        title: "family-heritage-tree-demo",
        description:
        "An interactive family tree application for organizing family relationships and genealogy records.",
    },
    {
        name: "2605-WDV359-ReyesAngelica",
        title: "Final Web Development Assignment",
        description:
        "A final academic project demonstrating web development concepts, application development, and technical problem-solving.",
    },
];

function GitHubProjects() {
    const [repos, setRepos] = useState([]);
    const [selectedRepo, setSelectedRepo] = useState(null);
    const [readme, setReadme] = useState("");
    const [loading, setLoading] = useState(true);
    const [readmeLoading, setReadmeLoading] = useState(false);
    const [error, setError] = useState("");
    const [readmeError, setReadmeError] = useState("");

    // Retrieve public repositories from GitHub
    useEffect(() => {
        const controller = new AbortController();

        async function loadRepositories() {
        try {
            setLoading(true);
            setError("");

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
            throw new Error(
                `GitHub returned ${response.status}`
            );
            }

            const data = await response.json();

            // Keep only the approved repositories,
            // in the order listed above.
            const filtered = FEATURED_REPOS
            .map((featured) => {
                const repo = data.find(
                (item) =>
                    item.name.toLowerCase() ===
                    featured.name.toLowerCase()
                );

                if (!repo) return null;

                return {
                ...repo,
                displayTitle: featured.title,
                displayDescription:
                    repo.description || featured.description,
                };
            })
            .filter(Boolean);

            if (!controller.signal.aborted) {
            setRepos(filtered);
            }
        } catch (err) {
            if (err.name !== "AbortError") {
            setError(
                "Unable to load GitHub projects right now."
            );
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

    // Load a repository's README
    async function openReadme(repo) {
        setSelectedRepo(repo);
        setReadme("");
        setReadmeError("");
        setReadmeLoading(true);

        try {
        const response = await fetch(
            `${API}/repos/${USERNAME}/${encodeURIComponent(
            repo.name
            )}/readme`,
            {
            headers: {
                Accept: "application/vnd.github.raw+json",
            },
            }
        );

        if (response.status === 404) {
            setReadmeError(
            "This repository does not have a README yet."
            );
            return;
        }

        if (!response.ok) {
            throw new Error(
            `GitHub returned ${response.status}`
            );
        }

        const content = await response.text();
        setReadme(content);
        } catch {
        setReadmeError(
            "Unable to load this README right now."
        );
        } finally {
        setReadmeLoading(false);
        }
    }

    function closeReadme() {
        setSelectedRepo(null);
        setReadme("");
        setReadmeError("");
    }

    return (
        <section
        className="github-projects"
        id="github-projects"
        >
        <p className="eyebrow">
            SELECTED DEVELOPMENT WORK
        </p>

        <h2>Featured Projects</h2>

        <p className="github-intro">
            Explore selected projects showcasing my
            experience in web development, application
            design, and building practical digital
            solutions. View the source code and project
            documentation directly from GitHub.
        </p>

        {/* Loading message */}
        {loading && (
            <p className="github-status" role="status">
            <LoaderCircle size={18} />
            Loading featured projects...
            </p>
        )}

        {/* Error message */}
        {error && (
            <p role="alert" className="github-status">
            {error}
            </p>
        )}

        {/* No repositories found */}
        {!loading && !error && repos.length === 0 && (
            <p className="github-status">
            No featured public repositories were found.
            Please check the repository names.
            </p>
        )}

        {/* Featured project cards */}
        <div className="github-grid">
            {repos.map((repo) => (
            <article
                className="github-card"
                key={repo.id}
            >
                <div className="github-card-top">
                <FaGithub size={26} />

                <span className="github-language">
                    {repo.language || "Project"}
                </span>
                </div>

                <h3>{repo.displayTitle}</h3>

                <p>{repo.displayDescription}</p>

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

        {/* README popup */}
        {selectedRepo && (
            <div
            className="readme-overlay"
            onClick={closeReadme}
            >
            <div
                className="readme-dialog"
                role="dialog"
                aria-modal="true"
                aria-label={`${selectedRepo.name} README`}
                onClick={(event) =>
                event.stopPropagation()
                }
            >
                <div className="readme-header">
                <h3>{selectedRepo.displayTitle}</h3>

                <button
                    type="button"
                    onClick={closeReadme}
                    aria-label="Close README"
                >
                    Close
                </button>
                </div>

                <div className="readme-content">
                {readmeLoading && (
                    <p>Loading README...</p>
                )}

                {readmeError && (
                    <p role="alert">{readmeError}</p>
                )}

                {!readmeLoading && !readmeError && (
                    <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    >
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
