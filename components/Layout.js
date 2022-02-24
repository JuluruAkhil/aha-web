import Head from "next/head"
import { useRouter } from "next/router"
import HeaderLaptop from "./HeaderLaptop"

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

  return (
    <div className="bg-background-page h-full">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <HeaderLaptop className="absolute top-0 inset-x-0" />

      {/* {router.pathname === "/" && <Showcase />} */}

      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
}
