import React from "react"
import SimpleReactLightbox from "simple-react-lightbox"

import Navbar from "./navbar"
import Footer from "./footer"

import "../styles/styles.css"
import layoutStyle from "./layout.module.css"

const Layout = props => {
  return (
    <div className={layoutStyle.body}>
      <Navbar />
      <div className={layoutStyle.content}>
        <SimpleReactLightbox>
          <main>{props.children}</main>
        </SimpleReactLightbox>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
