"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
    AnimatePresence,
    motion,
    MotionValue,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import {
    ArrowUpRight,
    Building2,
    CheckCircle2,
    Lock,
    MonitorCog,
} from "lucide-react";

import { Container } from "@/components/common/Container";

const projects = [
    {
        number: "01",
        title: "DCS Locações",
        type: "Projeto real em produção",
        icon: Building2,
        image: "/images/projects/dcs-locacoes.png",
        description:
            "Landing page desenvolvida para uma empresa real de locação de equipamentos, com foco em modernizar a presença digital, apresentar o catálogo e facilitar o contato via WhatsApp.",
        stack: ["Next.js", "Tailwind CSS", "SEO", "TanStack Query", "Toastify"],
        link: "https://dcs-locacoes-web.vercel.app/",
        privateProject: false,
        detailsTitle: "Detalhes técnicos do DCS Locações",
        details: [
            "Foi utilizado TanStack Query para organizar o gerenciamento de dados e preparar o projeto para futuras integrações com API.",
            "UseMemo foi aplicado para otimizar filtros, buscas e cálculos, evitando reprocessamentos desnecessários.",
            "React Toastify foi usado para criar feedbacks visuais de sucesso, erro e ações importantes do usuário.",
            "A experiência do usuário foi pensada para facilitar o contato, reduzir dúvidas e tornar o pedido de orçamento mais rápido.",
            "Futuramente será adicionada uma gestão de estoque para controle de equipamentos, disponibilidade e movimentações.",
        ],
    },
    {
        number: "02",
        title: "Toledo Tools",
        type: "Sistema corporativo interno",
        icon: MonitorCog,
        image: "/images/projects/toledoTools.png",
        description:
            "Sistema corporativo interno em desenvolvimento para centralizar ferramentas empresariais, como emissão de etiquetas, NF-e, análises e gerenciamento interno.",
        stack: ["React", "NestJS", "TypeScript", "Swagger", "JWT", "Oracle"],
        link: null,
        privateProject: true,
        detailsTitle: "Detalhes técnicos do Toledo Tools",
        details: [
            "Criação de API com NestJS e documentação profissional utilizando Swagger.",
            "Desenvolvimento de janelas interativas e automatizadas para processos internos da empresa.",
            "Construção de funcionalidades voltadas para produtividade, padronização e melhoria dos fluxos corporativos.",
            "Foco constante em excelência, organização, performance e qualidade nas entregas.",
            "Trabalho em equipe durante o desenvolvimento e evolução contínua do sistema.",
        ],
    },
];

export function ProjectsSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    function handleToggleDetails(title: string) {
        setSelectedProject((current) => (current === title ? null : title));
    }

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const titleY = useTransform(scrollYProgress, [0, 0.25, 1], [120, 0, -80]);
    const glowX = useTransform(scrollYProgress, [0, 1], ["-10%", "70%"]);

    const blur = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [10, 0, 0, 10]);
    const filter = useMotionTemplate`blur(${blur}px)`;

    return (
        <section
            ref={sectionRef}
            id="projetos"
            className="relative overflow-hidden bg-[#050505] py-28"
        >
            <motion.div
                style={{ x: glowX }}
                className="pointer-events-none absolute top-40 h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-[180px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:5rem_5rem]" />

            <Container>
                <motion.div
                    style={{ opacity: titleOpacity, y: titleY, filter }}
                    className="relative z-10"
                >
                    <div className="mb-20 max-w-4xl">
                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-400">
                            Projetos
                        </span>

                        <h2 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                            Soluções reais, construídas da interface até a regra de negócio.
                        </h2>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                            Projetos desenvolvidos para empresas reais, envolvendo frontend,
                            backend, integração, experiência do usuário e sistemas internos.
                        </p>
                    </div>

                    <div className="flex flex-col gap-20">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                                scrollYProgress={scrollYProgress}
                                isOpen={selectedProject === project.title}
                                onToggleDetails={handleToggleDetails}
                            />
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}

type ProjectCardProps = {
    project: (typeof projects)[number];
    index: number;
    scrollYProgress: MotionValue<number>;
    isOpen: boolean;
    onToggleDetails: (title: string) => void;
};

