import React from "react"
import { NextArrow, PrevArrow } from "./Arrows"
import Small from "./title/Small"
import { useWindowSize } from "../utils/hooks"

function SlidingComponent({ data }) {
  const { width } = useWindowSize()
  return (
    <div className="w-100">
      <h2 className="font-semibold text-2xl mt-4 text-white mx-4 md:mx-8">
        {data.title}
      </h2>
      <div className="py-4 space-y-4 scroll-smooth overflow-x-scroll no-scrollbar overflow-y-hidden relative group">
        <div className="flex pl-4 md:pl-8 gap-4">
          {width >= 900 && <PrevArrow />}
          {data.info.map((item) => (
            <Small item={item} key={item.title} />
          ))}
          {width >= 900 && <NextArrow />}
        </div>
      </div>
    </div>
  )
}

export default SlidingComponent
