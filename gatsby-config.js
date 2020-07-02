module.exports = {
  siteMetadata: {
    title: `SasheemDev`,
    description: `Freelance Web Developer designing and creating online presences for up and coming businesses`,
    author: `Sasheem Snell`,
    githubLink: `https://github.com/Sasheem`,
    twitterLink: `https://twitter.com/sasheemdev`,
    linkedinLink: `https://www.linkedin.com/in/sasheem/`,
  },
  plugins: [
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require('./firebase.json'),
        types: [
          {
            type: 'User',
            collections: 'users',
            map: doc => ({
              name: doc.name,
            }),
          },
        ],
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/logo-dark-md-bgwhite.svg`,
        // icon: `src/images/code-logo-circle.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
