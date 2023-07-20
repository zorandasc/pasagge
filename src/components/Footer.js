import React from "react";
import { styled } from "styled-components";
import { AiOutlineMail, AiFillPhone, AiFillPushpin } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "gatsby";

import logo from "../images/logo.svg";
import cards from "../images/card.png"
import socialLinks from "../constants/social_links";

const Footer = () => {
  return (
    <Wrapper>
      <section className="header">
        <div className="headerInner">
          <div className="first">
            <div className="socialWrapper">
              <ul>
                {socialLinks.map((link) => {
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        className="social-link"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="socials links"
                      >
                        {link.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="second">
            <div className="headerLogo">
              <Link to="/">
                <img
                  src={logo}
                  alt="passage logo"
                  width="261"
                  height="60"
                ></img>
              </Link>
            </div>
          </div>
          <div className="third">
            <div className="newsLetter">
              <form>
                <h3>Naš Newsletter</h3>
                <div className="form-group">
                  <input
                    placeholder="Unesite vaš email"
                    type="text"
                    name="email-news"
                    id="email-news"
                    required
                  ></input>
                  <button className="btn" aria-label="newsletter">Pretplata</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="body">
        <div className="bodyInner">
          <div className="column about">
            <div className="title">
              <h4>O Nama Passage</h4>
            </div>
            <div className="divider">
              <span></span>
            </div>
            <ul>
              <li>
                <AiFillPushpin className="icon"></AiFillPushpin>
                <p>Šargovačkih Đaka 1, Banja Luka, BiH</p>
              </li>
              <li>
                <AiFillPhone className="icon"></AiFillPhone>
                <p>(+387) 65 842 979</p>
              </li>
              <li>
                <AiOutlineMail className="icon"></AiOutlineMail>
                <p>studiopasagge@gmail.com</p>
              </li>
            </ul>
            <div className="satnica">
              <h4>Otvoreni Smo</h4>
              <h5>Ponedeljak do Petak</h5>
              <p>08:00 - 20:00</p>
            </div>
          </div>
          <div className="column important">
            <div className="title">
              <h4>Važni Linkovi</h4>
            </div>
            <div className="divider">
              <span></span>
            </div>
            <ul>
              <li>
                <IoIosArrowForward className="icon"></IoIosArrowForward>
                <p>SERVISI</p>
              </li>
              <li>
                <IoIosArrowForward className="icon"></IoIosArrowForward>
                <p>O NAMA</p>
              </li>
              <li>
                <IoIosArrowForward className="icon"></IoIosArrowForward>
                <p>CIJENOVNI PLAN</p>
              </li>
              <li>
                <IoIosArrowForward className="icon"></IoIosArrowForward>
                <p>KONTAKT</p>
              </li>
              <li>
                <IoIosArrowForward className="icon"></IoIosArrowForward>
                <p>NAŠ BLOG</p>
              </li>
            </ul>
          </div>
          <div className="column important">
            <div className="title">
              <h4>Kategorija</h4>
            </div>
            <div className="divider">
              <span></span>
            </div>
            <ul>
              <li>
                <IoIosArrowForward className="icon"></IoIosArrowForward>
                <p>NJEGA LICA</p>
              </li>
              <li>
                <IoIosArrowForward className="icon"></IoIosArrowForward>
                <p>MAKEUP</p>
              </li>
              <li>
                <IoIosArrowForward className="icon"></IoIosArrowForward>
                <p>FRAGRANCE</p>
              </li>
              <li>
                <IoIosArrowForward className="icon"></IoIosArrowForward>
                <p>NJEGA KOSE</p>
              </li>
              <li>
                <IoIosArrowForward className="icon"></IoIosArrowForward>
                <p>TIJELO & KUPANJE</p>
              </li>
            </ul>
          </div>
          <div className="column post">
            <div className="title">
              <h4>Naša Lokacija</h4>
            </div>
            <div className="divider">
              <span></span>
            </div>
            <div className="postlist">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9248.22488290243!2d17.188337875480332!3d44.81992281325674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e0202d91271f3%3A0xc1292baf73bbb7cc!2z0KjQsNGA0LPQvtCy0LDRhg!5e0!3m2!1ssr!2sba!4v1689080769230!5m2!1ssr!2sba"
                width="100%"
                height="300"
                style={{ border: "0", overflow: "hidden", margin: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="google map address"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="foot">
        <div className="footInner">
          <p>Copyright 2023 Pasagge. All Rights Reserved By Nazor</p>
          <div>
            <img
              width="188"
              height="25"
              src={cards}
              alt="visa and master cards"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #232b31;
  --body-color: #bebebe;
  --title-color: #ffffff;
  .header {
    background-color: #232b31;
    position: relative;
    .headerInner {
      display: flex;
      margin-right: auto;
      margin-left: auto;
      position: relative;
      width: 100%;
      flex-wrap: wrap;
      align-content: flex-start;
      border-style: solid;
      border-width: 0px 0px 2px 0px;
      border-color: var(--theme-color);
      @media (max-width: 1024px) {
        flex-wrap: wrap;
      }
      .first,
      .second,
      .third {
        width: 100%;
        @media (min-width: 768px) {
          width: 33.333%;
        }
      }
      .first {
        .socialWrapper {
          align-content: center;
          align-items: center;
          padding: 40px 15px 40px 15px;
          width: 100%;
          ul {
            justify-content: space-evenly;
            text-align: left;
            display: flex;
            flex-direction: row;
            li {
              display: inline-block;
              font-weight: bold;
              line-height: 55px;
              text-align: center;
              vertical-align: middle;
              width: 55px;
              height: 55px;
              border-style: solid;
              border-width: 1px 1px 1px 1px;
              border-color: var(--theme-color);
              border-radius: 59px 59px 59px 59px;
              transition: var(--transition);
              &:hover {
                transform: scale(1.2);
              }
              a {
                vertical-align: middle;
                color: var(--theme-color);
                font-size: 18px;
              }
            }
          }
        }
      }
      .second {
        border-style: solid;
        border-width: 0px 1px 0px 1px;
        border-color: var(--theme-color);
        padding: 40px 15px 40px 15px;
        @media (max-width: 767px) {
          border-width: 0px 0px 0px 0px;
          padding: 0px 15px 20px 10px;
        }
        .headerLogo {
          width: 100%;
          position: relative;
          text-align: center;
          max-width: 100%;
          padding: 0px 0px 0px 0px;
          color: #bebebe;
          img {
            width: 100%;
            height: auto;
            max-width: 200px;
            margin: auto;
          }
        }
      }
      .third {
        .newsLetter {
          align-content: center;
          align-items: center;
          padding: 40px 15px 40px 15px;
          width: 100%;
          form {
            padding-left: 40px;
            h3 {
              font-size: 20px;
              font-family: var(--body-font);
              margin-bottom: 19px;
              margin-top: -0.2em;
              color: var(--white-color);
            }
            .form-group {
              display: flex;
              position: relative;
              input {
                background-color: transparent;
                border: none;
                border-bottom: 1px solid rgba(253, 230, 216, 0.3);
                padding: 0 20px 0 0;
                height: 40px;
                color: var(--white-color);
                font-size: 14px;
                font-weight: 500;
                font-family: var(--body-font);
                margin: 0;
                &:focus {
                  outline: none;
                }
              }
              .btn {
                background-color: var(--theme-color);
                color: var(--white-color);
                font-size: 16px;
                font-weight: 700;
                letter-spacing: 2px;
                line-height: 1;
                display: inline-block;
                padding: 17px 28px;
                border: none;
                position: relative;
                z-index: 1;
                text-align: center;
                @media (max-width: 1199px) {
                  font-size: 14px;
                  letter-spacing: 2px;
                  padding: 10px 15px;
                }
              }
            }
          }
        }
      }
    }
  }
  .body {
    background-color: var(--title-color-second);
    padding: 70px 0px 0px 0px;

    .bodyInner {
      padding: 26px 0px 26px 0px;
      display: flex;
      margin: auto;
      position: relative;
      flex-wrap: wrap;
      max-width: 1300px;
      @media (min-width: 768px) {
        width: 100%;
      }

      .column {
        width: 100%;

        @media (min-width: 468px) {
          width: 50%;
        }
        //If screen size is more than 700px wide
        @media (min-width: 768px) {
          width: 25%;
        }
        @media (max-width: 1024px) {
          margin: 0px 0px 25px 0px;
        }

        .title {
          margin-bottom: 20px;
          line-height: 1;
          h4 {
            font-size: 1.25rem;
            font-family: var(--body-font);
            color: var(--smoke-color);
            text-transform: capitalize;
            font-weight: 400;
          }
        }
        .divider {
          margin: -20px 0px 5px 0px;
          padding-top: 15px;
          padding-bottom: 15px;
          margin-bottom: 20px;
          span {
            display: flex;
            margin: 0;
            direction: ltr;
            width: 50px;
            border-top: 2px solid var(--theme-color);
          }
        }
      }
      .about {
        padding: 0px 015px 0px 15px;
        display: flex;
        flex-direction: column;
        position: relative;
        flex-wrap: wrap;
        align-content: flex-start;
        ul {
          justify-content: flex-start;
          text-align: left;
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          li {
            display: flex;
            justify-content: flex-start;
            text-align: left;
            padding: 0px 0px 5px 0px;
            align-items: flex-start;
            .icon {
              font-size: 16px;
              color: var(--theme-color);
            }
            p {
              padding-left: 10px;
              //font-family: "DM Sans", Sans-serif;
              font-size: 16px;
              font-weight: 500;
              line-height: 16px;
              color: #a3a2a2;
            }
            &::after {
              position: absolute;
              bottom: 0;
              width: 100%;
              content: "";
              left: 0;
            }
          }
        }
        .satnica {
          h4 {
            color: #ffffff;
            font-family: var(--body-font);
            font-size: 22px;
            font-weight: 400;
          }
          h5 {
            color: #a3a2a2;
       
            font-size: 18px;
            font-weight: 500;
          }
          p {
            color: #ffffff;
          
            font-size: 18px;
            font-weight: 500;
          }
        }
      }
      .important {
        padding: 0px 015px 0px 15px;
        ul {
          li {
            display: flex;
            justify-content: flex-start;
            text-align: left;
            padding: 0px 0px 13px 0px;
            align-items: flex-start;
            position: relative;
            line-height: 1;
            color: var(--body-color);

            .icon {
              font-size: 16px;
              color: var(--theme-color);
            }
            p {
              font-size: 14px;
              font-weight: 500;
            }
          }
        }
      }
      .categories {
      }
      .post {
        padding: 0px 015px 0px 15px;
        .postlist {
          width: 100%;
          @media (max-width: 1399px) {
            margin-bottom: 60px;
          }
          .postWrapper {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            .imageWrapper {
              width: 80px;
              height: 80px;
              border-radius: 0;
              overflow: hidden;
              margin-right: 15px;
              transition: all ease 0.4s;
              transform: scale(1);
              &:hover img {
                transition: all ease 0.4s;
                transform: scale(1.2);
              }
            }
            .postBody {
              h4 {
                font-weight: 400;
                letter-spacing: 0;
                padding-top: 0.3em;
                font-family: var(--title-font);
                color: var(--title-color);
                font-weight: 500;
                font-size: 18px;
                line-height: 26px;
                letter-spacing: -0.03em;
                margin: -0.25em 0 3px 0;
                text-transform: capitalize;
              }
              p {
                color: var(--body-color);
                font-weight: 500;
                font-size: 12px;
                .icon {
                  margin-right: 8px;
                  vertical-align: center;
                  color: var(--theme-color);
                  font-size: 0.9em;
                }
              }
            }
          }
        }
      }
    }
  }
  .foot {
    background-color: #1d2429;
    color: var(--body-color);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    //
    .footInner {
      display: flex;
      margin-right: auto;
      margin-left: auto;
      position: relative;
      width: 100%;
      max-width: 1300px;
      justify-content: space-between;
      padding: 26px 0px 26px 0px;
      @media (max-width: 1024px) {
        flex-wrap: wrap;
        padding: 26px;
        padding-top: 0;
        justify-content: space-around;
      }
    }
  }
`;

export default Footer;
