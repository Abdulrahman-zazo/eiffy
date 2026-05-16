import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"

export function HeroSection() {
  const t = useTranslations("HeroSection")
  const locale = useLocale()

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-background">
      
      {/* Background Image - scale-in بطيء */}
      <div className="absolute inset-0 animate-scale-in">
        <Image
          src="/images/hero.webp"
          alt="Elegant restaurant interior with warm lighting"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8 text-center">
        <div className="max-w-3xl">
          
          {/* Tagline - أول شي يظهر */}
          <p
            className="mb-4 text-xs max-w-sm mx-auto font-semibold uppercase 
                       tracking-[0.3em] text-accent
                       opacity-0 animate-fade-up [animation-delay:200ms]"
          >
            {t("tagline")}
          </p>

          {/* العنوان الرئيسي */}
          <h1
            className={`
              ${locale === "ar" ? "font-almarai" : "font-serif"}
              text-5xl font-bold leading-[1.1] tracking-tight 
              text-primary-foreground md:text-7xl lg:text-8xl
              opacity-0 animate-fade-up [animation-delay:400ms]
            `}
          >
            {t("name")}
          </h1>

          {/* الوصف */}
          <p
            className="mt-6 max-w-2xl text-base leading-relaxed 
                       text-primary-foreground/80 md:text-lg
                       opacity-0 animate-fade-up [animation-delay:600ms]"
          >
            {t("description")}
          </p>

          {/* الأزرار */}
          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row mx-auto justify-center
                       opacity-0 animate-fade-up [animation-delay:800ms]"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 
                         transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <Link href="/contact">
                {t("cta.reserve")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground 
                         hover:bg-primary-foreground/10 hover:text-primary-foreground
                         transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <Link href="/menu">{t("cta.menu")}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - animate-float بدل animate-pulse */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-primary-foreground/40">
            Scroll
          </span>
          <div className="h-10 w-px bg-linear-to-b from-gray-50/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}