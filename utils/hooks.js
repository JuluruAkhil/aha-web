import { useState, useEffect } from "react"

export const useIfScroll = (headerHeight) => {
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
