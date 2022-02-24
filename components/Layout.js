import Head from "next/head"
import { useRouter } from "next/router"
import { useIfScroll } from "../utils/hooks"
import HeaderLaptop from "./HeaderLaptop"
import HeaderMobile from "./HeaderMobile"
import MobileNav from "./MobileNav"
import { useWindowSize } from "../utils/hooks"

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()
  const [isScrolling] = useIfScroll()
  const { width } = useWindowSize()

  return (
    <div className="bg-background-page h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div
        className={`${
          !isScrolling
            ? "bg-gradient-to-b from-black/60 to-black/0"
            : "bg-background-1"
        } bg-gradient-to-b from-black/20 to-black/0 px-8 py-5 text-white md:fixed md:inset-x-0 md:top-0 md:z-20`}
      >
        <div className="hidden lg:block">
          <HeaderLaptop />
        </div>
        <div className="lg:hidden">
          <HeaderMobile />
        </div>
      </div>

      {/* {router.pathname === "/" && <Showcase />} */}

      <div>{children}</div>

      {width <= 850 && <MobileNav />}
      {/* <Footer /> */}
    </div>
  )
}

Layout.defaultProps = {
  title: "Watch Online Movies | South Indian movies & web series | aha",
  description:
    "Watch unlimited online movies across various genres and languages. Stream movies online from our wide range of latest movies. Always HD and ad-free exclusively on aha",
  keywords: "movies, tv, series, shows",
}
