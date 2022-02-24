import { useState, useEffect } from "react"

export const useIfScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return [isScrolling]
}

export const useGetWidth = () => {
  const [width, setWidth] = useState(0)
  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return [width]
}
