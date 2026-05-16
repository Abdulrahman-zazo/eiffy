import { Star, Quote } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { useLocale, useTranslations } from "next-intl"

export function TestimonialsSection() {
  const t = useTranslations("Testimonials")
  const locale = useLocale()

  const testimonials = t.raw("items") as Array<{
    quote: string
    author: string
    location: string
    rating: number
  }>

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="opacity-0 animate-fade-up [animation-delay:100ms]">
          <SectionHeader
            label={t("label")}
            title={t("title")}
          />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{ animationDelay: `${200 + index * 150}ms` }}
              className="group relative rounded-lg border border-primary-foreground/10 
                         bg-primary-foreground/5 p-8
                         opacity-0 animate-fade-up
                         transition-all duration-300
                         hover:-translate-y-1 hover:border-accent/30 
                         hover:bg-primary-foreground/10 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <Quote
                className={`absolute ${locale === "ar" ? "left-6" : "right-6"} top-6 
                           size-8 text-accent/20
                           transition-all duration-300
                           group-hover:scale-110 group-hover:text-accent/40`}
              />

              {/* Stars - يظهرون واحد واحد */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    style={{ animationDelay: `${300 + index * 150 + i * 60}ms` }}
                    className="size-4 fill-accent text-accent opacity-0 animate-scale-in"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-base leading-relaxed text-primary-foreground/90
                                     transition-colors duration-300 group-hover:text-primary-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full 
                                bg-accent/20 font-serif text-sm font-bold text-accent
                                transition-all duration-300
                                group-hover:scale-110 group-hover:bg-accent/30">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-primary-foreground/60">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}