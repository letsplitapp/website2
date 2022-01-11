module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    siteUrl: "https://letsplitapp.github.io/website2",
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
