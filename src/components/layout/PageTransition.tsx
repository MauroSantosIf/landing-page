"use client";

import { createContext, useContext, useRef, useState } from "react";
import { motion } from "framer-motion";

type TransitionContextType = {
    goToSection: (id: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
    goToSection: () => {},
});

export function usePageTransition() {
    return useContext(TransitionContext);
}

export function PageTransition({ children }: { children: React.ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    function goToSection(id: string) {
        const element = document.getElementById(id);

        if (!element) return;

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setIsTransitioning(true);

        setTimeout(() => {
            const headerOffset = 80;

            const elementPosition =
                element.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: elementPosition - headerOffset,
                behavior: "smooth",
            });

            window.history.replaceState(null, "", `#${id}`);
        }, 180);

        timeoutRef.current = setTimeout(() => {
            setIsTransitioning(false);
        }, 950);
    }

    return (
        <TransitionContext.Provider value={{ goToSection }}>
            <motion.div
                animate={{
                    opacity: isTransitioning ? 1 : 0,
                }}
                transition={{ duration: 0.25 }}
                className="pointer-events-none fixed inset-0 z-[999] bg-black/40 backdrop-blur-[8px]"
            />

            <motion.main
                animate={{
                    scale: isTransitioning ? 0.96 : 1,
                    filter: isTransitioning ? "blur(10px)" : "blur(0px)",
                }}
                transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                {children}
            </motion.main>
        </TransitionContext.Provider>
    );
}