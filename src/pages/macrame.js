import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { SRLWrapper } from "simple-react-lightbox"
import Masonry from "react-masonry-css"
import Fade from "react-reveal/Fade"

import Head from "../components/head"
import Layout from "../components/layout"
import {
  matchFolder,
  parseUrlToFull,
  parseUrlToThumb,
} from "../utils/urlParser"

// import Card from "../components/cardTemplate/fullCard"

import { shuffleArray } from "../utils/randomizer"
import "../styles/masonry.css"

const PhotosPage = () => {
  const cloudinaryUrls = useStaticQuery(graphql`
    query {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
            context {
              custom {
                alt
                caption
              }
            }
          }
        }
      }
    }
  `)
  const macrameUrls = matchFolder(
    cloudinaryUrls.allCloudinaryMedia.edges,
    "macrame"
  )
  const shuffledMacrame = shuffleArray(macrameUrls)

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    948: 2,
    500: 2,
  }
  return (
    <Layout>
      <Head title="macramé" />
      <h1>macrame</h1>
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
          {shuffledMacrame.map((edge, i) => {
            const thumb = parseUrlToThumb(edge.node.secure_url)
            const full = parseUrlToFull(edge.node.secure_url)
            return (
              <Fade duration={1000}>
                <div className="image" key={i} role="button" tabIndex={0}>
                  <a
                    href={full}
                    data-attribute="SRL"
                    title={edge.node.context.custom.caption}
                  >
                    <img src={thumb} alt={edge.node.context.custom.alt} />
                  </a>
                </div>
              </Fade>
            )
          })}
        </Masonry>
      </SRLWrapper>
    </Layout>
  )
}

export default PhotosPage
