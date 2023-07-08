import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { styled } from "styled-components";

const TwoButtons = () => {
  return (
    <Wrapper>
      <button className="btn btn-app">
        ZAKAŽITE SASTANAK
        <BsFillArrowRightSquareFill className="icon"></BsFillArrowRightSquareFill>
      </button>
      <button className="btn btn-call">
        <AiFillPhone className="icon"></AiFillPhone> POZOVITE NAS
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  justify-content: space-evenly;
  align-items: center;

  .btn {
    line-height: 1;
    text-transform: uppercase;
    display: inline-block;
    padding: 15px 18px;
    border: none;
    position: relative;
    z-index: 1;
    text-align: center;
    min-width: 270px;
    font-size: 16px;
    background-color: var(--smoke-color);
    color: var(--title-color);

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
  .btn-app {
    margin-bottom: 1rem;
    letter-spacing: 0;
    font-weight: 500;
    font-size: 16px;
    background-color: var(--smoke-color);
    color: var(--title-color);
    text-transform: capitalize;
    @media (min-width: 800px) {
      margin: 0px 15px 0px 15px;
    }
  }
  .btn-call {
    letter-spacing: 0;
    text-transform: capitalize;
    background-color: transparent;
    border: 2px solid var(--border-color);
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
  }
`;

export default TwoButtons;
