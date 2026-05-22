"use client";

import { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
    MotionValue,
} from "framer-motion";
import {
    Blocks,
    Code2,
    Database,
    GitBranch,
    Layers3,
    Server,
    BarChart3,
    Workflow,
    Network,
} from "lucide-react";

import { Container } from "@/components/common/Container";

const stacks = [
    {
        number: "01",
        icon: Code2,
        title: "Frontend Engineering",
        technologies: "React • Next.js • TypeScript • Tailwind CSS • Framer Motion",
        description:
            "Criação de interfaces modernas, responsivas e performáticas, com foco em experiência visual, componentização e animações fluidas.",
    },
    {
        number: "02",
        icon: Server,
        title: "Backend & APIs",
        technologies: "NestJS • Node.js • JWT • Swagger • REST APIs",
        description:
            "Desenvolvimento de APIs robustas, autenticação segura, documentação profissional e arquitetura preparada para sistemas corporativos.",
    },
    {
        number: "03",
        icon: Database,
        title: "Database & Data Model",
        technologies: "PostgreSQL • Oracle • SQL • Prisma • TypeORM",
        description:
            "Modelagem de dados, relacionamento entre entidades, consultas otimizadas e estruturação de bases para aplicações escaláveis.",
    },
    {
        number: "04",
        icon: BarChart3,
        title: "BI & Analytics",
        technologies: "BI • Dashboards • KPIs • Relatórios • Análise de Dados",
        description:
            "Construção de indicadores, análises gerenciais, relatórios estratégicos e visualizações para apoiar decisões de negócio.",
    },
    {
        number: "05",
        icon: Workflow,
        title: "ETL & Data Flow",
        technologies: "ETL • Tratamento de Dados • Integrações • Pipelines",
        description:
            "Extração, transformação e carga de dados, conectando fontes diferentes e organizando fluxos para consumo analítico.",
    },
    {
        number: "06",
        icon: Layers3,
        title: "Architecture & Quality",
        technologies: "Clean Code • SOLID • Componentização • Performance",
        description:
            "Organização profissional de projetos, separação de responsabilidades, código limpo e foco em manutenção e escalabilidade.",
    },
];

export function StackSection() {
    const sectionRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const titleY = useTransform(scrollYProgress, [0, 0.25, 1], [140, 0, -120]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const titleScale = useTransform(scrollYProgress, [0, 0.25, 1], [0.9, 1, 0.96]);

    const glowX = useTransform(scrollYProgress, [0, 1], ["80%", "-20%"]);
    const blur = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [14, 0, 0, 14]);
    const filter = useMotionTemplate`blur(${blur}px)`;

    return (
        <section
            ref={sectionRef}
            id="stack"
            className="relative overflow-visible bg-[#050505] py-28 lg:min-h-[150vh]"
        >
            <motion.div
                style={{ x: glowX }}
                className="pointer-events-none absolute right-0 top-32 h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-[180px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:5rem_5rem]" />

            <Container>
                <motion.div
                    style={{
                        opacity: titleOpacity,
                        filter,
                    }}
                    className="relative z-10 grid gap-16 lg:grid-cols-[0.85fr_1.15fr]"
                >
                    <motion.div
                        style={{
                            y: titleY,
                            scale: titleScale,
                        }}
                        className="self-start lg:sticky lg:top-40"
                    >
                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-400">
                            Minha Stack
                        </span>

                        <h2 className="mt-8 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                            Tecnologia, dados e arquitetura no mesmo fluxo.
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                            Trabalho com desenvolvimento full stack, BI, ETL e modelagem de dados.
                            Focando sempre na construção de soluções elegantes, performáticas e bem estruturadas para desafios reais.
                        </p>

                        <div className="mt-10 grid grid-cols-3 gap-3">
                            {["Full Stack", "Data", "BI"].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-xl"
                                >
                                    <p className="text-sm font-bold text-white">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-8 pb-32 pt-8 lg:pt-24">
                        {stacks.map((stack, index) => (
                            <StackCard
                                key={stack.title}
                                stack={stack}
                                index={index}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}

type StackCardProps = {
    stack: (typeof stacks)[number];
    index: number;
    scrollYProgress: MotionValue<number>;
};

function StackCard({ stack, index, scrollYProgress }: StackCardProps) {
    const Icon = stack.icon;

    const start = 0.12 + index * 0.09;
    const middle = start + 0.18;

    const opacity = useTransform(scrollYProgress, [start, middle, 0.94, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [start, middle, 0.94, 1], [150, 0, 0, -80]);
    const scale = useTransform(scrollYProgress, [start, middle, 0.94, 1], [0.92, 1, 1, 0.96]);
    const rotate = useTransform(scrollYProgress, [start, middle], [index % 2 === 0 ? -3 : 3, 0]);

    return (
        <motion.article
            style={{
                opacity,
                y,
                scale,
                rotate,
            }}
            whileHover={{
                y: -12,
                scale: 1.025,
                borderColor: "rgba(249,115,22,0.28)",
            }}
            transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-8 shadow-[0_0_80px_rgba(249,115,22,0.06)] backdrop-blur-xl"
        >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />
            </div>

            <span className="pointer-events-none absolute right-6 top-4 text-8xl font-black tracking-[-0.08em] text-white/[0.035] transition duration-500 group-hover:text-orange-500/10">
                {stack.number}
            </span>

            <div className="relative z-10">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
                        <Icon className="h-6 w-6" />
                    </div>

                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.35em] text-orange-400">
                            {stack.number}
                        </span>

                        <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">
                            {stack.title}
                        </h3>
                    </div>
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    {stack.technologies}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                    {stack.description}
                </p>
            </div>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-orange-500/60 via-white/10 to-transparent" />
        </motion.article>
    );
}