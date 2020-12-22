module.exports = {
  siteMetadata: {
    title: 'Nicholas Romero',
    author: 'Nicholas Romero',
    description: 'Personal site of Nicholas Romero',
    siteUrl: `https://ncrmro.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          //...
          `gatsby-remark-google-analytics-track-links`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-interactive-gifs`,
            options: {
              root: `${__dirname}`,
              src: `${__dirname}/posts/gifs`,
              dest: `${__dirname}/public/static/gifs`,
              play: `${__dirname}/src/assets/gifs/play-button.png`,
              placeholder: `${__dirname}/src/assets/gifs/loading.gif`,
              loading: `${__dirname}/src/assets/gifs/loading.gif`,
              relativePath: `/static/gifs`,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.SENTRY_DSN,
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `remark-image-attributes`,
    {
      resolve: `gatsby-remark-image-attributes`,
      options: {
        // ?Array<String>
        //   Any names declared here are added
        //   to the default set of attributes,
        //   which the plugin will use to style
        //   the image.
        styleAttributes: [`display`, `position`, `border`],

        // ?Boolean
        //   If true, all attributes that
        //   aren't styleAttributes, will be
        //   added as data-* attributes to the
        //   image.
        dataAttributes: true,
      },
    },
  ],
}