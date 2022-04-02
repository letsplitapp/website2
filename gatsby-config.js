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
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://letsplit.us1.list-manage.com/subscribe/post?u=4e80e7d44286b109737bef8e5&amp;id=e6787a7b33', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
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
