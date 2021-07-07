/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                additionalData: `@import "${__dirname}/src/styles/_global";`,
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
            },
        },
    ],
}
