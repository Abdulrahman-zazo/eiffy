import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/section-header"
import { locations } from "@/lib/data"
import { useTranslations } from "next-intl"

const featuredDishes = [
  { ...locations[0].menu.find((m) => m.name === "Braised Short Rib")!, locationSlug: "downtown", locationName: "Downtown" },
  { ...locations[1].menu.find((m) => m.name === "Whole Grilled Lobster")!, locationSlug: "waterfront", locationName: "Waterfront" },
  { ...locations[1].menu.find((m) => m.name === "Seared Scallop Crudo")!, locationSlug: "garden", locationName: "Garden" },
]

export function FeaturedDishes() {
  const t = useTranslations("MenuPreview")

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="opacity-0 animate-fade-up [animation-delay:100ms]">
          <SectionHeader
            colordescription="background"
            colortitle="background"
            label={t("label")}
            title={t("title")}
            description={t("description")}
          />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featuredDishes.map((dish, index) => (
            <Link
              key={dish.name}
              href={`/contact`}
              style={{ animationDelay: `${200 + index * 150}ms` }}
              className="group opacity-0 animate-fade-up"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg
                              shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
                <Image
                  src={dish.image || "/images/menu/default.jpg"}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient - يصير أغمق عالـ hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 
                                via-background/20 to-transparent
                                transition-opacity duration-500 group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6
                                translate-y-1 transition-transform duration-500 
                                group-hover:translate-y-0">
                  <Badge
                    variant="secondary"
                    className="mb-3 text-xs transition-transform duration-300 
                               group-hover:scale-105"
                  >
                    {dish.locationName}
                  </Badge>

                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                    {dish.name}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed 
                                text-primary-foreground/70
                                transition-colors duration-300 group-hover:text-primary-foreground/90">
                    {dish.description}
                  </p>

                  {/* السعر + سهم - السهم يظهر عالـ hover */}
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-lg font-semibold text-accent">
                      ${dish.price}
                    </p>
                    <ArrowRight
                      className="size-4 text-accent opacity-0 -translate-x-2
                                 transition-all duration-300
                                 group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center opacity-0 animate-fade-up [animation-delay:650ms]">
          <Button
            asChild
            variant="outline"
            className="group transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Link href="/menu">
              {t("view")}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}