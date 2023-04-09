import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import '@/styles/globals.css'
import { Quicksand } from 'next/font/google'
import Head from 'next/head'

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quick",
  display: "swap"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${quicksand.variable} font-quick bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
