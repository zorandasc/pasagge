import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlinePhone } from "react-icons/ai";
import { BsFillHouseDoorFill, BsFillClockFill } from "react-icons/bs";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

import { Layout, Seo,Background } from "../components";

const contact = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <Background
          image={getImage(data.heroImage1)}
          className="contact-header-container"
        >
          <div className="section-center contact-header-title ">
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
            <div className="address">
              <h4>KORISNIČKA PODRŠKA</h4>
              <div className="tel-email">
                <AiOutlinePhone className="icon"></AiOutlinePhone>(+381) 656 838
                126
              </div>
              <div className="tel-email">
                <TfiEmail className="icon"></TfiEmail>turbotimservis@gmail.com
              </div>
            </div>
          </Slide>
          <Zoom>
            <div className="address">
              <h4>
                RADNO VREME <BsFillClockFill className="icon"></BsFillClockFill>
              </h4>
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
            </div>
          </Zoom>
          <Slide right>
            <div className="address">
              <h4>
                ADRESA
                <BsFillHouseDoorFill className="icon"></BsFillHouseDoorFill>
              </h4>
              <div className="street">
                <span>6 April bb, Prijepolje, Srbija</span>
              </div>
              <div>
                <span></span>
              </div>
            </div>
          </Slide>
        </div>
        <Zoom>
          <div className="section-center map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.6162718128353!2d19.667622114392778!3d43.38504697774884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757f8f0cf7fb1e5%3A0x2480c811ef3e7ab!2s6.%20aprila%2C%20Prijepolje%2C%20Serbia!5e0!3m2!1sen!2sba!4v1672685192795!5m2!1sen!2sba"
              width="100%"
              height="400"
              style={{ border: "0", overflow: "hidden", margin: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="google map address"
            ></iframe>
          </div>
        </Zoom>
        <Slide bottom>
          <div className="section-center form-container">
            <h2>ZAKAŽITE ONLINE PREGLED</h2>
            <p>
              Nakon što prosledite obrazac, predstavnik će vas ponovo
              kontaktirati sa informacijama koje će vam biti potrebne da
              zakažete sastanak.
            </p>
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
                  <label htmlFor="name">VAŠE IME</label>
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
                  <label htmlFor="email">VAŠ EMAIL</label>
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
                  <label htmlFor="message">VAŠA PORUKA</label>
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
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImage1: file(name: { eq: "massage1" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

const Wrapper = styled.section`
  //padding: 8rem 0;
  //background-color: var(--clr-black-3);
  color: var(--body-bg);
  /*  HEADER SECTION */
  .contact-header-container {
    text-align: left;
    padding: 54px 0;
    position: relative;
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
          color: var(--body-bg);
        }
        li:first-child a:hover {
          color: var(--theme-color);
        }

        li:not(:first-child)::before {
          content: "•";
          border-radius: 50%;
          padding: 0 11px;
          color: var(--theme-color);
          font-size: 10px;
          font-weight: 900;
          display: inline-block;
        }
      }
    }
  }
  /*  ADRESSSECTION */
  .address-center {
    padding-top: 100px;
  }
  .address {
    background-color: var(--title-color);
    padding: 38px 30px 44px;
    margin-bottom: 2rem;
    border: 1px solid #343434;
    text-align: left;
    box-shadow: var(--primary-light-shadow);
    -webkit-transition: var(--transition);
    transition: var(--transition);
    h4 {
      margin-bottom: 2rem;
      font-size: 23px;
      line-height: 1.4347;
      font-weight: 700;
      color: var(--body-bg);
      display: flex;
      justify-content: space-between;
      align-items: center;
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
    box-shadow: var(--primary-dark-shadow);
  }

  @media screen and (min-width: 676px) {
    .address-center {
      padding-bottom: 100px;
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
    background: var(--title-color);
    border-radius: var(--radius);
    text-align: left;
    box-shadow: var(--primary-light-shadow);
    transition: var(--transition);
    width: 90vw;
    margin-bottom: 2rem;
    padding: 2rem 1rem;
    &:hover {
      box-shadow: var(--primary-dark-shadow);
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
      font-family: var(--ff-secondary);
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
    text-transform: uppercase;
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
