import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
      <>
        <Head>
            <title key="title">Layout</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <div className="font-body bg-gray-100 min-h-screen flex flex-col">
            <Header/>
            <mail className="flex flex-1 justify-center w-full px-6">
                <div className="w-full max-w-screen-xl py-6">
                    {children}
                </div>
            </mail>
            <Footer/>
        </div>
        {/* <Footer /> */}
      </>
    )
  }
