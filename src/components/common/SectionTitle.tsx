import { cn } from "@/lib/utils";

type SectionTitleProps = {
    eyebrow?: string;
    title: string;
    description?: string;
    className?: string;
};

export function SectionTitle({
    eyebrow,
    title,
    description,
    className,
}: SectionTitleProps) {
    return (
        <div className={cn("max-w-3xl", className)}>
            {eyebrow && (
                <span className="mb-3 inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-400">
                    {eyebrow}
                </span>
            )}

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-base leading-7 text-zinc-400 md:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}