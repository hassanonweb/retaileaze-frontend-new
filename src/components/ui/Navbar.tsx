"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "../Button"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-white/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link
            href={siteConfig.baseLinks.home}
            aria-label="Home"
            className="flex items-center gap-2"
          >
            <Image
              src="/logo-icon.svg"
              width={25}
              height={25}
              alt="logo-icon"
            />
          </Link>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link className="px-2 py-1 text-gray-900" href="#solutions">
                Solutions
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="#pricing">
                Pricing
              </Link>
            </div>
          </nav>
          <div className="flex items-center gap-10 font-medium">
            <Link
              className="hidden px-2 py-1 text-gray-900 sm:block"
              href="#pricing"
            >
              Login
            </Link>
            {/* line to sepearte the login and get started button */}
            <div className="hidden h-6 w-[1px] bg-gray-400 sm:block"></div>
            <Button
              variant="secondary"
              className="hidden h-10 font-semibold sm:block"
            >
              Get Started
            </Button>
          </div>
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="p-1.5 sm:hidden"
            aria-label={open ? "CloseNavigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            ) : (
              <RiCloseFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            )}
          </Button>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            <li onClick={() => setOpen(false)}>
              <Link href="#solutions">Solutions</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="#pricing">Login</Link>
            </li>
          </ul>
          <Button variant="secondary" className="text-lg">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  )
}
