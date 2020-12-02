import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Head from "../components/head"
import Layout from "../components/layout"

import indexStyles from "./index.module.css"

const WelcomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "index" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head />
      <h1>karissa talanian</h1>

      <Image
        className={indexStyles.photo}
        fluid={data.file.childImageSharp.fluid}
      />
    </Layout>
  )
}
export default WelcomePage
