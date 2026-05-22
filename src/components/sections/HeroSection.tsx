"use client";

import Image from "next/image";
import { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import {
    ArrowRight,
    Code2,
    Database,
    Globe,
    Server,
    Sparkles,
} from "lucide-react";

import { Container } from "@/components/common/Container";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 42,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

export function HeroSection() {
    const sectionRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 1], [0, -220]);
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

    const imageY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    const blur = useTransform(scrollYProgress, [0, 1], [0, 14]);
    const filter = useMotionTemplate`blur(${blur}px)`;

    return (
        <section
            ref={sectionRef}
            id="inicio"
            className="relative flex min-h-screen items-center overflow-hidden pt-28"
        >
            <div className="absolute inset-0 -z-30 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:5.5rem_5.5rem]" />

            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_35%,rgba(249,115,22,0.22),transparent_32%)]" />

            <div className="absolute left-0 top-0 -z-20 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="absolute inset-x-0 bottom-0 -z-20 h-52 bg-gradient-to-t from-[#050505] to-transparent" />

            <Container>
                <div className="grid min-h-[calc(100vh-7rem)] items-center gap-14 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        style={{
                            opacity: heroOpacity,
                            y: heroY,
                            scale: heroScale,
                            filter,
                        }}
                        className="relative z-10 max-w-3xl will-change-transform"
                    >
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 backdrop-blur-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            Full Stack Developer
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
                        >
                            Criando aplicações modernas,{" "}
                            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                                APIs robustas
                            </span>{" "}
                            e experiências digitais premium.
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
                        >
                            Desenvolvedor full stack especializado em React, Next.js, NestJS e
                            TypeScript, focado na construção de aplicações performáticas,
                            sistemas corporativos escaláveis e APIs modernas com arquitetura
                            profissional.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mt-9 flex flex-wrap gap-4"
                        >
                            <a
                                href="#projetos"
                                className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-black shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-orange-500/30"
                            >
                                Ver projetos
                                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                            </a>

                            <a
                                href="#contato"
                                className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
                            >
                                Entrar em contato
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
                            >
                                <Globe className="h-4 w-4" />
                                GitHub
                            </a>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mt-14 grid max-w-xl grid-cols-3 gap-4"
                        >
                            {[
                                {
                                    value: "+3",
                                    label: "Anos estudando desenvolvimento",
                                },
                                {
                                    value: "+3",
                                    label: "Projetos desenvolvidos",
                                },
                                {
                                    value: "100%",
                                    label: "Foco em performance",
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
                                >
                                    <h3 className="text-2xl font-black text-white sm:text-3xl">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-zinc-500">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        style={{
                            opacity: heroOpacity,
                            y: imageY,
                            scale: imageScale,
                            filter,
                        }}
                        initial={{
                            opacity: 0,
                            x: 90,
                            scale: 0.94,
                            filter: "blur(10px)",
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.25,
                            ease: "easeOut",
                        }}
                        className="relative mx-auto flex w-full max-w-xl justify-center will-change-transform lg:mx-0"
                    >
                        <motion.div
                            animate={{ y: [0, -16, 0] }}
                            transition={{
                                duration: 5.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative w-full"
                        >
                            <div className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/25 blur-[150px]" />

                            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-orange-500/20 via-transparent to-transparent blur-2xl" />

                            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-orange-500/10 backdrop-blur-sm transition duration-500 hover:scale-[1.015] hover:border-orange-500/30">
                                <Image
                                    src="/images/profile.png"
                                    alt="Mauro Santos"
                                    width={560}
                                    height={700}
                                    priority
                                    className="h-auto w-full object-cover"
                                />

                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505]/70 to-transparent" />
                            </div>
                        </motion.div>

                        <FloatingCard
                            icon={<Code2 className="h-5 w-5 text-orange-400" />}
                            title="Frontend"
                            description="React • Next.js"
                            className="-left-2 top-16"
                            delay={1}
                        />

                        <FloatingCard
                            icon={<Server className="h-5 w-5 text-orange-400" />}
                            title="Backend"
                            description="NestJS • APIs"
                            className="-right-2 bottom-32"
                            delay={1.15}
                        />

                        <FloatingCard
                            icon={<Database className="h-5 w-5 text-orange-400" />}
                            title="Sistemas"
                            description="Oracle • Corporativo"
                            className="bottom-8 left-8"
                            delay={1.3}
                        />
                    </motion.div>
                </div>
            </Container>

            <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-zinc-500 md:flex"
            >
                <span>Scroll</span>

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                    className="h-9 w-[1px] bg-gradient-to-b from-orange-500 to-transparent"
                />
            </motion.div>
        </section>
    );
}

type FloatingCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
    delay?: number;
};

function FloatingCard({
    icon,
    title,
    description,
    className,
    delay = 0,
}: FloatingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.03 }}
            className={`absolute hidden rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl shadow-black/20 backdrop-blur-xl lg:block ${className}`}
        >
            {icon}

            <p className="mt-3 text-sm font-bold text-white">{title}</p>
            <p className="mt-1 text-xs text-zinc-400">{description}</p>
        </motion.div>
    );
}