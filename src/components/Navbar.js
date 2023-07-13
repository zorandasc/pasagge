import React, { useContext } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "gatsby";

import { GatsbyContext } from "../context/context";
import logo from "../images/logo.svg";
import links from "../constants/links";
import socialLinks from "../constants/social_links";

const Navbar = () => {
  const { isSidebarOpen, showSidebar, height } = useContext(GatsbyContext);

  return (
    <Wrapper height={height}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="passage logo" width="261" height="60"></img>
          </Link>
          {!isSidebarOpen && (
            <button
              className="toggle-btn"
              onClick={showSidebar}
              aria-label="hamburger menu"
            >
              <GiHamburgerMenu></GiHamburgerMenu>
            </button>
          )}
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.url} activeClassName="active">
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
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
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
  background: transparent;
  z-index: 2;
  height: 5rem;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  ${({ height }) =>
    height > 80 &&
    ` position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 4.5rem;
      border-bottom: 0.1rem solid var(--theme-color);
      box-shadow: var(--darkShadow);
      background: var(--body-bg);
    `}

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--title-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    //border-radius: 30%;
    //overflow: hidden;
    //box-shadow: 2px 5px 5px 0px rgba(0, 0, 0, 0.2);
    img {
      //margin-top: 5rem;
      width: auto;
      //width: 100px;
      //transform: scale(1);
      //@media (min-width: 800px) {
      // margin-top: 3rem;
      //width: auto;
      //  width: 150px;
      //  transform: scale(1.2);
      //}
    }
    .toggle-btn {
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
      box-shadow: var(--lightShadow);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--theme-color);
      }
    }
  }
  .nav-links {
    display: none;
    a {
      transition: var(--transition);
      font-size: 18px;
      &:hover {
        color: var(--theme-color);
        font-size: 20px;
      }
    }
  }

  .socialWrapper {
    display: none;
    align-content: center;
    align-items: center;
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

  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      max-width: 500px;
      a {
        color: var(--title-color);
        letter-spacing: 2px;
      }
    }
    .socialWrapper {
      display: block;
    }
    li {
      position: relative;
    }
    button {
      color: var(--smoke-color);
      background: transparent;
      border: transparent;
      font-size: 1rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 10px 20px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
    }
  }
`;

export default Navbar;
