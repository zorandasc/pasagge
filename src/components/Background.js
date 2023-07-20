import React from "react";
import styled, { /*keyframes*/ } from "styled-components";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const Background = ({ children, image, home }) => {
  // Use like this:
  const bgImage = convertToBgImage(image);

  return (
    <Wrapper home={home}>
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

/*
const fadeIn = keyframes`
  from{
    background-color:rgb(0,0,0,0.5);
  }
  to{
    background-color:rgba(0,0,0,0);
  }

`;

//animation: ${fadeIn} 3s ease-in-out 1 forwards;
*/

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    //min-height: 100vh;
    min-height: ${props => props.home ? "100vh" : "50vh"};
    //margin-top: -5rem;
    margin-top: ${props => props.home ? "-5rem" : "0"};
    display: grid;
    place-items: center;
    
    background-color:${props => props.home ? "rgba(0,0,0,0.1)" : "none"};

  }
`;

export default Background;
