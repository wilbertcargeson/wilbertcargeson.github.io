module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Software Developer Portfolio",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Wilbert Cargeson Portfolio`,
                short_name: `WC-Portfolio`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: "src/images/Icon.png",
            },
        },
    ],
};
