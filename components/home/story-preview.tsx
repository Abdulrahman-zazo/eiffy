import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPinned, Salad, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { useTranslations } from "next-intl"

export function StoryPreview() {
  const t = useTranslations("StoryPreview")

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image Grid - يجي من اليسار */}
          <div className="relative opacity-0 animate-slide-in-left [animation-delay:100ms]">
            <div className="grid grid-cols-2 gap-4">
              
              {/* العمود الأول */}
              <div className="space-y-4">
                <div
                  className="relative aspect-3/4 overflow-hidden rounded-lg
                             transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl"
                >
                  <Image
                    src="/images/story-1.webp"
                    alt="Chef Maria preparing a signature dish"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div
                  className="relative aspect-square overflow-hidden rounded-lg
                             transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl"
                >
                  <Image
                    src="/images/story-2.webp"
                    alt="Fresh ingredients from local farms"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* العمود الثاني - offset للأعلى */}
              <div className="mt-8 space-y-4">
                <div
                  className="relative aspect-square overflow-hidden rounded-lg
                             transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl"
                >
                  <Image
                    src="/images/story-3.webp"
                    alt="The original Hearth dining room"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div
                  className="relative aspect-3/4 overflow-hidden rounded-lg
                             transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl"
                >
                  <Image
                    src="/images/story-4.webp"
                    alt="Family gathering at The Hearth"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Decorative accent - يطفو برفق */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-accent/10 animate-float" />
          </div>

          {/* Text Content - يجي من اليمين */}
          <div className="opacity-0 animate-slide-in-right [animation-delay:300ms]">
            <SectionHeader
              label={t("label")}
              title={t("title")}
              description={t("description")}
              align="left"
            />

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              
              {/* Stat 1 */}
              <div
                className="group opacity-0 animate-fade-up [animation-delay:500ms]
                           transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-serif text-3xl font-bold text-accent
                              transition-transform duration-300 group-hover:scale-110 inline-block">
                  <Sparkles />
                </p>
                <p className="mt-2 text-sm md:text-base text-foreground">
                  {t("stats.experience")}
                </p>
              </div>

              {/* Stat 2 */}
              <div
                className="group opacity-0 animate-fade-up [animation-delay:650ms]
                           transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-serif text-3xl font-bold text-accent
                              transition-transform duration-300 group-hover:scale-110 inline-block">
                  <MapPinned />
                </p>
                <p className="mt-2 text-sm md:text-base text-foreground">
                  {t("stats.locations")}
                </p>
              </div>

              {/* Stat 3 */}
              <div
                className="group opacity-0 animate-fade-up [animation-delay:800ms]
                           transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="font-serif text-3xl font-bold text-accent
                              transition-transform duration-300 group-hover:scale-110 inline-block">
                  <Salad />
                </p>
                <p className="mt-2 text-sm md:text-base text-foreground">
                  {t("stats.partners")}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              variant="link"
              className="mt-8 px-0 text-accent text-base group
                         opacity-0 animate-fade-up [animation-delay:900ms]"
            >
              <Link href="/about">
                {t("readMore")}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}