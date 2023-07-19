import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlinePhone } from "react-icons/ai";
import {
  BsFillHouseDoorFill,
  BsFillClockFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

import { Layout, Seo, Background } from "../components";

const AddressWrapper = ({ children }) => {
  return (
    <div className="address">
      {children}
      <StaticImage
        src="../images/laticeBg.jpg"
        layout="constrained"
        className="hero-img"
        alt="Herro image"
      ></StaticImage>
    </div>
  );
};

const contact = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <Background image={getImage(data.heroImage1)}>
          <div className="contact-header-title">
            <ul>
              <li>
                <Link to="/">POČETNA</Link>
              </li>
              <li>KONTAKT</li>
            </ul>
            <div>
              <h1>KONTAKT</h1>
            </div>
          </div>
        </Background>
        <div className="section-center address-center">
          <Slide left>
            <AddressWrapper>
              <h3>
                Informacije i Podrška{" "}
                <BsFillInfoCircleFill className="icon"></BsFillInfoCircleFill>
              </h3>
              <div className="tel-email">
                <AiOutlinePhone className="icon"></AiOutlinePhone>065 842 979
              </div>
              <div className="tel-email">
                <TfiEmail className="icon"></TfiEmail>studiopasagge@gmail.com
              </div>
            </AddressWrapper>
          </Slide>
          <Zoom>
            <AddressWrapper>
              <h3>
                Radno Vrijeme{" "}
                <BsFillClockFill className="icon"></BsFillClockFill>
              </h3>
              <div className="time">
                <span>Ponedeljak - Četvrtak</span>
                <span>8 am - 8 pm</span>
              </div>
              <div className="time">
                <span>Petak</span>
                <span>8 am - 6 pm</span>
              </div>
              <div className="time">
                <span>Subota</span>
                <span>9 am - 4 pm</span>
              </div>
              <div className="time">
                <span>Nedelja</span>
                <span>Zatvoreno</span>
              </div>
            </AddressWrapper>
          </Zoom>
          <Slide right>
            <AddressWrapper>
              <h3>
                Adresa
                <BsFillHouseDoorFill className="icon"></BsFillHouseDoorFill>
              </h3>
              <div className="street">
                <span>Šargovačkih Đaka 1, Banja Luka, BiH</span>
              </div>
              <div>
                <span></span>
              </div>
            </AddressWrapper>
          </Slide>
        </div>

        <Slide right>
          <div className="section-center form-container">
            <h2>Ostanite u Kontaktu, Pišite Nam.</h2>

            <form
              name="contact"
              className="form-group"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="credencial-container">
                <div>
                  <label htmlFor="name">Vaše Ime</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Unesite ime"
                    className="form-control"
                  />
                </div>
                <div>
                  <label htmlFor="email">Vaš Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Unesite Vaš email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="message-container">
                <div>
                  <label htmlFor="message">Vaša Poruke</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    placeholder="Opišite Vaš problem"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="btn-container">
                <button type="submit" className="submit-btn">
                  pošalji
                </button>
              </div>
            </form>
          </div>
        </Slide>

        <div className="section-center map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9248.22488290243!2d17.188337875480332!3d44.81992281325674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e0202d91271f3%3A0xc1292baf73bbb7cc!2z0KjQsNGA0LPQvtCy0LDRhg!5e0!3m2!1ssr!2sba!4v1689080769230!5m2!1ssr!2sba"
            width="100%"
            height="400"
            style={{ border: "0", overflow: "hidden", margin: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="google map address"
          ></iframe>
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
    laticeBg: file(name: { eq: "laticeBg" }) {
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
  /*  ADRESSSECTION */
  .address-center {
    padding-top: 100px;
  }
  .address {
    position: relative;
    color: var(--title-color);
    padding: 38px 30px 44px;
    margin-bottom: 2rem;
    text-align: left;
    box-shadow: var(--lightShadow);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    overflow: hidden;
    .hero-img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    h3 {
      margin-bottom: 2rem;
      font-size: 1.75rem;
      line-height: 1.4347;
      font-weight: 700;
      text-transform: capitalize;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    div {
      margin-top: 14px;
      a {
        color: var(--body-bg);
        transition: var(--transition);
        &:hover {
          color: var(--theme-color);
        }
      }
    }
    .time,
    .street {
      margin-bottom: 1.25rem;
      display: flex;
      justify-content: space-between;
    }
    .tel-email {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .icon {
      font-size: 1.5em;
    }
  }
  .address:hover {
    box-shadow: var(--darkShadow);
  }

  @media screen and (min-width: 676px) {
    .address-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .address-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /*  FORM SECTION */
  .form-container {
    overflow: hidden;
    color: var(--theme-color);
    border-radius: var(--radius);
    text-align: left;
    box-shadow: var(--lightShadow);
    transition: var(--transition);
    width: 90vw;
    margin-bottom: 2rem;
    padding: 2rem 2rem;
    &:hover {
      box-shadow: var(--darkShadow);
    }
    h2 {
      margin-bottom: 1rem;
    }
    p {
      word-wrap: break-word;
    }
    label {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 3px;
    }
    input[type="text"],
    input[type="email"],
    input[type="url"],
    input[type="password"],
    input[type="search"],
    input[type="tel"],
    input[type="number"],
    input[type="range"],
    input[type="date"],
    input[type="month"],
    input[type="week"],
    input[type="time"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="color"],
    textarea,
    select,
    .nice-select {
      border: none;
      line-height: 1.923;
      font-weight: 400;
      box-shadow: none;
      width: 100%;
      outline: none;
      transition: all 0.2s ease-out;
      &:focus {
        transition: all 0.2s ease-out;
        outline: 0;
        border-color: var(--theme-color) !important;
        &::placeholder {
          transition: all 0.2s ease-out;
          font-size: 18px;
        }
      }
    }
    .credencial-container,
    .message-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      div {
        padding-top: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
        .form-control {
          background-color: transparent;
          padding: 0 !important;
          font-size: 14px;
          color: #c2c2c2;

          border-bottom: 2px solid #343434;
        }
      }
    }
    .credencial-container {
      .form-control {
        height: 39px;
      }
    }

    .btn-container {
      padding-top: 50px;
    }

    //desktop view
    @media screen and (min-width: 676px) {
      p {
        max-width: 50%;
      }
      .credencial-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
      }
    }
  }

  .submit-btn {
    display: inline-block;
    padding: 13px 30px 10px;
    background: var(--theme-color);
    border: 2px solid var(--theme-color);
    color: var(--body-bg);
    box-shadow: var(--dark-shadow);
    text-transform: capitalize;
    letter-spacing: 2px;
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 400;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    clip-path: polygon(
      20px 0,
      100% 0,
      100% calc(100% - 20px),
      calc(100% - 20px) 100%,
      0 100%,
      0 20px
    );
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, transparent, #fff, transparent);
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%) skewX(-30deg);
      transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1);
    }

    &:hover {
      background-color: transparent;
      clip-path: none;
      &::before {
        left: 200%;
      }
    }
    //desktop view
    @media screen and (min-width: 676px) {
      padding: 18px 29px 15px;
    }
  }
  .map {
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 676px) {
      padding-bottom: 100px;
    }
  }
`;

export const Head = () => <Seo title="Kontakt" />;

export default contact;
