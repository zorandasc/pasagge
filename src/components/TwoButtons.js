import React from "react";
import { Link } from "gatsby";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { styled } from "styled-components";
import Rotate from "react-reveal/Rotate";

const TwoButtons = () => {
  return (
    <Wrapper>
      <Rotate cascade>
        <Link className="btn1" to="/about">
          Saznaj Više
          <BsFillArrowRightSquareFill className="icon"></BsFillArrowRightSquareFill>
        </Link>
        <Link className="btn2 btn2-call" to="/contact">
          Kontaktirajte nas <AiFillPhone className="icon"></AiFillPhone>
        </Link>
      </Rotate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-column-gap: 2rem;
    -moz-column-gap: 2rem;
    column-gap: 2rem;
  }
  .btn1 {
    width: 100%;
    max-width: 300px;
    cursor: pointer;
    letter-spacing: 2px;
    font-size: 16px;
    background-color: var(--body-bg);
    color: var(--title-color);
    line-height: 1;
    text-transform: capitalize;
    display: inline-block;
    border: none;
    border-radius: 2rem;
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 15px 18px;
    margin-bottom: 1rem;
    box-shadow: 0 5px 30px 0 rgba(223, 73, 124, 0.72);
    overflow: hidden;
    .icon {
      color: var(--theme-color);
      width: var(--icon-size, 30px);
      height: var(--icon-size, 30px);
      line-height: var(--icon-size, 40px);
      display: inline-block;
      margin-left: 15px;
      font-size: 18px;
      vertical-align: middle;
      //border-radius: 0.6rem;
    }
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
  .btn2 {
    width: 100%;
    letter-spacing: 1px;
    line-height: 1;
    text-transform: uppercase;
    display: inline-block;
    padding: 15px 18px;
    border: none;
    position: relative;
    border-radius: 2rem;
    z-index: 1;
    text-align: center;
    margin-bottom: 1rem;
    overflow: hidden;
    .icon {
      width: var(--icon-size, 30px);
      height: var(--icon-size, 30px);
      line-height: var(--icon-size, 40px);
      display: inline-block;
      font-size: 18px;
      vertical-align: middle;
    }
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
  .btn2-call {
    text-transform: capitalize;
    background-color: transparent;
    border: 2px solid var(--title-color);
    color: var(--title-color);
    font-size: 16px;
    font-weight: 500;
  }
`;

export default TwoButtons;
