import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale, useTranslations } from "next-intl"

export function CtaSection() {
  const t = useTranslations("CTA")
  const locale = useLocale();
  return (
    <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Your Table Awaits
        </p>
        <h2 className={`${locale === "ar" ? "font-almarai" : "font-serif"} text-4xl font-bold tracking-tight text-background md:text-5xl lg:text-6xl`}>
          {t("title")}
      
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
  {t("description")}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-background text-accent-foreground hover:bg-background/90"
          >
            <Link href="/contact">
          {t("button")}
             
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          {/* <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button> */}
        </div>
      </div>
    </section>
  )
}
