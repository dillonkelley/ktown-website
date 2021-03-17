import React from "react"
import Fade from "react-reveal"
import Head from "../components/head"

import Layout from "../components/layout"

import aboutPageStyles from "./about.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="about" />
      <Fade duration={1000}>
        <div className={aboutPageStyles.container}>
          <h1>about</h1>
          <div className={aboutPageStyles.photoContainer}>
            <img
              src="https://res.cloudinary.com/dilldog-industries/image/upload/v1616004398/who_is_karriasa.jpg"
              alt="karissa talanian"
              className={aboutPageStyles.image}
            />
          </div>
          <p>
            earth → rural new england → art school → logan square → avondale →
            ??
          </p>
          <p>
            loves color, functional objects, op art, records, flowers, the sun,
          </p>
          <p>plays the drums</p>
          <p>learning 日本語</p>

          <p>i have a dog named roo roo that i love a lot</p>
          <p>
            also run a small press cassette label that releases experimental
            music from japan http://eyevyberecords.com
          </p>
          <h3>CV</h3>
          <ul>
            <li>
              summer 2019 - graphic design work shown at "art at cole's #40"
              group show, cole's bar, chicago
            </li>
            <li>fall 2018 - solo fiber works show, handlebar, chicago</li>
            <li>
              summer 2018 - group show "kosmik kitsch", happy gallery, chicago
            </li>
            <li>winter 2014 - solo show, friend's shop, chicago</li>
            <li>spring 2009 - solo show, artichoke, harvard ma</li>
          </ul>
        </div>
      </Fade>
    </Layout>
  )
}

export default AboutPage
