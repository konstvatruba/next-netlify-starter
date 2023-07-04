import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> 
        <Header title="GRACIAS POR VISITAR NUESTRA PÁGINA WEB" />
        <p className="description">
          Bienvenidos a nuestra nueva página web en vez de la antigua <http://vulturchile.tilda.ws>
        </p>
      </main>

          Muchas gracxias por visitarnos. Somos Vultur Chile, un equipo de profesionales dedicados a 

            <img src="Screenshot 2023-07-03 at 21.59.57.png" width="213" height="152">

      <Footer />
    </div>
  )
}
