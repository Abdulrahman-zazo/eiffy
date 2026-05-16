import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/data";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata.about" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${t("title")} | Eiffelya`,
      description: t("description"),
      url: `${siteConfig.url}/about`,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: { canonical: `${siteConfig.url}/about` },
  };
}

export default function AboutPage() {
  const t = useTranslations("OurStoryPage");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <>
      {/* ═══════════════════════════════
          Hero
      ═══════════════════════════════ */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-background">
        
        {/* Background - scale-in بطيء */}
        <div className="absolute inset-0 animate-scale-in">
          <Image
            src="/images/about-hero.jpg"
            alt="Chef Maria Rossi in the original Hearth kitchen"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-background/10" />
        </div>

        <div className="text-center relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
          
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent
                        opacity-0 animate-fade-up [animation-delay:200ms]">
            {t("label")}
          </p>

          <h1
            className={`
              ${isArabic ? "font-almarai" : "font-serif"} 
              text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl
              opacity-0 animate-fade-up [animation-delay:400ms]
            `}
          >
            {t("title")}
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-sm md:text-lg leading-relaxed 
                        text-primary-foreground/80
                        opacity-0 animate-fade-up [animation-delay:600ms]">
            {t("description")}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════
          The Origin
      ═══════════════════════════════ */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* صورة - من اليسار */}
            <div className="relative opacity-0 animate-slide-in-left [animation-delay:100ms]">
              <div className="relative aspect-4/5 overflow-hidden rounded-lg
                              shadow-lg transition-shadow duration-500 hover:shadow-2xl">
                <Image
                  src="/images/story-origin.jpg"
                  alt="Young Maria Rossi learning to cook with her grandmother in Italy"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Badge السنة - يطفو */}
              <div
                className={`absolute -bottom-6 ${locale === "ar" ? "left-6" : "right-6"} 
                           rounded-lg bg-accent px-6 py-4
                           animate-float
                           shadow-lg`}
              >
                <p className="font-serif text-3xl font-bold text-accent-foreground">
                  2026
                </p>
                <p className="text-xs font-medium text-accent-foreground/80">
                  Founded
                </p>
              </div>
            </div>

            {/* النص - من اليمين */}
            <div className="opacity-0 animate-slide-in-right [animation-delay:300ms]">
              <SectionHeader
                label={t("section1.label")}
                title={t("section1.title")}
                align="left"
              />
              <div className="mt-6 space-y-4 text-sm md:text-lg leading-relaxed text-foreground">
                <p className="text-justify opacity-0 animate-fade-up [animation-delay:400ms]">
                  {t("section1.p1")}
                </p>
                <p className="text-justify opacity-0 animate-fade-up [animation-delay:550ms]">
                  {t("section1.p2")}
                </p>
                <p className="text-justify opacity-0 animate-fade-up [animation-delay:700ms]">
                  {t("section1.p3")}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          Philosophy
      ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-10"
            sizes="100vw"
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          {/* Header */}
          <div className="opacity-0 animate-fade-up [animation-delay:100ms]">
            <SectionHeader
              colortitle="background"
              colordescription="background"
              label={t("philosophy.label")}
              title={t("philosophy.title")}
              description={t("philosophy.description")}
            />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: t("philosophy.items1.title"),
                description: t("philosophy.items1.description"),
                image: "/images/philosophy-1.jpg",
              },
              {
                title: t("philosophy.items2.title"),
                description: t("philosophy.items2.description"),
                image: "/images/philosophy-2.jpg",
              },
              {
                title: t("philosophy.items3.title"),
                description: t("philosophy.items3.description"),
                image: "/images/philosophy-3.jpg",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                style={{ animationDelay: `${200 + index * 150}ms` }}
                className="group opacity-0 animate-fade-up"
              >
                <div className="relative aspect-3/2 overflow-hidden rounded-lg
                                shadow-md transition-shadow duration-500 group-hover:shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay خفيف عالـ hover */}
                  <div className="absolute inset-0 bg-background/0 transition-colors duration-500
                                  group-hover:bg-background/10" />
                </div>

                <h3
                  className={`
                    ${locale === "ar" ? "font-almarai" : "font-serif"} 
                    mt-6 text-base md:text-xl font-bold text-background
                    transition-colors duration-300 group-hover:text-accent
                  `}
                >
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground
                              transition-colors duration-300 group-hover:text-background/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CTA
      ═══════════════════════════════ */}
      <section className="bg-background py-20 text-center lg:py-28 border-b border-border/50">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">

          <h2
            className={`
              text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl 
              ${locale === "ar" ? "font-almarai" : "font-serif"}
              opacity-0 animate-fade-up [animation-delay:100ms]
            `}
          >
            {t("CTASection.title")}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-primary-foreground/70
                        opacity-0 animate-fade-up [animation-delay:250ms]">
            {t("CTASection.description")}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row
                          opacity-0 animate-fade-up [animation-delay:400ms]">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90
                         transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <Link href="/contact">
                {t("CTASection.button")}
                <ArrowRight className="size-4 transition-transform duration-300 
                                       group-hover:translate-x-1" />
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
              {/* <Link href="/team">Meet the Team</Link> */}
            </Button>
          </div>

        </div>
      </section>
    </>
  );
}