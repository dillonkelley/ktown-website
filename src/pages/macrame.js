import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Masonry from "react-masonry-css"
import { window } from "browser-monads"

import Head from "../components/head"
import Layout from "../components/layout"
import Card from "../components/cardTemplate/fullCard"

import "../styles/masonry.css"

const PhotosPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    if (width < 700) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [width])

  const data = useStaticQuery(graphql`
    query {
      allStrapiMacrames {
        edges {
          node {
            title
            description
            backgroundHex
            fontHex
            photo {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="macramé" />
      <h1>macramé</h1>
      <Masonry
        breakpointCols={isMobile ? 2 : 3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.allStrapiMacrames.edges.map((edge, i) => {
          console.log("searching for the height:", edge.node.childImageSharp)
          //random funtion
          console.log(i)
          return (
            <Card
              key={i}
              src={edge.node.photo.childImageSharp.fluid}
              title={edge.node.title}
              description={edge.node.description}
              background={edge.node.backgroundHex}
              fontColor={edge.node.fontHex}
              // height={edge.node.photo.childImageSharp.fluid.tracedSVG}
            />
          )
        })}
      </Masonry>
    </Layout>
  )
}

export default PhotosPage
