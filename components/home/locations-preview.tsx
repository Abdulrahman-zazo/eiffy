import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { locations } from "@/lib/data"

export function LocationsPreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          label="Visit Us"
          title="Three Locations, One Family"
          description="Each of our restaurants offers a unique dining experience while staying true to The Hearth's philosophy of warmth, quality, and community."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/contact/${location.slug}`}
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
                    {location.tagline}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                    {location.shortName}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {location.description}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 shrink-0 text-accent" />
                    <span>{location.address}, {location.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="size-4 shrink-0 text-accent" />
                    <span>{location.hours[0].time}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
                  View Details & Menu
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/contact">
              All Locations
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
