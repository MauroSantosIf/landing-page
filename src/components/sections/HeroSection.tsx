"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/Container";

export function HeroSection() {
    return (
        <section
            id="inicio"
            className="relative flex min-h-screen items-center overflow-hidden pt-24"
        >
            {/* Glow */}
            <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-orange-500/20 blur-[140px]" />

            {/* Background grid */}
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:5rem_5rem]" />

            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Texto */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col"
                    >
                        <span className="mb-6 inline-flex w-fit rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-400">
                            Full Stack Developer
                        </span>

                        <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
                            Criando experiências digitais modernas e escaláveis.
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                            Sou Mauro Santos, desenvolvedor full stack especializado em
                            React, Next.js, NestJS e TypeScript, com experiência na criação
                            de APIs robustas, sistemas corporativos e aplicações modernas,
                            performáticas e escaláveis, focadas em arquitetura profissional
                            e experiência do usuário.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400">
                                Ver projetos
                                <ArrowRight className="h-4 w-4" />
                            </button>

                            <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400">
                                Entrar em contato
                            </button>
                        </div>
                    </motion.div>

                    {/* Imagem */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center"
                    >
                        <div className="absolute h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[120px]" />

                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm">
                            <Image
                                src="/images/profile.png"
                                alt="Mauro Santos"
                                width={500}
                                height={650}
                                priority
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}