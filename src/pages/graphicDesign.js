import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Masonry from "react-masonry-css"

import Head from "../components/head"
import Layout from "../components/layout"
import Card from "../components/cardTemplate/fullCard"
import { shuffleArray } from "../utils/randomizer"

import "../styles/masonry.css"

const GraphicDesignPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiGraphics {
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
  const graphicDesign = data.allStrapiGraphics.edges
  const shuffledDesign = shuffleArray(graphicDesign)

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    948: 2,
    500: 2,
  }
  return (
    <Layout>
      <Head title="graphic design" />
      <h1>graphic design</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {shuffledDesign.map((edge, i) => {
          console.log("searching for the height:", edge.node.childImageSharp)
          return (
            <Card
              key={i}
              src={edge.node.photo.childImageSharp.fluid}
              title={edge.node.Title}
              description={edge.node.description}
              background={edge.node.backgroundHex}
              fontColor={edge.node.fontHex}
            />
          )
        })}
      </Masonry>
    </Layout>
  )
}

export default GraphicDesignPage
