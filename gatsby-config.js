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
        contentTypes: [`macrames`, `arts`],
      },
    },
  ],
}
