import React from "react";
import styled from "styled-components";

import TwoButtons from "../TwoButtons"

const Quote = () => {
  return (
    <Wrapper>
      <div className="headline">
        <p>Nemojte da se ustručavate kontaktirajte nas</p>
        <h2>U svakom trenutku</h2>
      </div>
      <TwoButtons></TwoButtons>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 100px 0px 100px 0px;
  background-image: url(https://wordpress.vecurosoft.com/wellnez/wp-content/uploads/2023/05/cta-bg-1-1.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  @media (max-width: 1024px) {
    padding: 60px 0px 60px 0px;
  }
  .headline {
    text-align: center;
    p {
      text-align: center;
      color: #ffffff;
      font-size: 18px;
      @media (max-width: 767px) {
        font-size: 16px;
      }
    }
    h2 {
      margin: 0px 0px 30px 0px;
      color: #ffffff;
      font-size: 60px;
      @media (max-width: 767px) {
        font-size: 36px;
      }
    }
  }
`;

export default Quote;
