import React from "react"
import Head from "../components/head"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import aboutPageStyles from "./about.module.css"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "portrait" }) {
        id
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
      <Head title="about" />
      <div className={aboutPageStyles.container}>
        <h1>about me</h1>
        <div className={aboutPageStyles.photoContainer}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            className={aboutPageStyles.photo}
          />
        </div>
        <p>
          earth ~ rural new england ~ art school ~ logan square ~ avondale ~ ??
        </p>
        <p>
          loves color, functional objects, op art, records, flowers, the sun,
        </p>
        <p>play the drums</p>
        <p>learning 日本語</p>
        <p>i have a dog that i love a lot</p>

        <p>
          also run a small press cassette label that releases experimental music
          from japan
        </p>
        <p>
          <a href="http://eyevyberecords.com" target="_blank" rel="noreferrer">
            http://eyevyberecords.com
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
