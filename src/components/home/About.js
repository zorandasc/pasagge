import React from "react";
import { styled } from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Slide from "react-reveal/Slide";
import Rotate from "react-reveal/Rotate";

import Button1 from "../Button1";
import Button2 from "../Button2";

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

          <Slide left>
            <GatsbyImage
              image={getImage(image3)}
              className="img3"
              alt="about"
            ></GatsbyImage>
          </Slide>
        </div>
        <div className="about-text">
          <Slide right cascade>
            <div className="title">
              <p>
                Mi smo tim sa <span className="year-label">25 godina</span>{" "}
                iskustva
              </p>
              <h2>
                Nešto Malo <span className="about-label">O Nama</span>
              </h2>
            </div>
          </Slide>
          <div className="subText">
            <p>
              Stručnost koju možete osjetiti, rezultati koje možete vidjeti.
              Destilovanje nastalo godinama profesionalnog iskustva u primjeni
              tretmana ljepote pružiti će Vam nenadmašno spa iskustvo.
            </p>
          </div>
          <div className="mainText">
            <p>
              Naš Spa Beauty Salon je tim iskusnih i visoko obučenih kozmetičkih
              terapeuta koji će rado sastaviti spa ili beauty tretman paket
              dizajniran posebno za vaše potrebe i ponuditi vam savjete o njezi
              vašeg tijela. U okviru salona Spa Beauty nalazi se oaza smirenosti
              i spokoja. Započnite svoje putovanje samootkrivanja daleko od
              spoljašnjeg svijeta gde se tijelo, um i duša njeguju i obnavljaju,
              ostavljajući vas energičnim iznutra i sjajnim spolja.
            </p>
          </div>

          <div className="btn-wrapper">
            <Rotate>
              <Button1 path="/about">Saznaj Više</Button1>
            </Rotate>
            <Rotate>
              <Button2 path="/contact">Kontaktirajte nas</Button2>
            </Rotate>
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
          line-height: 1.8em;
        }
      }
      .btn-wrapper {
        width: 100%;
        @media (min-width: 768px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          -webkit-column-gap: 2rem;
          -moz-column-gap: 2rem;
          column-gap: 2rem;
        }
      }
    }
  }
`;

export default About;
