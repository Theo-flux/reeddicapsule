module.exports = {
  siteMetadata: {
    title: `reeddiSite`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Reeddi',
        short_name: 'Reeddi',
        start_url: '/',
        icon: 'src/images/icon.png'
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-breakpoints`
  ],
};

