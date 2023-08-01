import Head from "next/head"
import React from "react"
import { Navbar, Footer } from "@/components"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Destinations</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
