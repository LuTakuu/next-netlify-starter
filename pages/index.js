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
        <Header title="🚧 Work in Progress 🚧" />
        <p className="description">
            This site is currently under construction. Please check back soon!
        </p>
      </main>

      <Footer />
    </div>
  )
}