function ProjectCard({
    project,
    index,
    scrollYProgress,
    isOpen,
    onToggleDetails,
}: ProjectCardProps) {
    const Icon = project.icon;

    const start = 0.18 + index * 0.22;
    const middle = start + 0.18;

    const opacity = useTransform(scrollYProgress, [start, middle, 0.9, 1], [0, 1, 1, 0]);

    const imageX = useTransform(
        scrollYProgress,
        [start, middle],
        [index % 2 === 0 ? -180 : 180, 0]
    );

    const contentX = useTransform(
        scrollYProgress,
        [start, middle],
        [index % 2 === 0 ? 180 : -180, 0]
    );

    const y = useTransform(scrollYProgress, [start, middle, 0.95, 1], [80, 0, 0, -60]);
    const scale = useTransform(scrollYProgress, [start, middle], [0.94, 1]);

    return (
        <motion.article
            style={{ opacity, y, scale }}
            className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
        >
            <motion.div
                style={{ x: imageX }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_90px_rgba(249,115,22,0.08)] backdrop-blur-xl"
            >
                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] bg-zinc-950">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={760}
                        className="h-auto w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
            </motion.div>

            <motion.div
                style={{ x: contentX }}
                className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-8 backdrop-blur-xl"
            >
                <span className="pointer-events-none absolute right-6 top-4 text-8xl font-black tracking-[-0.08em] text-white/[0.035]">
                    {project.number}
                </span>

                <div className="relative z-10">
                    <div className="mb-8 flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
                            <Icon className="h-6 w-6" />
                        </div>

                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.35em] text-orange-400">
                                {project.type}
                            </span>

                            <h3 className="mt-2 text-3xl font-black tracking-tight text-white">
                                {project.title}
                            </h3>
                        </div>
                    </div>

                    <p className="text-base leading-8 text-zinc-400">
                        {project.description}
                    </p>

                    {project.privateProject && (
                        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-zinc-400">
                            <Lock className="mt-1 h-4 w-4 shrink-0 text-orange-400" />
                            <p>
                                Projeto privado/local. As imagens são demonstrativas e não exibem
                                dados sensíveis da empresa.
                            </p>
                        </div>
                    )}

                    <div className="mt-8 flex flex-wrap gap-3">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-zinc-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        {project.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-400"
                            >
                                Ver projeto
                                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        ) : (
                            <button
                                type="button"
                                disabled
                                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-zinc-500"
                            >
                                Projeto privado
                                <Lock className="h-4 w-4" />
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={() => onToggleDetails(project.title)}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white transition hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
                        >
                            {isOpen ? "Fechar detalhes" : "Ver detalhes"}
                        </button>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: -20 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -20 }}
                                transition={{
                                    duration: 0.45,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="mt-8 overflow-hidden"
                            >
                                <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">
                                    <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-500/20 blur-[90px]" />

                                    <div className="relative z-10">
                                        <h4 className="text-xl font-black text-white">
                                            {project.detailsTitle}
                                        </h4>

                                        <div className="mt-6 grid gap-4">
                                            {project.details.map((detail, detailIndex) => (
                                                <motion.div
                                                    key={detail}
                                                    initial={{
                                                        opacity: 0,
                                                        x: detailIndex % 2 === 0 ? -30 : 30,
                                                    }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        delay: detailIndex * 0.06,
                                                        duration: 0.35,
                                                        ease: [0.16, 1, 0.3, 1],
                                                    }}
                                                    className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
                                                >
                                                    <span className="mt-1 text-sm font-black text-orange-400">
                                                        0{detailIndex + 1}
                                                    </span>

                                                    <div className="flex-1">
                                                        <div className="mb-2 flex items-center gap-2">
                                                            <CheckCircle2 className="h-4 w-4 text-orange-400" />
                                                            <span className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-500">
                                                                Detalhe
                                                            </span>
                                                        </div>

                                                        <p className="text-sm leading-7 text-zinc-300">
                                                            {detail}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.article>
    );
}