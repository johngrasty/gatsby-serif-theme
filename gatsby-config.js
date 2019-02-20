const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: "Mount Greylock Baptist Church",
    description: "my theme",
    contact: {
      phone: "XXX XXX XXX",
      email: "zerostaticthemes@gmail.com"
    },
    menuLinks: [
      {
        name: "Services",
        link: "/services"
      },
      {
        name: "Team",
        link: "/team"
      },
      {
        name: "Testimonials",
        link: "/testimonials"
      },
      {
        name: "Contact",
        link: "/contact"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-background-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: guid ? guid : "UA-XXX-1",
        // Puts tracking script in the head instead of the body
        head: false
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    "gatsby-plugin-postcss"
  ]
};
