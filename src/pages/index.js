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
            alt="macrame-karissia-talanian"
            src="https://res.cloudinary.com/dilldog-industries/image/upload/v1616000026/karissa_bio_qaaqcu.webp"
          />
        </Fade>
      </div>
    </Layout>
  )
}
export default WelcomePage
