import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
import { siteConfig, locations, menuUrl, FastfoodUrl, MenuSectionsData } from "@/lib/data";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata.menu" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${t("title")} | Eiffelya`,
      description: t("description"),
      url: `${siteConfig.url}/menu`,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: { canonical: `${siteConfig.url}/menu` },
  };
}

export default function MenuPage() {
  const t = useTranslations("MenuPage");
  const locale = useLocale();

  return (
    <>
      {/* ═══════════════════════════════
          Hero
      ═══════════════════════════════ */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-background">

        <div className="absolute inset-0 animate-scale-in">
          <Image
            src="/images/menu-hero.jpg"
            alt="Beautifully plated dishes from Eiffelya Restaurant"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/60 to-background/30" />
        </div>

        <div className="relative text-center z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent
                        opacity-0 animate-fade-up [animation-delay:200ms]">
            {t("hero.label")}
          </p>
          <h1
            className={`${locale === "ar" ? "font-almarai" : "font-serif"} 
                        text-4xl font-bold tracking-tight text-primary-foreground 
                        md:text-5xl lg:text-6xl
                        opacity-0 animate-fade-up [animation-delay:400ms]`}
          >
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed 
                        text-primary-foreground/80
                        opacity-0 animate-fade-up [animation-delay:600ms]">
            {t("hero.description")}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════
          Menu Sections
      ═══════════════════════════════ */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-20 lg:gap-28">
            {MenuSectionsData.map((section, index) => {
              const features = t.raw(`${section.id}.features`) as string[];
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={section.slug}
                  style={{ animationDelay: `${100 + index * 100}ms` }}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20
                              opacity-0 animate-fade-up
                              ${isReversed ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image */}
                  <div
                    className={`opacity-0 
                                ${isReversed
                                  ? "animate-slide-in-right [animation-delay:200ms]"
                                  : "animate-slide-in-left [animation-delay:200ms]"
                                }`}
                  >
                    <div className="relative aspect-4/3 overflow-hidden rounded-lg
                                    shadow-md transition-shadow duration-500 hover:shadow-2xl">
                      <Link href={section.menuLink} className="group block h-full w-full">
                        <Image
                          src={section.image}
                          alt={t(`${section.id}.name`)}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background/50 
                                        to-transparent opacity-0 transition-opacity duration-500
                                        group-hover:opacity-100" />
                      </Link>
                    </div>
                  </div>

                  {/* Info */}
                  <div
                    className={`flex flex-col items-start mx-2 opacity-0
                                ${isReversed
                                  ? "animate-slide-in-left [animation-delay:300ms]"
                                  : "animate-slide-in-right [animation-delay:300ms]"
                                }`}
                  >
                    <Badge
                      variant="outline"
                      className="mb-4 transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      {t(`${section.id}.tagline`)}
                    </Badge>

                    <h2
                      className={`${locale === "ar" ? "font-almarai" : "font-serif"} 
                                  text-2xl font-bold text-foreground md:text-4xl`}
                    >
                      {t(`${section.id}.name`)}
                    </h2>

                    <p className="mt-4 text-sm text-justify md:text-base leading-relaxed text-foreground">
                      {t(`${section.id}.description`)}
                    </p>

                    {/* Contact Info */}
                    <div className="mt-6 flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span className="text-sm text-foreground" dir="ltr">
                          {section.phone}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                        <div className="flex flex-col gap-1">
                          {section.hours.map((h, i) => (
                            <span key={i} className="text-sm text-foreground">
                              <span className="font-medium text-foreground">
                                {t(`${section.id}.${h.dayKey}`)}:
                              </span>{" "}
                              <span className="mx-1">{h.time}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {features.map((feature, fIndex) => (
                        <Badge
                          key={fIndex}
                          variant="secondary"
                          style={{ animationDelay: `${400 + fIndex * 80}ms` }}
                          className="opacity-0 animate-scale-in
                                     transition-transform duration-200 hover:scale-105"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="mt-8 group transition-transform duration-200 
                                 hover:scale-105 active:scale-95"
                      size="lg"
                    >
                      <Link href={section.menuLink}>
                        {t("viewMenu")}
                        <ArrowRight className="ms-2 size-4 rtl:rotate-180 
                                               transition-transform duration-300 
                                               group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          CTA
      ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-secondary py-20 text-center lg:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="mx-auto max-w-2xl px-4 lg:px-8">

          <div className="opacity-0 animate-fade-up [animation-delay:100ms]">
            <SectionHeader
              colorlabel="accent"
              colordescription="background"
              colortitle="background"
              label={t("events.label")}
              title={t("events.title")}
              description={t("events.description")}
            />
          </div>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90
                       opacity-0 animate-fade-up [animation-delay:300ms]
                       group transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Link href="/contact">
              {t("events.cta")}
              <ArrowRight className="size-4 transition-transform duration-300 
                                     group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}