import React, { useContext } from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { GatsbyContext } from "../context/context";
import { Layout, Seo, Background } from "../components";

const Card = ({ number, url, handleClick }) => {
  const { size } = useContext(GatsbyContext);
  return (
    <button
      type="button"
      aria-label="image gallery"
      onClick={size > 768 ? handleClick : null}
      className={`card 
      ${number === 1 ? "card-tall card-wide" : ""} 
      ${number === 2 ? "card-tall" : ""}
      ${number === 7 ? "card-wide" : ""}`}
    >
      <GatsbyImage className="img" image={getImage(url)} alt="galery image" />
    </button>
  );
};

const Gallery = ({ data }) => {
  const [showLightBox, setShowLightBox] = React.useState(false);
  const [lightBoxUrl, setLightBoxUrl] = React.useState(null);

  const cards = [
    {
      number: 1,
      url: data.appointImage,
    },
    {
      number: 2,
      url: data.gallImage3,
    },
    {
      number: 3,
      url: data.massageImage3,
    },
    {
      number: 4,
      url: data.massageImage1,
    },
    {
      number: 5,
      url: data.sminka3,
    },

    {
      number: 6,
      url: data.aboutImage1,
    },

    {
      number: 7,
      url: data.sminka2,
    },
    {
      number: 8,
      url: data.gallImage1,
    },
    {
      number: 9,
      url: data.gallImage2,
    },
    {
      number: 10,
      url: data.sminka1,
    },
    {
      number: 11,
      url: data.commentImage,
    },
    {
      number: 12,
      url: data.gallImage4,
    },
    {
      number: 13,
      url: data.massageImage4,
    },
    {
      number: 14,
      url: data.massageImage2,
    },
  ];

  const handleImageClick = (url) => {
    setLightBoxUrl(url);
    setShowLightBox(true);
  };

  return (
    <Layout>
      <Wrapper>
        <Background image={getImage(data.heroImage1)}>
          <div className="section-center">
            <div className="contact-header-title">
              <ul>
                <li>
                  <Link to="/">Početna</Link>
                </li>
                <li>Galerija</li>
              </ul>
              <div>
                <h1>GALERIJA</h1>
              </div>
            </div>
          </div>
        </Background>
        <div className="gallery-center">
          <div className="photo-grid">
            {cards.map(({ number, url }) => {
              return (
                <Card
                  key={number}
                  number={number}
                  url={url}
                  handleClick={() => handleImageClick(url)}
                ></Card>
              );
            })}
          </div>
        </div>
        <div
          id="portfolio-item-1"
          className={
            showLightBox
              ? "portfolio-lightbox portfolio-lightbox-target"
              : "portfolio-lightbox"
          }
        >
          <div className="portfolio-lighthbox_content">
            <button
              onClick={() => setShowLightBox(false)}
              aria-label="close"
              className="close"
            ></button>
            {lightBoxUrl && (
              <GatsbyImage
                className="portfolio-lightbox__image"
                image={getImage(lightBoxUrl)}
                alt="galery"
              />
            )}
            {/* 
            <h3 className="portfolio_lightbox_title">
              This is title inide lightbox
            </h3>
            <p className="portfolio_lightbox_body">
              This is body inide lightbox
            </p>
            */}
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImage1: file(name: { eq: "pageBg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    appointImage: file(name: { eq: "appointBg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    commentImage: file(name: { eq: "commentBg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    aboutImage1: file(name: { eq: "about1" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    massageImage1: file(name: { eq: "massage1" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    massageImage2: file(name: { eq: "massage2" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    sminka1: file(name: { eq: "sminka1" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    massageImage3: file(name: { eq: "massage3" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    massageImage4: file(name: { eq: "massage4" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    gallImage1: file(name: { eq: "gallery1" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    sminka2: file(name: { eq: "sminka2" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    gallImage2: file(name: { eq: "gallery2" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    gallImage3: file(name: { eq: "gallery3" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    sminka3: file(name: { eq: "sminka3" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    gallImage4: file(name: { eq: "gallery4" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

const Wrapper = styled.section`
  .contact-header-title {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 0 0 31px;
      list-style: none;
      color: var(--theme-color);
      font-size: 20px;

      li:first-child a {
        color: var(--title-color);
      }
      li:first-child a:hover {
        color: var(--theme-color);
      }

      li:not(:first-child)::before {
        content: ">>";
        border-radius: 50%;
        padding: 0 11px;
        color: var(--theme-color);
        font-size: 20px;
        font-weight: 900;
        display: inline-block;
      }
    }
  }
  .gallery-center {
    background: var(--smoke-color);
    padding: 50px 0;
    @media (min-width: 768px) {
      padding: 100px 0;
    }
    .photo-grid {
      display: grid;
      gap: 1rem;
      /*IMPLICITNI GRID SA AUTO FIT*/
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      grid-auto-rows: 270px;
      .card {
        cursor: pointer;
        border: none;
        outline: none;
        background: #353535;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        color: #fff;
        box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
          rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        transition: all 500ms;
        overflow: hidden;
        &:hover {
          box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
            rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
          transform: translateY(-3px) scale(1.1);
        }
        .img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .portfolio-lightbox {
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2em;
    background: rgba(0, 0, 0, 0.5);
    /*box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.25);*/
    width: 100vw;
    height: 100vh;
    color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0, 1);
    transform-origin: right;
    transition: transform 500ms ease-in-out;

    .portfolio-lighthbox_content {
      width: 95%;
      max-width: 700px;
      background: black;
      padding: 1em;
      position: relative;
      .portfolio-lightbox__image {
        width: 100%;
        height: 100%;
        display: block;
        margin-bottom: 1em;
        object-fit: contain;
      }
      .close {
        cursor: pointer;
        position: absolute;
        width: 4em;
        height: 4em;
        background: var(--theme-color);
        top: -1em;
        right: -1em;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid whitesmoke;
        z-index: 4;
        &::after {
          content: "X";
          color: aliceblue;
          font-weight: 700;
        }
      }
    }
  }

  .portfolio-lightbox-target {
    transform: scale(1, 1);
    transform-origin: left;
  }

  @media screen and (min-width: 600px) {
    .card-tall {
      grid-row: span 2 / auto;
    }

    .card-wide {
      grid-column: span 2 / auto;
    }
  }
`;

export const Head = () => <Seo title="Galerija Radova" />;

export default Gallery;
