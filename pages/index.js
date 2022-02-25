import Carousel from "../components/home/Carousel"
import Layout from "../components/Layout"
import { getData } from "../utils/data"
import { useEffect, useState } from "react"
import SlidingComponent from "../components/SlidingComponent"

export default function Home() {
  const [movies, setMovies] = useState({ data: {}, loading: true })

  useEffect(() => {
    const data = getData()
    setMovies({ data: data.movies, loading: false })
  }, [])

  return (
    <Layout>
      <Carousel />
      {!movies.loading && <SlidingComponent data={movies.data} />}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Layout>
  )
}
