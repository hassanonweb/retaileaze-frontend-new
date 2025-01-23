"use client"
import { motion, Variants } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const CTA: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState<boolean>(false)

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      })
    }

    const observer: IntersectionObserver = new IntersectionObserver(callback, {
      threshold: 0.2,
    })

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (observer && imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative isolate overflow-hidden rounded-2xl bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#27ae5f" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            Boost your productivity. Start using our app today.
          </h2>
          <p className="mt-6 text-lg/8 text-pretty text-gray-300">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div
          ref={imageRef} // Attach ref to the image container
          className="relative mt-16 h-80 lg:mt-8"
        >
          {/* Use Framer Motion's motion.div to wrap the Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image
              alt="App screenshot"
              src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CTA
