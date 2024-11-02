import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Counter from '@components/Counter';

export default function Home() {
  return (

    <div className="container">
      <Head>
        <title>Work in Progress!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <Header title="🚧 Work in Progress 🚧"/>
            <p className="description">
                This site is currently under construction. Please check back soon!
            </p>
            <div>
                <Counter/>
            </div>
        </main>

        <Footer/>
    </div>
  )
}
