import React, { useContext } from "react";
import { Link } from "gatsby";
import { FaTimes } from "react-icons/fa";
import { styled } from "styled-components";
import {
  AiFillMail,
  AiFillPhone,
  AiFillPushpin,
  AiFillClockCircle,
} from "react-icons/ai";

import { GatsbyContext } from "../context/context";
import links from "../constants/links";
import socialLinks from "../constants/social_links";
import logo from "../images/logo.svg";

const Sidebar = () => {
  const { isSidebarOpen, hideSidebar } = useContext(GatsbyContext);
  return (
    <Wrapper>
      <div className={isSidebarOpen ? "sidebar" : "sidebar closeSidebar"}>
        <header className="header">
          <Link to="/">
            <img src={logo} alt="design"></img>
          </Link>
          <button onClick={hideSidebar} className="closeBtn" aria-label="close">
            <FaTimes className="closeIcon"></FaTimes>
          </button>
        </header>
        <div className="body">
          <ul className="info">
            <li className="info-item">
              <AiFillPushpin className="icon"></AiFillPushpin>
              <p>Donje Šiprage, New York</p>
            </li>
            <li className="info-item">
              <AiFillPhone className="icon"></AiFillPhone>
              <p>+01234567890</p>
            </li>
            <li className="info-item">
              <AiFillMail className="icon"></AiFillMail>
              <p>info@example.com</p>
            </li>
            <li className="info-item">
              <AiFillClockCircle className="icon"></AiFillClockCircle>
              <div className="satnica">
                <p>Ponedeljak do Petak</p>
                <span>08:00-20:00</span>
              </div>
            </li>
          </ul>
          <div className="linksContainer">
            <div className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <Link
                    key={id}
                    to={url}
                    className="link"
                    onClick={hideSidebar}
                  >
                    {text}
                  </Link>
                );
              })}
            </div>
          </div>
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 90vw;
    bottom: 0;
    background-color: var(--body-bg);
    z-index: 3;
    opacity: 1;
    transition: all 0.5s;
    border-right: 0.1rem solid var(--theme-color);
    box-shadow: var(--darkShadow);
  }
  .closeSidebar {
    transform: translateX(-100%);
    opacity: 0;
    z-index: 0;
  }

  .header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      display: block;
      width: 200px;
      height: 60px;
    }
    .closeBtn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--smoke-color);
      background: var(--theme-color);
      cursor: pointer;
      transition: var(--transition);
      box-shadow: var(--lightShadow);
      &:hover {
        background: var(--theme-color);
      }
      .closeIcon {
        font-size: 1.5rem;
      }
    }
  }

  .body {
    padding: 30px 30px 60px 30px;
    .info {
      justify-content: flex-start;
      text-align: left;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      .info-item {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        align-items: flex-start;
        .icon {
          font-size: 22px;
          color: var(--theme-color);
        }
        p {
          padding-left: 10px;
          font-family: "DM Sans", Sans-serif;
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
        .satnica {
          text-align: left;
          p {
            margin-bottom: 0;
          }
          span {
            padding-left: 10px;
            font-size: 14px;
            color: #a3a2a2;
          }
        }
      }
    }

    .linksContainer {
      //margin-top: -4.875rem;
      //min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      .link {
        display: block;
        font-size: 1.5rem;
        text-transform: capitalize;
        padding: 0.2rem 3rem;
        margin: 1.5rem 0;
        text-align: center;
        letter-spacing: 0.3rem;
        color: var(--theme-color);
        border-bottom: 1px solid var(--theme-color);
        &:hover {
          padding-left: 3.5rem;
          background-color: var(--title-color);
        }
      }
    }

    .socialWrapper {
      align-content: center;
      align-items: center;
      padding-top: 80px;
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
          background-color: var(--theme-color);
          transition: var(--transition);
          box-shadow: var(--lightShadow);
          &:hover {
            transform: scale(1.2);
          }
          a {
            vertical-align: middle;
            color: var(--smoke-color);
            font-size: 18px;
          }
        }
      }
    }
  }
`;

export default Sidebar;
