import Image from "next/image"
import { useSwiper } from "swiper/react"

export function PrevArrow() {
  const swiper = useSwiper()
  return (
    <div
      className="absolute left-0 inset-y-0 z-10 hidden group-hover:flex items-center content-center px-6 text-white group-hover:bg-gradient-to-r group-hover:from-black/40 group-hover:to-black/0 transition"
      onClick={() => swiper.slidePrev()}
    >
      <Image
        src="https://www.aha.video/left-arrow.9dac92970c7bc4c051e3.png"
        height={24}
        width={14}
        alt={"previous"}
      />
    </div>
  )
}

export function NextArrow() {
  const swiper = useSwiper()
  return (
    <div
      className="absolute hidden right-0 inset-y-0 z-10 group-hover:flex items-center content-center px-6 group-hover:bg-gradient-to-l group-hover:from-black/40 group-hover:to-black/0"
      onClick={() => swiper.slideNext()}
    >
      <Image
        src="https://www.aha.video/aha-arrow.3ae0cd913ff5a84187b2.svg"
        height={24}
        width={14}
        alt={"previous"}
      />
    </div>
  )
}
