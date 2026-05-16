import { HeroSection } from "@/components/home/hero-section"
import { StoryPreview } from "@/components/home/story-preview"
import { FeaturedDishes } from "@/components/home/featured-dishes"
import { LocationsPreview } from "@/components/home/locations-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StoryPreview />
      <FeaturedDishes />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
