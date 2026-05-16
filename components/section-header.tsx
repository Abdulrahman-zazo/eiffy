import { cn } from "@/lib/utils"
import { useLocale } from "next-intl"

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  colortitle?: "foreground" | "background" | "accent",
  colordescription?: "foreground" | "background" | "accent",
  colorlabel?: "primary" | "background" | "accent",
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  colortitle = "foreground",
  colordescription = "foreground",
  colorlabel = "accent",
  className,
}: SectionHeaderProps) {
  const locale = useLocale();
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-${colorlabel}`}>
          {label}
        </p>
      )}
      <h2 className={`text-balance ${locale === "ar" ? "font-almarai" : "font-serif"}  text-3xl font-bold tracking-tight text-${colortitle} md:text-4xl lg:text-4xl`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-pretty text-sm leading-relaxed text-${colordescription} md:text-lg`}>
          {description}
        </p>
      )}
    </div>
  )
}
