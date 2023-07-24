import React from "react";
import styled from "styled-components";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import Bounce from "react-reveal/Bounce";

import services from "../../constants/services";

const GlassCard = ({ icon, title, body }) => {
  return (
    <CardWrapper>
      <div className="card-inner">
        <div className="card-front">
          <img src={icon} className="service-icon" alt="icon" />
          <div className="service-body">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="card-back">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  perspective: 1000px;
  cursor: pointer;
  min-height: 200px;
  max-width: 500px;
  height: 320px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .card-front,
    .card-back {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
      border: 1px solid rgba(255, 255, 255, 0.25);
      border-radius: 20px;
      background-color: rgba(223, 73, 124, 0.45);
      backdrop-filter: blur(15px);
      //box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
      box-shadow: var(--darkShadow);
      .service-icon {
        width: 200px;
        height: 150px;
        filter: brightness(0) saturate(100%) invert(34%) sepia(0%)
          saturate(827%) hue-rotate(148deg) brightness(93%) contrast(89%);
        margin: 0 auto;
      }
      .service-body {
        color: var(--body-color);
        text-align: center;
        width: 100%;
        padding: 0 10px;
        h3 {
          font-size: 30px;
        }
        p {
          max-width: 225px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    .card-front {
    }

    .card-back {
      text-align: center;
      padding: 20px;
      transform: rotateY(180deg);
      background-color: rgba(223, 73, 124, 0.85);
      color: white;
      h3 {
        font-size: 30px;
      }
    }
  }
  &:hover .card-inner {
    transform: rotateY(180deg);
  }
`;

const Services = ({ className, image, setref }) => {
  const bgImage = convertToBgImage(getImage(image));

  return (
    <BackgroundImage Tag="section" {...bgImage} className={className}>
      <div className="title-wrapper" ref={setref}>
        <div className="title">
          <p>
            Sa više od <span className="label">10 tipova</span> tretmana
          </p>
          <h2>
            Relax Zona <span className="title-label"> Naše Usluge</span>
          </h2>
        </div>

        <div className="subText">
          <p>
            Naš kozmetički salon nudi kompletan spektar terapeutskih i
            podmlađujućih tretmana ljepote, koristeći samo najbolje proizvode sa
            najfinijim sastojcima za njegu lica, kože, kose i tijela.
          </p>
        </div>
      </div>

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, body } = service;
          return (
            <Bounce key={id}>
              <GlassCard icon={icon} title={title} body={body}></GlassCard>
            </Bounce>
          );
        })}
      </div>
    </BackgroundImage>
  );
};

export default styled(Services)`
  padding: 5rem 0;
  .title-wrapper {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    align-content: center;
    padding: 30px;

    @media (min-width: 768px) {
      padding: 60px;
      width: 50%;
      margin: auto;
    }
    .title {
      margin-bottom: 20px;
      text-transform: capitalize;
      p {
        font-size: 18px;
        font-weight: 400;
        display: block;
        line-height: 1;
        margin-bottom: 30px;
        @media (min-width: 768px) {
          font-size: 20px;
        }
        .label {
          color: var(--white-color);
          background-color: var(--theme-color);
          padding: 6px 8px 1px 8px;
          border-radius: 4px;
          display: inline-block;
          font-size: 16px;
          @media (min-width: 768px) {
            font-size: 16px;
          }
        }
      }
      h2 {
        margin-top: -0.13em;
        line-height: 1;
        font-size: 3rem;
        margin-bottom: 10px;
        @media (min-width: 768px) {
          font-size: 50px;
          margin-bottom: 17px;
        }
        .title-label {
          display: inline-block;
          color: var(--theme-color);
          text-align: left;
          font-size: 25px;
          font-weight: bold;
          max-width: 70px;
          @media (min-width: 768px) {
            font-size: 24px;
          }
        }
      }
    }
    .subText {
      max-width: 500px;
      margin-bottom: 20px;
      padding: 15px 0px 15px 30px;
      border-style: solid;
      border-width: 0px 0px 0px 2px;
      border-color: var(--theme-color);
      p {
        line-height: 1.63;
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
          margin-bottom: 16px;
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
