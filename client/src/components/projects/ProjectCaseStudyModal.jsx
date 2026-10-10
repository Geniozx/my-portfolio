import { useEffect, useRef } from "react";

function ProjectCaseStudyModal({ project, onClose }) {
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    const coverImage = project?.images?.find((image) => image.is_cover);

    const galleryImages =
        project?.images?.filter((image) => !image.is_cover) || [];

    useEffect(() => {
        if (!project) {
            return undefined;
        }

        const modal = modalRef.current;
        const closeButton = closeButtonRef.current;

        const focusableElements = modal?.querySelectorAll(
            'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        const firstFocusableElement = focusableElements?.[0];
        const lastFocusableElement =
            focusableElements?.[focusableElements.length - 1];

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key !== "Tab" || !firstFocusableElement) {
                return;
            }

            if (
                event.shiftKey &&
                document.activeElement === firstFocusableElement
            ) {
                event.preventDefault();
                lastFocusableElement?.focus();
                return;
            }

            if (
                !event.shiftKey &&
                document.activeElement === lastFocusableElement
            ) {
                event.preventDefault();
                firstFocusableElement.focus();
            }
        }

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);

        closeButton?.focus();

        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    if (!project) {
        return null;
    }


    return (
        <div
            className="project-modal-backdrop"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                ref={modalRef}
                className="project-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
            >
                <button
                    ref={closeButtonRef}
                    className="project-modal-close"
                    type="button"
                    onClick={onClose}
                    aria-label="Close project case study"
                >
                    ×
                </button>

                <div className="project-modal-header">
                    {coverImage && (
                        <div className="project-modal-cover">
                            <img
                                src={coverImage.image_url}
                                alt={coverImage.alt_text || `${project.title} project cover`}
                            />
                        </div>
                    )}
                    <p className="project-type">{project.project_type}</p>

                    <h2 id="project-modal-title">{project.title}</h2>

                    <div className="project-modal-meta">
                        {project.project_type && (
                            <span>
                            <strong>Type</strong>
                                {project.project_type}
                            </span>
                        )}

                        {project.status && (
                            <span>
                            <strong>Status</strong>
                                {project.status}
                            </span>
                        )}
                    </div>

                    {project.short_description && (
                        <p className="project-modal-summary">
                            {project.short_description}
                        </p>
                    )}

                    {(project.github_url || project.live_url) && (
                        <div className="project-modal-actions">
                            {project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-modal-action"
                                >
                                    View GitHub
                                    <span aria-hidden="true">↗</span>
                                </a>
                            )}

                            {project.live_url && (
                                <a
                                    href={project.live_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-modal-action project-modal-action-primary"
                                >
                                    View Live Site
                                    <span aria-hidden="true">↗</span>
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <div className="project-modal-content">
                    {project.description && (
                        <section className="project-case-study-section">
                            <h3>Overview</h3>
                            <p>{project.description}</p>
                        </section>
                    )}

                    {project.problem && (
                        <section className="project-case-study-section">
                            <h3>Problem</h3>
                            <p>{project.problem}</p>
                        </section>
                    )}

                    {project.solution && (
                        <section className="project-case-study-section">
                            <h3>Solution</h3>
                            <p>{project.solution}</p>
                        </section>
                    )}

                    {project.features && (
                        <section className="project-case-study-section">
                            <h3>Features</h3>
                            <p>{project.features}</p>
                        </section>
                    )}

                    {project.challenges && (
                        <section className="project-case-study-section">
                            <h3>Challenges</h3>
                            <p>{project.challenges}</p>
                        </section>
                    )}

                    {project.lessons_learned && (
                        <section className="project-case-study-section">
                            <h3>Lessons Learned</h3>
                            <p>{project.lessons_learned}</p>
                        </section>
                    )}

                    {project.technologies?.length > 0 && (
                        <section className="project-case-study-section">
                            <h3>Technology Stack</h3>

                            <div className="project-technologies">
                                {project.technologies.map((technology) => (
                                    <span key={technology.id}>{technology.name}</span>
                                ))}
                            </div>
                        </section>
                    )}

                    {galleryImages.length > 0 && (
                        <section className="project-case-study-section">
                            <h3>Project Gallery</h3>

                            <div className="project-gallery">
                                {galleryImages.map((image) => (
                                    <figure key={image.id} className="project-gallery-item">
                                        <img
                                            src={image.image_url}
                                            alt={image.alt_text || `${project.title} screenshot`}
                                        />

                                        {image.caption && (
                                            <figcaption>{image.caption}</figcaption>
                                        )}
                                    </figure>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCaseStudyModal;