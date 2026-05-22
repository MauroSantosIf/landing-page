"use client";

import { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";

import emailjs from "@emailjs/browser";

import { Container } from "@/components/common/Container";



const aboutCards = [
    {
        number: "01",
        title: "APIs & Backend",
        description:
            "Desenvolvimento de APIs escaláveis com NestJS, autenticação JWT, integração com banco Oracle e arquitetura pensada para sistemas corporativos.",
    },
    {
        number: "02",
        title: "Frontend Moderno",
        description:
            "Criação de interfaces modernas com React, Next.js, Tailwind CSS e animações fluidas, sempre priorizando experiência, performance e responsividade.",
    },
    {
        number: "03",
        title: "Arquitetura & Performance",
        description:
            "Estruturação de projetos com componentização, separação de responsabilidades, TypeScript, clean code e foco em aplicações escaláveis.",
    },
];

export function AboutSection() {
    const sectionRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const sectionOpacity = useTransform(
        scrollYProgress,
        [0, 0.12, 0.85, 1],
        [0, 1, 1, 0]
    );

    const titleY = useTransform(
        scrollYProgress,
        [0, 0.25, 1],
        [160, 0, -120]
    );

    const titleScale = useTransform(
        scrollYProgress,
        [0, 0.25, 1],
        [0.9, 1, 0.96]
    );

    const glowX = useTransform(
        scrollYProgress,
        [0, 1],
        ["-20%", "80%"]
    );

    const blur = useTransform(
        scrollYProgress,
        [0, 0.18, 0.82, 1],
        [16, 0, 0, 16]
    );

    const filter = useMotionTemplate`blur(${blur}px)`;

    return (
        <section
            ref={sectionRef}
            id="sobre"
            className="relative overflow-visible bg-[#050505] py-28 lg:min-h-[140vh]"
        >
            <motion.div
                style={{ x: glowX }}
                className="pointer-events-none absolute top-24 -z-0 h-[420px] w-[420px] rounded-full bg-orange-500/15 blur-[140px]"
            />

            <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_35%)]" />

            <Container>
                <motion.div
                    style={{
                        opacity: sectionOpacity,
                        filter,
                    }}
                    className="relative z-10"
                >
                    <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                        <motion.div
                            style={{
                                y: titleY,
                                scale: titleScale,
                            }}
                            className="lg:sticky lg:top-32"
                        >
                            <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-400">
                                Sobre mim
                            </span>

                            <h2 className="mt-8 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                                Código, design e performance trabalhando juntos.
                            </h2>

                            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                                Meu nome é Mauro Paz, um desenvolvedor apaixonado por criar experiências digitais que unem código, design e performance. Com uma jornada que começou em 2022, venho me especializando em desenvolvimento web, sempre buscando transformar ideias em soluções elegantes e eficientes.
                            </p>

                            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                                Minha abordagem é centrada na criação de interfaces modernas e intuitivas, utilizando tecnologias como React, Next.js e Tailwind CSS. Acredito que a performance é tão importante quanto a estética, por isso me esforço para otimizar cada linha de código e garantir que as aplicações sejam rápidas e responsivas.

                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-8 pt-8 pb-32 lg:pt-24">
                            {aboutCards.map((card, index) => {
                                const start = 0.18 + index * 0.13;
                                const middle = start + 0.18;
                                const end = middle + 0.35;

                                const cardOpacity = useTransform(
                                    scrollYProgress,
                                    [start, middle, 0.95, 1],
                                    [0, 1, 1, 0]
                                );

                                const cardY = useTransform(
                                    scrollYProgress,
                                    [start, middle, 0.95, 1],
                                    [140, 0, 0, -80]
                                );

                                const cardScale = useTransform(
                                    scrollYProgress,
                                    [start, middle, end, 1],
                                    [0.92, 1, 1, 0.96]
                                );

                                const cardRotate = useTransform(
                                    scrollYProgress,
                                    [start, middle],
                                    [index % 2 === 0 ? -4 : 4, 0]
                                );

                                return (
                                    <motion.article
                                        key={card.title}
                                        style={{
                                            opacity: cardOpacity,
                                            y: cardY,
                                            scale: cardScale,
                                            rotate: cardRotate,
                                        }}
                                        whileHover={{
                                            y: -10,
                                            scale: 1.02,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            ease: "easeOut",
                                        }}
                                        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl"
                                    >
                                        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                                            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />
                                        </div>

                                        <span className="pointer-events-none absolute right-6 top-4 text-8xl font-black tracking-[-0.08em] text-white/[0.035] transition duration-500 group-hover:text-orange-500/10">
                                            {card.number}
                                        </span>

                                        <div className="relative z-10">
                                            <span className="text-sm font-bold uppercase tracking-[0.35em] text-orange-400">
                                                {card.number}
                                            </span>

                                            <h3 className="mt-8 text-3xl font-black tracking-tight text-white">
                                                {card.title}
                                            </h3>

                                            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
                                                {card.description}
                                            </p>
                                        </div>

                                        <div className="mt-8 h-px w-full bg-gradient-to-r from-orange-500/60 via-white/10 to-transparent" />
                                    </motion.article>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}