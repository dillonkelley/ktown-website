import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Masonry from "react-masonry-css"

import Head from "../components/head"
import Layout from "../components/layout"
import Card from "../components/cardTemplate/fullCard"

import { shuffleArray } from "../utils/randomizer"
import "../styles/masonry.css"

const PhotosPage = () => {
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
  const macrames = data.allStrapiMacrames.edges
  const shuffledMacrame = shuffleArray(macrames)
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    948: 2,
    500: 2,
  }
  return (
    <Layout>
      <Head title="macramé" />
      <h1>macramé</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {shuffledMacrame.map((edge, i) => {
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
