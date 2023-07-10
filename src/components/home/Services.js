import React from "react";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import services from "../../constants/services";

const Services = ({ className, image }) => {
 
  const bgImage = convertToBgImage(getImage(image));

  return (
    <BackgroundImage Tag="section" {...bgImage} className={className}>
      <div className="main-title">
        <h2>
          Relax Zona <span>Naši Servisi</span>
        </h2>
        <p>
          Iskusite metamorfozu od napetosti do spokoja u našem salonu uz veliki
          izbor masaža i tretmana za lice, tijelo i kosu.
        </p>
      </div>

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, body } = service;
          return (
            <div key={id} className="service">
              <div className="service-img">
                <img src={icon} className="service-icon" alt="icon" />
              </div>
              <div className="service-body">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </BackgroundImage>
  );
};

export default styled(Services)`
  .main-title {
    padding: 20px;
    position: relative;

    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
      padding: 60px;
      text-align: center !important;
    }
    h2 {
      margin-top: -0.13em;
      line-height: 1;
      font-size: 30px;
      margin-bottom: 10px;
      @media (min-width: 768px) {
        font-size: 50px;
        margin-bottom: 17px;
      }
      span {
        font-size: 20px;
        max-width: 70px;
        display: inline-block;
        color: var(--theme-color);
        text-align: left;
        margin-left: 5px;
        font-weight: bold;
        @media (min-width: 768px) {
          font-size: 24px;
        }
      }
    }
    p {
      
      font-size: 16px;
      font-family: var(--title-font);
      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
  .services-center {
    margin-bottom: 100px;
    .service {
      background-color: rgb(242 216 231);
      padding: 2rem 1.5rem;
      margin-bottom: 2rem;
      border-radius: var(--radius);
      text-align: center;
      transition: var(--transition);
      box-shadow: var(--primary-dark-shadow);
      position: relative;
      border: 1px dotted rgba(242, 183, 216, 255);
      &:hover {
        box-shadow: var(--primary-light-shadow);
      }

      .service-img {
        .service-icon {
          display: inline-block;
          width: 120px;
          height: 120px;
          background-color: var(--body-bg);
          line-height: 110px;
          margin-bottom: 20px;
          border-radius: 50%;
        }
      }

      .service-body {
        position: relative;

        h3 {
          margin-bottom: 12px;
          font-size: 24px;
        }
        p {
          max-width: 225px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
  @media screen and (min-width: 676px) {
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
      a {
        display: none;
      }
    }
  }
  @media screen and (min-width: 992px) {
    .services-center {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;
