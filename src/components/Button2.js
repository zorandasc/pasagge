import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { styled } from "styled-components";

const Button2 = () => {
  return (
    <Wrapper>
      <button className="btn btn-call">
        <AiFillPhone className="icon"></AiFillPhone> POZOVITE NAS
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: initial;
  }
  .btn {
    line-height: 1;
    text-transform: uppercase;
    display: inline-block;
    padding: 15px 18px;
    border: none;
    position: relative;
    z-index: 1;
    text-align: center;
    width: 100%;
    max-width: 260px;
    margin-bottom: 1rem;

    .icon {
      width: var(--icon-size, 30px);
      height: var(--icon-size, 30px);
      line-height: var(--icon-size, 40px);
      display: inline-block;
      margin-left: 15px;
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
  .btn-call {
    letter-spacing: 0;
    text-transform: capitalize;
    background-color: transparent;
    border: 2px solid var(--title-color);
    color: var(--title-color);
    font-size: 16px;
    font-weight: 500;
  }
`;

export default Button2;
