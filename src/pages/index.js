import React from "react"
import Fade from "react-reveal"
import Head from "../components/head"
import Layout from "../components/layout"

import indexStyles from "./index.module.css"

const WelcomePage = () => {
  return (
    <Layout>
      <Head />
      <div className={indexStyles.container}>
        <Fade duration={1000}>
          <h1 className={indexStyles.title}>karissa talanian</h1>

          <img
            className={indexStyles.photo}
            src="https://res.cloudinary.com/dgkwrjld1/image/upload/w_700,c_fill,g_auto,e_sharpen/v1607532597/splash/ktown-splashPhoto_lducgf.jpg"
          />
        </Fade>
      </div>
    </Layout>
  )
}
export default WelcomePage
