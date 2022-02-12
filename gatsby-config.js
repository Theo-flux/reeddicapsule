module.exports = {
  siteMetadata: {
    title: `reeddiSite`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Reeddi",
        short_name: "Reeddi",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        icon: "src/images/favicon.ico",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
        icons: [
          {
            src: "src/images/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/images/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#000",
        display: "standalone",
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-breakpoints`,
  ],
};
