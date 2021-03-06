/* eslint-disable @next/next/no-img-element */
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { useEffect, useState } from "react"
import Image from "next/image"
import "swiper/css/bundle"
// import { apiurl } from "../../utils/config"
import { useWindowSize } from "../../utils/hooks"
import { getData } from "../../utils/data"

function Carousel() {
  const [items, setItems] = useState({ loading: true, data: [] })
  const { width } = useWindowSize()

  useEffect(() => {
    // fetch(`${apiurl}/carousel`)
    //   .then((res) => res.json())
    //   .then((data) => setItems({ loading: false, data }))

    const data = getData()
    setItems({ data: data.carousel, loading: false })
  }, [])

  return (
    <div className="relative group">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="relative"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop="true"
        spaceBetween={20}
      >
        {width >= 850 && <PrevArrow />}
        {!items.loading &&
          items.data.map((item) => (
            <SwiperSlide key={item.img_url}>
              <img
                className="object-cover bg-center rounded-lg md:rounded-b-lg md:rounded-t-none"
                src={width >= 850 ? item.img.browser_url : item.img.mobile_url}
                alt={"Carousel item"}
                layout="fill"
              ></img>
            </SwiperSlide>
          ))}
        {width >= 850 && <NextArrow />}
      </Swiper>
    </div>
  )
}

function PrevArrow() {
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

function NextArrow() {
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

export default Carousel
