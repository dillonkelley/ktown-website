import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Masonry from "react-masonry-css"
import { SRLWrapper } from "simple-react-lightbox"
import Img from "gatsby-image"
import Head from "../components/head"
import Layout from "../components/layout"
import { shuffleArray } from "../utils/randomizer"

import "../styles/masonry.css"

const ArtPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiArts {
        edges {
          node {
            Title
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
  const arts = data.allStrapiArts.edges
  const shuffledArt = shuffleArray(arts)
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    948: 2,
    500: 2,
  }
  return (
    <Layout>
      <Head title="art" />
      <h1>fiber art</h1>
      <SRLWrapper
        options={{
          settings: {
            overlayColor: "rgba(0, 0, 0, 0.9)",
            height: "91vh",
          },
          buttons: {
            showDownloadButton: false,
            showThumbnailsButton: false,
            showAutoplayButton: false,
            size: "10px",
            showCloseButton: true,
          },
          thumbnails: {
            showThumbnails: false,
          },
        }}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {shuffledArt.map((edge, i) => {
            return (
              <div className="posters" key={i} role="button" tabIndex={0}>
                <Img
                  fluid={edge.node.photo.childImageSharp.fluid}
                  title={edge.node.Title}
                  alt={edge.node.description}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )
          })}
        </Masonry>
      </SRLWrapper>
    </Layout>
  )
}

export default ArtPage
