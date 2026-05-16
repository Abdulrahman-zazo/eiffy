import Image from "next/image";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { locations, MenuSectionsData, siteConfig } from "@/lib/data";
import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.contact" });
  const baseUrl = "https://eiffelyasyria.com";
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${t("title")} | Eiffelya`,
      description: t("description"),
      url: `${baseUrl}/${locale}/contact`,
      images: [{ url: "/images/og-main.jpg", width: 1200, height: 630 }],
    },
    alternates: { canonical: `${baseUrl}/${locale}/contact` },
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const t = await getTranslations("");
  const isArabic = locale === "ar";

  return (
    <>
      {/* ═══════════════════════════════
          Hero
      ═══════════════════════════════ */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-background">

        <div className="absolute inset-0 animate-scale-in">
          <Image
            src="/images/team-hero.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/60 to-background/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent
                        opacity-0 animate-fade-up [animation-delay:200ms]">
            {t("ContactPage.header.label")}
          </p>
          <h1
            className={`${isArabic ? "font-almarai" : "font-serif"} 
                        text-4xl font-bold tracking-tight text-foreground 
                        md:text-5xl lg:text-6xl
                        opacity-0 animate-fade-up [animation-delay:400ms]`}
          >
            {t("ContactPage.header.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm md:text-lg leading-relaxed text-foreground/70
                        opacity-0 animate-fade-up [animation-delay:600ms]">
            {t("ContactPage.header.description")}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════
          Main Content
      ═══════════════════════════════ */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">

            {/* Form - يجي من اليسار */}
            <div className="lg:col-span-3 opacity-0 animate-slide-in-left [animation-delay:100ms]">
              <h2
                className={`${isArabic ? "font-almarai" : "font-serif"} 
                            text-xl md:text-2xl font-bold text-foreground`}
              >
                {t("ContactPage.form.title")}
              </h2>
              <p className="mt-2 text-sm text-foreground">
                {t("ContactPage.form.description")}
              </p>
              <ContactForm />
            </div>

            {/* Sidebar - يجي من اليمين */}
            <div className="lg:col-span-2 opacity-0 animate-slide-in-right [animation-delay:200ms]">
              <div className="flex flex-col gap-4">

                {/* General Info Card */}
                <div className="rounded-lg border border-border bg-card p-6
                                transition-all duration-300
                                hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md">
                  <h3
                    className={`${isArabic ? "font-almarai" : "font-serif"} 
                                text-lg font-bold text-card-foreground`}
                  >
                    {t("ContactPage.info.generalInquiries")}
                  </h3>
                  <div className="mt-2 flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <Mail className="size-4 shrink-0 text-accent mt-0.5" />
                      <span className="text-sm text-muted-foreground text-justify">
                        {t("ContactPage.info.supportEmail")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="size-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground" dir="ltr">
                        {t("ContactPage.info.supportPhone")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location Cards */}
                {MenuSectionsData.map((loc, index) => (
                  <div
                    key={loc.slug}
                    style={{ animationDelay: `${300 + index * 120}ms` }}
                    className="rounded-lg border border-border bg-card p-6
                               opacity-0 animate-fade-up
                               transition-all duration-300
                               hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md"
                  >
                    <h3
                      className={`${isArabic ? "font-almarai" : "font-serif"} 
                                  text-lg font-bold text-card-foreground`}
                    >
                      {t(`MenuPage.${loc.id}.name`)}
                    </h3>
                    <div className="mt-1 flex flex-col gap-3">
                      <div className="flex items-start gap-3">
                        <span className="text-sm text-muted-foreground text-justify">
                          {t(`MenuPage.${loc.id}.description`)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="size-4 shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground" dir="ltr">
                          {loc.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          Map Section
      ═══════════════════════════════ */}
      <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 lg:px-8">

          <div className="opacity-0 animate-fade-up [animation-delay:100ms]">
            <SectionHeader
              colordescription="background"
              colortitle="background"
              label={t("LocationSection.label_map")}
              title={t("LocationSection.title_map")}
              description={t("LocationSection.description_map")}
            />
          </div>

          {/* Map - scale-in */}
          <div className="mt-10 w-full overflow-hidden rounded-2xl border shadow-lg
                          opacity-0 animate-scale-in [animation-delay:200ms]
                          transition-shadow duration-500 hover:shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d741.73962364672!2d37.124724375233576!3d36.21641049046381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff7001c098f07%3A0x316959b93dc87263!2sEiffelya!5e0!3m2!1sar!2sqa!4v1778352045021!5m2!1sar!2sqa"
              className="h-[350px] w-full md:h-[500px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <Button
            asChild
            size="lg"
            className="mt-6 flex justify-center text-accent-foreground
                       opacity-0 animate-fade-up [animation-delay:400ms]
                       group transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <a
              href={siteConfig.socials.map}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("LocationSection.openMap")}
              <MapPin className="size-4 transition-transform duration-300 
                                 group-hover:scale-125" />
            </a>
          </Button>

        </div>
      </section>
    </>
  );
}