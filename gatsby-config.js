module.exports = {
  siteMetadata: {
    title: "Moon-Licht Cocktails",
    description: "We zijn de beste cocktail makers van het land.",
    author: "Sumaya M A",
    siteUrl: "http://moonlightcocktails.local/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://moonlightcocktails.local/graphql",
      },
    },
  ],
};