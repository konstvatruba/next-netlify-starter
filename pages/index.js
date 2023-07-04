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
        <Header title="Welcome to my app!" />
        <p className="description">
          Bienvenidos a buestra nueva página web en vez de la antigua http://vulturchile.tilda.ws
        </p>
        <img src="/Screenshot 2023-07-03 at 21.59.57.png" alt="Vultur Old Page" className={styles.img} />
      </main>

      <Footer />
    </div>
  )
}
