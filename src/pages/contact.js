import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlinePhone, AiOutlinePushpin } from "react-icons/ai";
import {
  BsFillHouseDoorFill,
  BsFillClockFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import Bounce from "react-reveal/Bounce";

import { Layout, Seo, Background } from "../components";

const AddressWrapper = ({ children }) => {
  return (
    <div className="card">
      {children}
      <StaticImage
        src="../images/laticeBgSkin.png"
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
          <div className="section-center">
            <div className="contact-header-title">
              <ul>
                <li>
                  <Link to="/">Početna</Link>
                </li>
                <li>Kontakt</li>
              </ul>
              <div>
                <h1>KONTAKT</h1>
              </div>
            </div>
          </div>
        </Background>

        <div className="section-center cards-center">
          <Bounce left>
            <div className="card card-logo">
              <StaticImage
                src="../images/logoSkin.jpg"
                layout="constrained"
                alt="logo image"
                objectFit="contain"
              ></StaticImage>
            </div>
          </Bounce>
          <Bounce>
            <AddressWrapper>
              <h3>
                Informacije i Podrška{" "}
                <BsFillInfoCircleFill className="icon"></BsFillInfoCircleFill>
              </h3>
              <div>
                <div className="tel-email">
                  <AiOutlinePhone className="icon"></AiOutlinePhone>(+387) 65
                  842 979
                </div>
                <div className="tel-email">
                  <TfiEmail className="icon"></TfiEmail>studiopasagge@gmail.com
                </div>
              </div>
            </AddressWrapper>
          </Bounce>
          <Bounce right>
            <AddressWrapper>
              <h3>
                Radno Vrijeme{" "}
                <BsFillClockFill className="icon"></BsFillClockFill>
              </h3>
              <div>
                <div className="time">
                  <span>Ponedeljak - Petak</span>
                  <span>8 am - 8 pm</span>
                </div>
                <div className="time">
                  <span>Subota</span>
                  <span>9 am - 4 pm</span>
                </div>
                <div className="time">
                  <span>Nedelja</span>
                  <span>Zatvoreno</span>
                </div>
              </div>
            </AddressWrapper>
          </Bounce>
        </div>

        <Bounce right>
          <div className="section-center mapWrapper">
            <div className="address">
              <h3>
                Adresa
                <BsFillHouseDoorFill className="icon"></BsFillHouseDoorFill>
              </h3>
              <div className="street">
                <AiOutlinePushpin className="icon"></AiOutlinePushpin>
                <span>Šargovačkih Đaka 1, Banja Luka, BiH</span>
              </div>
            </div>
            <div className="map">
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
            <StaticImage
              src="../images/laticeBgSkin.png"
              layout="constrained"
              className="hero-img"
              alt="Herro image"
            ></StaticImage>
          </div>
        </Bounce>
        <Bounce left>
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
                    placeholder=""
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
                    placeholder=""
                    className="form-control"
                  />
                </div>
              </div>
              <div className="message-container">
                <div>
                  <label htmlFor="message">Vaša Poruka</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    placeholder=""
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
        </Bounce>
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
  /*  ADRESSSECTION */
  .cards-center {
    padding-top: 50px;
    @media (min-width: 768px) {
      padding: 100px 0;
    }
  }
  .card {
    height: 350px;
    position: relative;
    color: var(--title-color);
    display: flex;
    flex-direction: column;
    align-items: inherit;
    justify-content: space-around;
    padding: 10px 30px;
    margin-bottom: 2rem;
    text-align: left;
    box-shadow: var(--lightShadow);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    overflow: hidden;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
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
    .time {
      margin-bottom: 1.25rem;
      display: flex;
      justify-content: space-between;
    }
    .tel-email {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
    }
    .icon {
      font-size: 1.5em;
    }
    &:hover {
      box-shadow: var(--darkShadow);
    }
  }

  .card-logo {
    padding: 10px;
    background: var(--skin-color);
  }

  .mapWrapper {
    position: relative;
    color: var(--title-color);
    display: flex;
    flex-direction: column;
    align-items: inherit;
    justify-content: center;
    padding: 10px 30px;
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
    .address {
      @media (min-width: 768px) {
        margin: 0.5rem auto;
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
      .street {
        margin-bottom: 1.25rem;
        display: flex;
        justify-content: space-between;
      }
      .icon {
        font-size: 1.5em;
      }
    }
  }

  @media screen and (min-width: 676px) {
    .cards-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .cards-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /*  FORM SECTION */
  .form-container {
    background-color: rgba(242, 216, 231, 0.8);
    overflow: hidden;
    color: var(--theme-color);
    border-radius: var(--radius);
    text-align: left;
    box-shadow: var(--lightShadow);
    transition: var(--transition);
    padding: 1rem;
    margin: 50px auto;
    @media (min-width: 768px) {
      margin: 100px auto;
      padding: 2rem;
    }
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
          color: var(--title-color);
          border-bottom: 2px solid var(--title-color);
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
    letter-spacing: 2px;
    font-size: 16px;
    background-color: var(--theme-color);
    color: var(--white-color);
    line-height: 1;
    text-transform: capitalize;
    display: inline-block;
    border: none;
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 15px 18px;
    width: 100%;
    margin-bottom: 1rem;
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: var(--title-color);
      z-index: -1;
      width: 53%;
      height: 0;
      transition: all ease 0.4s;
      opacity: 0;
      visibility: hidden;
    }
    &::after {
      right: 0;
      top: 0;
      left: auto;
      bottom: auto;
    }
    &:hover {
      color: var(--white-color);
    }
    &:hover::after,
    &:hover::before {
      height: 100%;
      opacity: 1;
      visibility: visible;
    }
  }
  .map {
  }
`;

export const Head = () => <Seo title="Kontakt" />;

export default contact;
