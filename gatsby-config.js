module.exports = {
    siteMetadata: {
        title: `getting-started-gatsby`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        'gatsby-plugin-mdx',
    ],
};
