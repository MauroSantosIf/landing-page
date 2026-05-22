"use client";

import { useEffect, useState } from "react";

const sections = ["inicio", "sobre", "stack", "projetos", "contato"];

export function useActiveSection() {
    const [activeSection, setActiveSection] = useState("inicio");
    const [isChangingSection, setIsChangingSection] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        function handleScroll() {
            const scrollPosition = window.scrollY + window.innerHeight * 0.45;

            for (const section of sections) {
                const element = document.getElementById(section);

                if (!element) continue;

                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + height
                ) {
                    setActiveSection((current) => {
                        if (current !== section) {
                            setIsChangingSection(true);

                            clearTimeout(timeout);

                            timeout = setTimeout(() => {
                                setIsChangingSection(false);
                            }, 420);

                            return section;
                        }

                        return current;
                    });
                }
            }
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return {
        activeSection,
        isChangingSection,
    };
}