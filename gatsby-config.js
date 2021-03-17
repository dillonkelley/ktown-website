require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Karissa Talanian",
    author: "Dillon Kelley",
    description:
      "Karissa Talanian is a Chicago based artist, musician, and designer. Her work is influenced by psychedelic culture and esoteric Japanese endeavors.",
    url: "https://karissatalanian.com",
    image: `${__dirname}/src/imgStatic/karissa_bio.webp`,
    twitterUsername: "amonduulthree",
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
