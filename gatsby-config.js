module.exports = {
  pathPrefix: `/test1`,
  siteMetadata: {
    siteUrl: "https://jpbelley.github.io/qa/",
    title: "Let's split",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
