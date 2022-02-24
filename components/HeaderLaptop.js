import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import { useIfScroll } from "../utils/hooks"

function HeaderLaptop() {
  const router = useRouter()

  const [isScrolling] = useIfScroll()

  return (
    <div
      className={`${
        !isScrolling
          ? "bg-gradient-to-b from-black/60 to-black/0"
          : "bg-background-1"
      } bg-gradient-to-b from-black/20 to-black/0 px-8 py-5 text-white fixed inset-x-0 top-0 z-20`}
    >
      <div className="flex items-center space-x-6">
        <div>
          <Link href="/">
            <a>
              <Image
                src={"/assets/aha-logo.png"}
                alt="aha logo"
                height={30}
                width={60}
                objectFit={"cover"}
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-10 text-sm font-medium tracking-tight px-8 grow">
          <Link href="/">
            <a className={router.pathname == "/" ? "" : "text-white/70"}>
              Home
            </a>
          </Link>
          <Link href="/movies">
            <a className={router.pathname == "/movies" ? "" : "text-white/70"}>
              Movies
            </a>
          </Link>
          <Link href="/shows">
            <a className={router.pathname == "/shows" ? "" : "text-white/70"}>
              Shows
            </a>
          </Link>
          <Link href="/kids">
            <a className={router.pathname == "/kids" ? "" : "text-white/70"}>
              Kids
            </a>
          </Link>
          <Link href="/profile">
            <a className={router.pathname == "/profile" ? "" : "text-white/70"}>
              My aha
            </a>
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <div>
            <Image
              src="/assets/search-icon.svg"
              height={16}
              width={16}
              alt={"search"}
            />
          </div>
          <div>
            <Image
              src="/assets/language-icon.svg"
              height={24}
              width={24}
              alt={"language select"}
            />
          </div>
        </div>
        <Link href={"/subscribe"}>
          <a className="px-6 py-2 rounded-l-full rounded-r-full font-semibold text-sm bg-gradient-to-t from-[#b61a09] to-[#ff6d2e]">
            Subscribe Now
          </a>
        </Link>
        <div>Sign In</div>
      </div>
    </div>
  )
}

export default Header
