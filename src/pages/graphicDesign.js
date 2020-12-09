import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Fade from "react-reveal"
import Masonry from "react-masonry-css"
import { SRLWrapper } from "simple-react-lightbox"

import Head from "../components/head"
import Layout from "../components/layout"
import { shuffleArray } from "../utils/randomizer"
import {
  matchFolder,
  parseUrlToFull,
  parseUrlToThumb,
} from "../utils/urlParser"

import "../styles/masonry.css"

const GraphicDesignPage = () => {
  const cloudinaryUrls = useStaticQuery(graphql`
    query CloudinaryImage {
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
  const graphicDesignUrls = matchFolder(
    cloudinaryUrls.allCloudinaryMedia.edges,
    "graphics"
  )
  const shuffledDesign = shuffleArray(graphicDesignUrls)

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    948: 2,
    500: 2,
  }

  return (
    <Layout>
      <Head title="graphic design" />
      <Fade duration={1000}>
        <h1>graphic design</h1>
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
            {shuffledDesign.map((edge, i) => {
              const thumb = parseUrlToThumb(edge.node.secure_url)
              const full = parseUrlToFull(edge.node.secure_url)
              return (
                <div className="image" key={i} role="button" tabIndex={0}>
                  <a
                    href={full}
                    data-attribute="SRL"
                    title={edge.node.context.custom.alt}
                  >
                    <img src={thumb} alt={edge.node.context.custom.caption} />
                  </a>
                </div>
              )
            })}
          </Masonry>
        </SRLWrapper>
      </Fade>
    </Layout>
  )
}

export default GraphicDesignPage
