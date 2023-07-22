import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { Layout, Seo, Background } from "../components";

const cards = [
  {
    number: 1,
    url: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  },
  {
    number: 2,
    url: "https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80",
  },
  {
    number: 3,
    url: "https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
  },
  {
    number: 4,
    url: "https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
  },
  {
    number: 5,
    url: "https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    number: 6,
    url: "https://images.unsplash.com/photo-1583445013765-46c20c4a6772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
  {
    number: 7,
    url: "https://images.unsplash.com/photo-1583562835057-a62d1beffbf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80",
  },
  {
    number: 8,
    url: "https://images.unsplash.com/photo-1583483425010-c566431a7710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
  },
  {
    number: 9,
    url: "https://images.unsplash.com/photo-1583500557349-fb5238f8d946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
  },
  {
    number: 10,
    url: "https://images.unsplash.com/photo-1583468323330-9032ad490fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80",
  },
  {
    number: 11,
    url: "https://images.unsplash.com/photo-1583425423320-2386622cd2e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1980&q=80",
  },
  {
    number: 12,
    url: "https://images.unsplash.com/photo-1583518257225-f9a8081f6a84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  },
];

const Card = ({ number, url }) => {
  return (
    <a href="#portfolio-item-1" className="button" role="button">
      <div
        className={`card 
      ${number === 1 ? "card-tall card-wide" : ""} 
      ${number === 2 ? "card-tall" : ""}
      ${number === 7 ? "card-wide" : ""}`}
        style={{ backgroundImage: `url(${url})` }}
      >
        {number}
      </div>
    </a>
  );
};

const gallery = ({ data }) => {
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
        <div className=" gallery-center">
          <div className="photo-grid">
            {cards.map(({ number, url }) => {
              return <Card key={number} number={number} url={url}></Card>;
            })}
          </div>
        </div>
        <div id="portfolio-item-1" className="portfolio-lightbox">
          <div className="portfolio-lighthbox_content">
            <a href="#portfolio" className="close"></a>
            <img
              src="http://unsplash.it/900/400?image=1080"
              className="portfolio-lightbox__image"
            />
            <h3 className="portfolio_lightbox_title">
              This is title inide lightbox
            </h3>
            <p className="portfolio_lightbox_body">
              This is body inide lightbox
            </p>
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
    padding-top: 50px;
    @media (min-width: 768px) {
      padding: 100px 0;
    }
    .photo-grid {
      display: grid;
      gap: 1rem;
      /*IMPLICITNI GRID SA AUTO FIT*/
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      grid-auto-rows: 270px;
    }
    .card {
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
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      &:hover {
        box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
          rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
        transform: translateY(-3px) scale(1.1);
      }
    }
  }

  .portfolio-lightbox {
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
    .portfolio-lightbox__image {
      width: 100%;
      display: block;
      margin-bottom: 1em;
    }
    &:target {
      transform: scale(1, 1);
      transform-origin: left;
    }
    .portfolio-lighthbox_content {
      width: 75%;
      background: black;
      padding: 1em;
      position: relative;
    }
    .close {
      position: absolute;
      width: 2em;
      height: 2em;
      background: seagreen;
      top: -1em;
      right: -1em;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid whitesmoke;
    }

    .close::after {
      content: "X";
      color: aliceblue;
      font-weight: 700;
    }
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

export default gallery;
