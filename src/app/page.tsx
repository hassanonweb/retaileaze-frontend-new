import CTA from "@/components/ui/CTA"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import { Map } from "@/components/ui/Map/Map"
import { Pricing } from "@/components/ui/Pricing"
import { SolarAnalytics } from "@/components/ui/SolarAnalytics"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-40">
        <Hero />
      </div>
      <div className="mt-36 px-4 xl:px-0">
        <Features />
      </div>

      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="px-4 xl:px-0">
        <Map />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="mt-12 px-4 xl:px-0">
        <SolarAnalytics />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="mt-12 px-4 xl:px-0">
        <Pricing />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="mb-16 px-4 xl:px-0">
        <CTA />
      </div>
    </main>
  )
}
