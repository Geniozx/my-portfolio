import { useEffect, useState } from "react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    function handleNavClick(sectionId) {
        setActiveSection(sectionId);
        setMenuOpen(false);
    }

    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter(Boolean);

        function updateActiveSection() {
            const headerOffset =
                window.innerWidth <= 768
                    ? window.innerHeight * 0.35
                    : 120;

            let currentSection = "home";

            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;

                if (sectionTop <= headerOffset) {
                    currentSection = section.id;
                }
            });

            const nearBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 10;

            if (nearBottom) {
                currentSection = sections[sections.length - 1].id;
            }

            setActiveSection(currentSection);
        }

        updateActiveSection();

        window.addEventListener("scroll", updateActiveSection, {
            passive: true,
        });

        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    return (
        <header className="site-header">
            <nav className="navbar" aria-label="Primary navigation">
                <a
                    className="navbar-brand"
                    href="#home"
                    onClick={() => handleNavClick("home")}
                >
                    ER
                </a>

                <button
                    className="navbar-toggle"
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((current) => !current)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul
                    id="primary-navigation"
                    className={`navbar-links ${menuOpen ? "is-open" : ""}`}
                    >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={
                                    activeSection === link.href.slice(1)
                                        ? "is-active"
                                        : ""
                                }
                                onClick={() => handleNavClick(link.href.slice(1))}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;