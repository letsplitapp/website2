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
          `poppins`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://letsplit.us1.list-manage.com/subscribe/post?u=4e80e7d44286b109737bef8e5&amp;id=e6787a7b33", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-QV5JPB19X0", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        // googleTagManager: {
        //   trackingId: "TRACKING_ID_HERE", // leave empty if you want to disable the tracker
        //   cookieName: "gatsby-gdpr-google-tagmanager", // default
        //   dataLayerName: "dataLayer", // default
        // },
        // facebookPixel: {
        //   pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-facebook-pixel', // default
        // },
        // tikTokPixel: {
        //   pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-tiktok-pixel', // default
        // },
        // hotjar: {
        //   hjid: 'YOUR_HOTJAR_ID',
        //   hjsv: 'YOUR_HOTJAR_SNIPPET_VERSION',
        //   cookieName: 'gatsby-gdpr-hotjar', // default
        // },
        // linkedin: {
        //   trackingId: 'YOUR_LINKEDIN_TRACKING_ID', // leave empty if you want to disable the tracker
        //   cookieName: 'gatsby-gdpr-linked-in', // default
        // },
        // // defines the environments where the tracking should be available  - default is ["production"]
        // environments: ["production", "development"],
      },
    },
  ],
};
