import React from "react";
import { styled } from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import Bounce from "react-reveal/Bounce";


const Prices = ({ className, images }) => {
  const [pricePlan, setPricePlan] = React.useState("basic");

  const bgImage = convertToBgImage(getImage(images[0]));

  const massages = [
    {
      id: 1,
      image: getImage(images[1]),
      title: "Personalizovana Masaža",
      times: ["60 minuta", "90 minuta"],
      prices: ["100km", "150km"],
    },
    {
      id: 2,
      image: getImage(images[2]),
      title: "Masaža Parova",
      times: ["60 minuta", "90 minuta"],
      prices: ["100km", "150km"],
    },
    {
      id: 3,
      image: getImage(images[3]),
      title: "Vruća Kamena Masaža",
      times: ["60 minuta", "90 minuta"],
      prices: ["100km", "150km"],
    },
    {
      id: 4,
      image: getImage(images[4]),
      title: "Čista Masaža Cijelog Tijela",
      times: ["60 minuta", "90 minuta"],
      prices: ["100km", "150km"],
    },
  ];

  const pricePlanHandler = (plan) => {
    if (
      (plan === "basic" && pricePlan === "basic") ||
      (plan === "family" && pricePlan === "family")
    )
      return;
    setPricePlan(plan);
  };

  return (
    <BackgroundImage Tag="section" {...bgImage} className={className}>
      <div className="title-wrapper">
        <Bounce letf cascade>
          <div className="title">
            <p>
              Vaših <span className="label">25 % popusta</span> je ovdije
            </p>
            <h2>
              Pronađite Inspiraciju{" "}
              <span className="title-label"> Cijenovni Plan</span>
            </h2>
          </div>
        </Bounce>
        <div className="subText">
          <p>
            Uzmite malo vremena za sebe. Počastite se. Zaslužili ste to.
            Rezervišite tretman ovog mijeseca i dobićete 25% popusta na sve
            dalje tretmane.
          </p>
        </div>
      </div>
      <div className="price-container">
        <div className="left-column">
          <div className="tabs">
            <button
              onClick={() => pricePlanHandler("basic")}
              className={pricePlan === "basic" ? "tab activeTab" : "tab"}
              aria-label="basic plan"
            >
              Osnovni Plan
            </button>
            <button
              onClick={() => pricePlanHandler("family")}
              className={pricePlan === "family" ? "tab activeTab" : "tab"}
              aria-label="family plan"
            >
              Porodični Plan
            </button>
          </div>
          <div className="plan-card">
            <div className="card-title">
              <div className="price-number">
                <sub>BAM</sub>
                <span>{pricePlan === "basic" ? 99 : 199}</span>
                <sub>.00</sub>
              </div>
              <div className="price-title">
                <h3>
                  {pricePlan === "basic" ? "Osnovni Plan" : "Porodični Plan"}
                </h3>
                <span>Po Mjesecu</span>
              </div>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  Šminkanje i Masaža Lica{" "}
                  <AiFillCheckCircle className="icon"></AiFillCheckCircle>
                </li>
                <li>
                  Njega Stopala i Noktiju{" "}
                  <AiFillCheckCircle className="icon"></AiFillCheckCircle>
                </li>
                <li>
                  Njega Kose i Styling{" "}
                  <AiFillCheckCircle className="icon"></AiFillCheckCircle>
                </li>
                <li>
                  Vruća Kamena Masaža{" "}
                  {pricePlan === "basic" ? (
                    <MdOutlineCancel className="icon"></MdOutlineCancel>
                  ) : (
                    <AiFillCheckCircle className="icon"></AiFillCheckCircle>
                  )}
                </li>
                <li>
                  Hemilton Masaža Očuvanja{" "}
                  {pricePlan === "basic" ? (
                    <MdOutlineCancel className="icon"></MdOutlineCancel>
                  ) : (
                    <AiFillCheckCircle className="icon"></AiFillCheckCircle>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-column">
          {massages.map((massage) => {
            const { id, image, title, times, prices } = massage;
            return (
              <div className="massage-item" key={id}>
                <div className="img-container">
                  <GatsbyImage
                    image={image}
                    className="img"
                    alt="massage"
                  ></GatsbyImage>
                </div>
                <div className="item-body">
                  <h3>{title}</h3>
                  <p>
                    {times[0]}
                    <span>{prices[0]}</span> / {times[1]}
                    <span>{prices[1]}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BackgroundImage>
  );
};

export default styled(Prices)`
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
  .price-container {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    flex-wrap: wrap;
    max-width: 1200px;
    padding: 40px 25px 80px 25px;

    .left-column {
      width: 100%;
      background-color: var(--body-bg);
      margin-bottom: 2rem;
      box-shadow: var(--darkShadow);

      @media (min-width: 768px) {
        box-shadow: none;
        width: 50%;
        margin-bottom: 0;
      }
      .tabs {
        display: flex;
        justify-content: center;
        .tab {
          padding: 12px 20px;
          //background-color: var(--theme-color);
          font-weight: 700;
          position: relative;
          display: inline-block;
          border: 1px solid white;
          cursor: pointer;
        }
        .activeTab {
          background-color: var(--theme-color);
          color: white;
          border: none;
        }
      }
      .plan-card {
        position: relative;
        z-index: 1;
        padding: 40px 20px;
        border-bottom: 10px solid transparent;
        transition: all ease 0.4s;
        .card-title {
          position: relative;
          border-bottom: 2px solid var(--theme-color);
          padding-bottom: 15px;
          margin-bottom: 25px;
          @media (min-width: 768px) {
            padding-bottom: 30px;
            margin-bottom: 63px;
          }
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          .price-number {
            font-size: 32px;
            bottom: -2px;
            font-family: var(--title-font);
            line-height: 1;
            position: relative;
            color: var(--theme-color);
            sub {
              font-size: 20px;
              position: relative;
              bottom: 0;
              vertical-align: baseline;
            }
            @media (min-width: 768px) {
              font-size: 80px;
              bottom: -5px;
              sub {
                font-size: 24px;
              }
            }
          }
          .price-title {
            text-align: end;
            h3 {
              font-family: var(--body-font);
            }
            margin-left: 0.4rem;
            @media (min-width: 768px) {
              font-size: 1.25rem;
            }
          }
        }
        .card-body {
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            text-align: left;
            margin-bottom: 43px;
            li {
              display: block;
              clear: both;
              margin: 15px 0;
              padding-right: 40px;
              margin-bottom: 20px;
              position: relative;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .icon {
                width: 35px;
                height: 35px;
                //background-color: var(--white-color);
                color: var(--theme-color);
              }
            }
          }
        }
      }
    }
    .right-column {
      width: 100%;
      padding: 57px 30px 37px 30px;
      background-color: var(--body-bg);
      box-shadow: var(--darkShadow);
      @media (min-width: 768px) {
        box-shadow: none;
        width: 50%;
      }
      .massage-item {
        display: flex;
        margin-bottom: 20px;
        .img-container {
          margin-right: 20px;
          border-radius: 14px;
          overflow: hidden;
          transition: all ease 0.4s;
          transform: scale(1);
          &:hover img {
            transition: all ease 0.4s;
            transform: scale(1.2);
          }
        }
        .item-body {
          align-self: center;
          h3 {
            font-family: var(--body-font);
            font-size: 18px;
            font-weight: 700;
            margin: -0.2em 0 15px 0;
            border-bottom: 1px solid var(--theme-color);
            padding: 0 0 15px 0;
            @media (min-width: 768px) {
              font-size: 24px;
            }
          }
          p {
            span {
              font-size: 14px;
              padding: 0px 5px;
              display: inline-block;
              background-color: var(--theme-color);
              color: var(--white-color);
              border-radius: 6px;
              font-weight: 700;
              margin: 0 5px;
            }
          }
        }
      }
    }
  }
`;
