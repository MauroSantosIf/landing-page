"use client";

import Link from "next/link";

import { Container } from "@/components/common/Container";
import { navLinks } from "@/constants/navLinks";

export function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Link
                        href="#inicio"
                        className="text-lg font-bold tracking-tight text-white transition hover:text-orange-500"
                    >
                        Mauro<span className="text-orange-500"> .</span> Developer
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-zinc-400 transition hover:text-orange-500"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <a
                        href="https://github.com"
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