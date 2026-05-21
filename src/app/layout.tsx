import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauro Developer - Full Stack Developer",
  description: "Sou o desenvolvedor full stack com experiência em React, Node.js e TypeScript. Com paixão pela criação de aplicações web eficientes e escaláveis, Tenho um histórico comprovado de fornecimento de soluções de alta qualidade. Seja construindo interfaces de usuário responsivas ou projetando sistemas backend robustos, Me dedico a criar experiências digitais perfeitas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#111111] text-white">{children}</body>
    </html>
  );
}
