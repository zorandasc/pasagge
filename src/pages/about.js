import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { FaPagelines } from "react-icons/fa";

import { Layout, Seo, Background } from "../components";

const Separator = () => {
  return (
    <SeparatorWrapper>
      <div className="line"></div>
      <span className="icon-wrapper">
        <FaPagelines className="icon"></FaPagelines>
      </span>
      <div className="line"></div>
    </SeparatorWrapper>
  );
};

const SeparatorWrapper = styled.div`
  float: left;
  margin-top: 2%;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  clear: both;
  position: relative;
  z-index: 1;
  &::before {
    content: " ";
    display: table;
  }
  .line {
    height: auto;
    flex-grow: 2;
    border: 0 solid var(--theme-color);
    border-color: var(--theme-color);
    border-top-width: 1px;
    border-bottom-style: solid;
    border-top-style: solid;
  }
  .icon-wrapper {
    border-color: transparent;
    font-size: 20px;
    width: 1.75em;
    height: 1.75em;
    border-width: 1px;
    padding: 1px;
    margin-top: -0.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      font-size: inherit;
      color: var(--theme-color);
    }
  }
`;

const about = ({ data }) => {
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
                <li>O Nama</li>
              </ul>
              <div>
                <h1>O NAMA</h1>
              </div>
            </div>
          </div>
        </Background>
        <div className="section-center about-center">
          <article className="about-text">
            <Separator></Separator>
            <h2 className="title">
              U današnjem užurbanom svijetu svima nam je ponekad potrebno neko
              dragocjeno "ja" vrijeme. Radujemo se Vašem dolasku!
            </h2>
            <Separator></Separator>
            <p>
              Tim Pasagge salona ljepote čini kvalifikovano osoblje sa velikim
              iskustvom u primjeni tretmana ljepote. Spa Beauty Salon Pasagge je
              poznat po svojoj profesionalnosti i visokim standardima. Salon je
              uživao izuzetan rast i osvojio je više nagrada, kako na lokalnom,
              tako i na nacionalnom nivou.
            </p>
            <p>
              Energija i strast koje naš tim terapeuta gaji prema kozmetičkom
              poslu znači da salon stalno traži inovativne i originalne načine
              da poboljša iskustvo klijenta.
            </p>
            <p>
              Spa Beauty Salon vam omogućava da se opustite u prelijepom
              okruženju i uživate u čitavom nizu tretmana dizajniranih da
              podmlade i tijelo i um.
            </p>
            <ul>
              <li>
                <FaPagelines className="icon"></FaPagelines> Manikir i Pedikir
              </li>
              <li>
                <FaPagelines className="icon"></FaPagelines> Masaža i Relaksacija
              </li>
              <li>
                <FaPagelines className="icon"></FaPagelines> Solarijum i
                Tamnjenje
              </li>
              <li>
                <FaPagelines className="icon"></FaPagelines> Njega Lica i Makeup
              </li>
              <li>
                <FaPagelines className="icon"></FaPagelines> Tretmani voska
              </li>
              <li>
                <FaPagelines className="icon"></FaPagelines> Lasersko
                otklanjanje dlaka
              </li>
              <li>
                <FaPagelines className="icon"></FaPagelines> Lasersko
                podmlađivanje
              </li>
              <li>
                <FaPagelines className="icon"></FaPagelines> Spa dani
              </li>
            </ul>
          </article>
          <div className="about-img">
            <StaticImage
              src="../images/aboutPage.jpg"
              layout="constrained"
              //placeholder="blurred"
              className="img"
              alt="Herro image"
            ></StaticImage>
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
  color: var(--title-color);
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

  /*  CENTER SECTION */
  .about-center {
    padding: 50px 0;
    @media (min-width: 768px) {
      padding: 100px 0;
    }
  }

  .about-text {
    margin-bottom: 2rem;
    text-align: left;
    .title {
      text-transform: none;
      text-align: center;
      line-height: 1.4;
      color: var(--theme-color);
      margin-bottom: 30px;
    }
    p {
      line-height: 2;
    }
    ul {
      padding-top: 1rem;
      li {
        display: flex;
        align-items: center;
        padding-bottom: 1rem;
        font-style: italic;
        .icon{
          margin-right: 1rem;
        }
      }
    }
  }

  .about-img {
    overflow: hidden;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    display: block;

    .img {
      width: 100%;
      height: 100%;
      transition: all 200ms linear 0ms;
      filter: brightness(60%);
      &:hover {
        transform: scale(1.45) rotate(-1.5deg);
      }
    }
  }

  @media screen and (min-width: 992px) {
    .about-center {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
      column-gap: 4rem;
    }
    .about-text {
      grid-column: 1 / span 6;
      margin-bottom: 0;
    }
    .about-img {
      grid-column: 7 / -1;
    }
  }
`;

export const Head = () => <Seo title="O nama" />;

export default about;
