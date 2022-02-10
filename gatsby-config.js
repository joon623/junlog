// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/`,
        prismPreset: `prism-okaidia`,
      },
    },
  ],
  siteMetadata: {
    // Used for the site title and SEO
    title: `Junlog`,
    // Used to provide alt text for your avatar
    author: `Jun`,
    // Used for SEO
    description: `Jun의 개발일기`,
    // Used for resolving images in social cards
    siteUrl: `https://example.com`,
    // Used for social links in the root footer
    social: [
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/namjun-park-60423a1bb/`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/joon623`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        prismPreset: `dracula`,
      },
    },
  ],
}
