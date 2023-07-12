import React from "react";
import { styled } from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Button1 from "../Button1";

const About = ({ image1, image2, image3 }) => {
  return (
    <Wrapper>
      <div className="inner">
        <div className="about-image">
          <GatsbyImage
            image={getImage(image1)}
            className="img1"
            alt="about"
          ></GatsbyImage>
          <GatsbyImage
            image={getImage(image2)}
            className="img2"
            alt="about"
          ></GatsbyImage>
          <GatsbyImage
            image={getImage(image3)}
            className="img3"
            alt="about"
          ></GatsbyImage>
        </div>
        <div className="about-text">
          <div className="title">
            <p>
              Mi smo tim sa <span className="year-label">25 godina</span>{" "}
              iskustva
            </p>
            <h2>
              Nešto Više <span className="about-label">O Nama</span>
            </h2>
          </div>
          <div className="subText">
            <p>
              U okviru objekta dostupan je niz različitih tehnika masaže,
              refleksologije, tretmana tela i lica koje će vam pomoći da se
              opustite
            </p>
          </div>
          <div className="mainText">
            <p>
              Naš Spa centar Sijam Tajland vodi nezavisna velnes kompanija iz
              Banja Luke koja obezbeđuje beskompromisni kvalitet. Naš Spa centar
              Sijam Tajland vodi nezavisna velnes kompanija iz Banja Luke koja
              obezbeđuje beskompromisni kvalitet.Naš Spa centar Sijam Tajland
              vodi nezavisna velnes kompanija iz Banja Luke koja obezbeđuje
              beskompromisni kvalitet.
            </p>
          </div>
          <div className="btn-wrapper">
            <Button1>Kontaktirajte nas</Button1>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  width: 100%;
  .inner {
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    padding: 0px 15px 0px 15px;
    .about-image {
      position: relative;
      width: 100%;
      max-width: 100%;
      width: max-content;
      margin-left: auto;
      margin-right: auto;
      padding: 60px 0 60px 0;
      margin-bottom: 30px;
      @media (min-width: 768px) {
        margin: 0 0 30px 0;
        width: 50%;
      }
      .img1 {
        max-width: 100%;
        position: relative;
        padding: 0;
        width: 100%;
        //for desktop
        @media (min-width: 991px) {
          width: max-content;
          padding: 0 30px 30px 0;
        }
      }
      .img2 {
        position: absolute;
        right: 0;
        top: 0;
        max-width: 100px;
        //for desktop
        @media (min-width: 768px) {
          max-width: initial;
        }
      }
      .img3 {
        position: absolute;
        left: 0;
        bottom: 0;
        max-width: 100px;
        @media (min-width: 768px) {
          max-width: initial;
          left: -130px;
        }
      }
    }
    .about-text {
      display: flex;
      position: relative;
      width: 100%;
      flex-wrap: wrap;
      align-content: center;
      align-items: center;
      padding: 0px 15px 0px 15px;

      @media (min-width: 768px) {
        padding: 0px 15px 0px 65px;
        width: 50%;
      }
      .title {
        margin-bottom: 20px;
        text-transform: capitalize;
        p {
          font-size: 18px;
          font-weight: 400;
          display: block;
          line-height: 1;
          margin-bottom: 30px;
          @media (min-width: 768px) {
            font-size: 20px;
          }
          .year-label {
            color: var(--white-color);
            background-color: var(--theme-color);
            padding: 6px 8px 1px 8px;
            border-radius: 4px;
            display: inline-block;
            font-size: 14px;
            @media (min-width: 768px) {
              font-size: 16px;
            }
          }
        }
        h2 {
          margin-top: -0.13em;
          line-height: 1;
          font-size: 3rem;
          margin-bottom: 10px;
          @media (min-width: 768px) {
            font-size: 50px;
            margin-bottom: 17px;
          }
          .about-label {
            display: inline-block;
            color: var(--theme-color);
            text-align: left;
            font-size: 25px;
            font-weight: bold;
            max-width: 70px;
            @media (min-width: 768px) {
              font-size: 24px;
            }
          }
        }
      }
      .subText {
        margin-bottom: 20px;
        padding: 15px 0px 15px 30px;
        border-style: solid;
        border-width: 0px 0px 0px 2px;
        border-color: var(--theme-color);
        p {
          line-height: 1.63;
        }
      }
      .mainText {
        margin-bottom: 20px;
        p {
          font-size: 16px;
          line-height: 1.8em;
        }
      }
      .btn-wrapper {
        width: 100%;
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;
        margin-right: auto;
        position: relative;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;

export default About;
