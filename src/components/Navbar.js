import React, { useContext } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "gatsby";

import { GatsbyContext } from "../context/context";
import logo from "../images/logo.svg";
import links from "../constants/links";

const Navbar = () => {
  const { isSidebarOpen, showSidebar, height } = useContext(GatsbyContext);

  return (
    <Wrapper height={height}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="design"></img>
          </Link>
          {!isSidebarOpen && (
            <button className="toggle-btn" onClick={showSidebar}>
              <GiHamburgerMenu></GiHamburgerMenu>
            </button>
          )}
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            return (
              <Link key={link.id} to={link.url} activeClassName="active">
                {link.text}
              </Link>
            );
          })}
        </ul>
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
    `position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    border-bottom: 0.1rem solid var(--theme-color);
    box-shadow: var(--darkShadow);
    background: var(--smoke-color);`}

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
    img {
      width: auto;
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
      grid-template-columns: auto 1fr;
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
      }
    }
    li {
      padding: 1rem 0;
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
