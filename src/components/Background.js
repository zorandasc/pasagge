import React from "react";
import styled, { keyframes } from "styled-components";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const Background = ({ children, image }) => {
  // Use like this:
  const bgImage = convertToBgImage(image);

  return (
    <Wrapper>
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
        className="bcg"
      >
        {children}
      </BackgroundImage>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from{
    background-color:rgb(0,0,0,0.5);
  }
  to{
    background-color:rgba(0,0,0,0);
  }

`;

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 3s ease-in-out 1 forwards;
  }
`;

export default Background;
