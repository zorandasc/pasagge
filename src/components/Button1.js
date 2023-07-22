import React from "react";
import { Link } from "gatsby";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { styled } from "styled-components";

const Button1 = ({ path, handleClick, children }) => {
  return (
    <Wrapper>
      {handleClick ? (
        <button className="btn" aria-label={children} onClick={handleClick}>
          {children}
          <BsFillArrowRightSquareFill className="icon"></BsFillArrowRightSquareFill>
        </button>
      ) : (
        <Link className="btn" to={path}>
          {children}
          <BsFillArrowRightSquareFill className="icon"></BsFillArrowRightSquareFill>
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`

  .btn {
    width: 100%;
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
`;

export default Button1;
