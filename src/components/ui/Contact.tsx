import { RiMailSendFill, RiPhoneFill } from "@remixicon/react"
import { StickerCard } from "./StickerCard"

export function Contact() {
  return (
    <section
      aria-labelledby="solar-analytics"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="solar-analytics"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-[#27ae5f]"
        >
          Contact
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-[#27ae5f]" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Get in touch with us
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1">
        <StickerCard
          Icon={RiMailSendFill}
          title="Email"
          description="Send us an email at
            <a href='mailto:hassan@mail.com'>

            </a>
            "
        />
        <StickerCard
          Icon={RiPhoneFill}
          title="Phone"
          description="Call us at
            <a href='tel:+923000000000'>
            +923000000000
            </a>
            "
        />
      </div>
    </section>
  )
}
