import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const BackgroundHero = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "church.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundHero = styled(BackgroundHero)`
  width: 100%;
  background-repeat: repeat-y;
`;

export default StyledBackgroundHero;
