/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Image from "next/image"
import React from "react"

function Small({ item }) {
  return (
    <div className="w-40 h-auto relative hover:-translate-y-4 transition ease-in-out duration-300 text-white">
      <Link href={item.url}>
        <a>
          <img
            src={item.imgUrl}
            alt={item.title}
            className="object-cover rounded-lg max-w-none"
          />
          <p className="absolute top-0 right-0 flex items-center px-1 py-1s tracking-tighter bg-gradient-to-t from-[#b61a09] to-[#ff6d2e] rounded-tr-lg rounded-bl-lg">
            <Image
              src={"/assets/tick.svg"}
              alt={"premium"}
              height={16}
              width={16}
            />
            <span className="text-xs font-thin">Premium</span>
          </p>
          <h2 className="pt-1 font-medium tracking-tight">{item.title}</h2>
        </a>
      </Link>
    </div>
  )
}

export default Small
