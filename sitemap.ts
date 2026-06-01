import Navbar             from '@/components/layout/Navbar'
import Footer             from '@/components/layout/Footer'
import HeroSection        from '@/components/sections/HeroSection'
import BookingWidget      from '@/components/sections/BookingWidget'
import PropertyHighlights from '@/components/sections/PropertyHighlights'
import AboutSection       from '@/components/sections/AboutSection'
import AmenitiesSection   from '@/components/sections/AmenitiesSection'
import GallerySection     from '@/components/sections/GallerySection'
import LocationSection    from '@/components/sections/LocationSection'
import ReviewsSection     from '@/components/sections/ReviewsSection'
import FaqSection         from '@/components/sections/FaqSection'
import WhyDirectSection   from '@/components/sections/WhyDirectSection'
import MobileBookingBar   from '@/components/sections/MobileBookingBar'
import { createAdminClient } from '@/lib/supabase/server'
import type { BlockedRange } from '@/types'

async function getBlockedRanges(): Promise<BlockedRange[]> {
  try {
    const supabase = createAdminClient()
    const { data } = await supabase.from('booked_ranges').select('check_in, check_out, source')
    return (data ?? []) as BlockedRange[]
  } catch { return [] }
}

export default async function HomePage() {
  const blockedRanges = await getBlockedRanges()
  return (
    <>
      <Navbar />
      <main>
        <div className="relative">
          <HeroSection />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:justify-end -mt-6 relative z-10 pb-8">
              <div className="w-full lg:w-80 xl:w-96">
                <BookingWidget blockedRanges={blockedRanges} />
              </div>
            </div>
          </div>
        </div>
        <PropertyHighlights />
        <AboutSection />
        <AmenitiesSection />
        <GallerySection />
        <LocationSection />
        <ReviewsSection />
        <WhyDirectSection />
        <FaqSection />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  )
}
