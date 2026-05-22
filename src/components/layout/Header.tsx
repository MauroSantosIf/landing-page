"use client";

import { Container } from "@/components/common/Container";
import { navLinks } from "@/constants/navLinks";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePageTransition } from "@/components/layout/PageTransition";

export function Header() {
    const { activeSection } = useActiveSection();
    const { goToSection } = usePageTransition();

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <button
                        type="button"
                        onClick={() => goToSection("inicio")}
                        className="text-lg font-bold tracking-tight text-white transition hover:text-orange-500"
                    >
                        Mauro<span className="text-orange-500"> .</span> Developer
                    </button>

                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                type="button"
                                onClick={() => goToSection(link.id)}
                                className={`relative text-sm font-medium transition duration-300 ${activeSection === link.id
                                        ? "text-orange-500"
                                        : "text-zinc-400 hover:text-orange-500"
                                    }`}
                            >
                                {link.label}

                                <span
                                    className={`absolute -bottom-2 left-0 h-[1px] bg-orange-500 transition-all duration-500 ${activeSection === link.id
                                            ? "w-full opacity-100"
                                            : "w-0 opacity-0"
                                        }`}
                                />
                            </button>
                        ))}
                    </nav>

                    <a
                        href="https://github.com/MauroSantosIf"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400 transition hover:border-orange-500 hover:bg-orange-500 hover:text-black md:inline-flex"
                    >
                        GitHub
                    </a>
                </div>
            </Container>
        </header>
    );
}