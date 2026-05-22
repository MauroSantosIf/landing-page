"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import {
    Building2,
    CheckCircle2,
    Mail,
    Phone,
    Send,
    User,
} from "lucide-react";

import { Container } from "@/components/common/Container";

const services = [
    "Landing page profissional",
    "Sistema web corporativo",
    "API com NestJS e Swagger",
    "Dashboard BI",
    "ETL e tratamento de dados",
    "Modelagem de dados",
    "Automação de processos",
    "Consultoria técnica",
];

export function ContactSection() {
    const [isSending, setIsSending] = useState(false);

    const [form, setForm] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        services: [] as string[],
    });

    function formatPhone(value: string) {
        const numbers = value.replace(/\D/g, "").slice(0, 10);

        if (numbers.length <= 2) return `(${numbers}`;
        if (numbers.length <= 6) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        }

        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)} - ${numbers.slice(6)}`;
    }

    function handleService(service: string) {
        setForm((current) => ({
            ...current,
            services: current.services.includes(service)
                ? current.services.filter((item) => item !== service)
                : [...current.services, service],
        }));
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (form.services.length === 0) {
            toast.warning("Selecione pelo menos um serviço.");
            return;
        }

        try {
            setIsSending(true);

            await emailjs.send(
                "service_dq2x87o",
                "template_xel4nm3",
                {
                    name: form.name,
                    company: form.company,
                    email: form.email,
                    reply_to: form.email,
                    phone: form.phone,
                    services: form.services.join(", "),
                    message: form.message || "Não informado.",
                },
                "STQRnopvdKNgOqYzu"
            );

            toast.success("Mensagem enviada com sucesso!", {
                style: {
                    background: "#0b0b0b",
                    color: "#fff",
                    border: "1px solid rgba(249,115,22,0.2)",
                },
            });

            setForm({
                name: "",
                company: "",
                email: "",
                phone: "",
                message: "",
                services: [],
            });
        } catch (error: any) {
            console.log("STATUS:", error?.status);
            console.log("TEXT:", error?.text);
            console.log("ERROR:", error);

            toast.error(error?.text || "Erro ao enviar mensagem.", {
                style: {
                    background: "#0b0b0b",
                    color: "#fff",
                    border: "1px solid rgba(255,0,0,0.2)",
                },
            });
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section id="contato" className="relative overflow-hidden bg-[#050505] ">
            <div className="pointer-events-none absolute right-0 h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-[180px]" />

            <Container>
                <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-sm font-medium text-orange-400">
                            Contato
                        </span>

                        <h2 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                            Vamos construir algo fora da curva?
                        </h2>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
                            Envie sua ideia, escolha os serviços de interesse e receberei tudo
                            diretamente no meu email.
                        </p>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-8 backdrop-blur-xl"
                    >
                        <div className="grid gap-5 md:grid-cols-2">
                            <Input
                                icon={<User />}
                                label="Seu nome"
                                value={form.name}
                                onChange={(value) => setForm({ ...form, name: value })}
                                placeholder="Seu nome"
                            />

                            <Input
                                icon={<Building2 />}
                                label="Nome da empresa"
                                value={form.company}
                                onChange={(value) => setForm({ ...form, company: value })}
                                placeholder="Ex: Company Ltda"
                            />

                            <Input
                                icon={<Mail />}
                                label="Seu email"
                                type="email"
                                value={form.email}
                                onChange={(value) => setForm({ ...form, email: value })}
                                placeholder="seuemail@email.com"
                            />

                            <Input
                                icon={<Phone />}
                                label="Contato"
                                value={form.phone}
                                onChange={(value) =>
                                    setForm({ ...form, phone: formatPhone(value) })
                                }
                                placeholder="(82) 9999 - 9999"
                            />
                        </div>

                        <div className="mt-8">
                            <h3 className="text-lg font-black text-white">
                                Serviços que posso oferecer
                            </h3>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {services.map((service) => {
                                    const selected = form.services.includes(service);

                                    return (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => handleService(service)}
                                            className={`flex items-center gap-3 rounded-2xl border p-4 text-left text-sm transition ${selected
                                                ? "border-orange-500/40 bg-orange-500/10 text-orange-400"
                                                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-orange-500/30 hover:text-orange-400"
                                                }`}
                                        >
                                            <CheckCircle2 className="h-4 w-4" />
                                            {service}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-8">
                            <label className="text-sm font-bold text-white">
                                Mensagem
                            </label>

                            <textarea
                                value={form.message}
                                onChange={(event) =>
                                    setForm({ ...form, message: event.target.value })
                                }
                                placeholder="Conte brevemente o que você precisa..."
                                className="mt-3 min-h-32 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-orange-500/40"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-black text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSending ? "Enviando..." : "Enviar mensagem"}
                            <Send className="h-4 w-4" />
                        </button>
                    </motion.form>
                </div>
            </Container>
        </section>
    );
}

function Input({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
    icon,
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: string;
    icon?: React.ReactNode;
}) {
    return (
        <label>
            <span className="text-sm font-bold text-white">{label}</span>

            <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 transition focus-within:border-orange-500/40">
                {icon && (
                    <span className="text-orange-400 [&>svg]:h-4 [&>svg]:w-4">
                        {icon}
                    </span>
                )}

                <input
                    required
                    type={type}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
                />
            </div>
        </label>
    );
}