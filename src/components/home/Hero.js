import React from "react";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
//import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { Background, Button1 } from "../index";

const Hero = ({ images }) => {
  const [index, setIndex] = React.useState(0);

  //AUTOMATIZACIJA
  /*
  React.useEffect(() => {
   const nextSlide = () => {
     setIndex((current) =>
       current === images.length - 1 ? 0 : current + 1
     );
   };
    const interval = setInterval(nextSlide, 6000);

    return () => {
      clearInterval(interval);
    };
  },[]);
*/
  React.useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  return (
    <Wrapper>
      <Background image={getImage(images[index])} home="true">
        <article>
          <p>Relax & spa centar</p>
          <h1>Liječenje Tijela Uma I Duha</h1>
          <Button1>Naše Usluge</Button1>
        </article>
{/* 
        <button
          className="prev-btn"
          onClick={() => setIndex(index - 1)}
          aria-label="swipe-left"
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          className="next-btn"
          onClick={() => setIndex(index + 1)}
          aria-label="swipe-right"
        >
          <FiChevronRight></FiChevronRight>
        </button>
        <div className="dots">
          {images.map((_, btnIndex) => {
            return (
              <button
                key={btnIndex}
                onClick={() => setIndex(btnIndex)}
                aria-label="Circle next image"
                className={index === btnIndex ? "active" : undefined}
              ></button>
            );
          })}
        </div>
        */}
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  article {
    color: var(--title-color);
    width: 85vw;
    max-width: 800px;
    text-align: center;
    @media (min-width: 1200px) {
      text-align: left;
      max-width: 600px;
      margin-right: 22rem;
    }
    h1 {
      text-transform: capitalize;
      font-weight: 500;
      line-height: 1.25;
      margin: 1rem 0 3rem 0;
      letter-spacing: 3px;
    }
    p {
      text-transform: capitalize;
      font-weight: 400;
      font-family: "Caveat", cursive;
      font-size: 1.5rem;
    }
    a {
      background: transparent;
      border: 2px solid var(--smoke-color);
      color: var(--smoke-color);
      padding: 0.25rem 1rem;
      text-transform: capitalize;
      letter-spacing: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: var(--transition);
    }
    a:hover {
      background: var(--smoke-color);
      color: var(--title-color);
    }
    @media (min-width: 800px) {
      /* padding: 0 1rem; */
      a {
        font-size: 1.25rem;
        padding: 0.5rem 1.25rem;
      }
      h1 {
        letter-spacing: 5px;
      }
    }
  }
  .next-btn,
  .prev-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5rem;
    background: transparent;
    color: var(--title-color);
    border: transparent;
    cursor: pointer;
    transition: var(--transition);
    @media (min-width: 800px) {
      & {
        font-size: 4.5rem;
      }
    }
  }
  .next-btn:hover,
  .prev-btn:hover {
    color: var(--theme-color);
  }
  .prev-btn {
    left: 0;
  }
  .next-btn {
    right: 0;
  }
  @media (min-width: 1000px) {
    .prev-btn {
      left: 3rem;
    }
    .next-btn {
      right: 3rem;
    }
  }
  .dots {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    button {
      display: block;
      cursor: pointer;
      height: 0.75rem;
      width: 0.75rem;
      border-radius: 50%;
      background: var(--title-color);
      margin: 0 1rem;
      border: 2px solid var(--title-color);
      @media (min-width: 800px) {
        & {
          height: 1rem;
          width: 1rem;
        }
      }
    }
    button.active {
      background-color: transparent;
    }
  }
`;

export default Hero;
