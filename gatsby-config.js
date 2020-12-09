require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Karissa Talanian",
    author: "Dillon Kelley",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/imgStatic`,
        name: `staticPhotos`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL:
          `https://karissa-talanian-cms.herokuapp.com` ||
          `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`macrames`, `arts`, `graphics`],
        singleTypes: [`splash-img`, `about-me`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_NAME,
        apiKey: process.env.CLOUDINARY_KEY,
        apiSecret: process.env.CLOUDINARY_SECRET,
        resourceType: `image`,
        maxResults: 200,
        context: true,
        tags: true,
        // type: `type Value`,
        // prefix: `abc-xyz/`,
      },
    },
  ],
}
