import React from "react";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import Bounce from "react-reveal/Bounce";

import Button1 from "../Button1";

const GridGalery = ({ className, images }) => {
  const projects = [
    {
      id: 1,
      image: getImage(images[1]),
      name: "hidratantna terapija",
      type: "njega kose",
    },
    {
      id: 2,
      image: getImage(images[2]),
      name: "ljekovita maska",
      type: "njega lica",
    },
    {
      id: 3,
      image: getImage(images[0]),
      name: "sjajan ten",
      type: "njega tijela",
    },
    { id: 4, image: getImage(images[3]), name: "relax masaža", type: "relaks" },
  ];

  const bgImage = convertToBgImage(getImage(images[4]));

  return (
    <BackgroundImage Tag="section" {...bgImage} className={className}>
      <Bounce right cascade>
        <div className="title-wrapper">
          <div className="title">
            <p>
              Pridružite se Našim{" "}
              <span className="label">99 % zadovoljnih</span> korisnika
            </p>
            <h2>
              Istaknuti Radovi{" "}
              <span className="title-label"> Naša Galerija</span>
            </h2>
          </div>
          <div className="subText">
            <p>
              Iskusite metamorfozu od napetosti do spokoja u našem salonu uz
              veliki izbor masaža i tretmana za lice, tijelo i kosu.
            </p>
          </div>
        </div>
      </Bounce>
      <Bounce cascade>
        <div className="tile-layout">
          {projects.map((project, index) => {
            const { id, image, name, type } = project;

            return (
              <article key={id} className={`div-${index}`}>
                <GatsbyImage
                  className="img"
                  image={getImage(image)}
                  alt="galery image"
                />
                <div className="overlay"></div>
                <div className="info">
                  <h3>- {type} -</h3>
                  <hr />
                  <p>{name}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Bounce>
      <div className="btn-wrapper">
        <Button1 path="/gallery">Galerija</Button1>
      </div>
    </BackgroundImage>
  );
};

export default styled(GridGalery)`
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
  .tile-layout {
    margin-top: 2rem;
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    //definise dva rowa visine 300px
    //u ovom slucaju to su articly
    grid-template-rows: 300px 300px;
    //za svaki dodatni row
    grid-auto-rows: 300px;
    /*GOTCHA AKO HOCEM DA GATBY IMAGE PLAY NICELY WIDTH DEFINET 300PX  HEIGHT OF ROW
  MORA SE ZA IMG DEFINISATI HEIGHT OD 100%*/
    .img {
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);

      &:hover .img {
        opacity: 0.2;
      }
      .info {
        width: 80%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        color: var(--smoke-color);
        text-align: center;
        opacity: 0;
        transition: 0.7s;
        p {
          margin-bottom: 0.5rem;
          color: var(--smoke-color);
          text-transform: capitalize;
        }
        hr {
          background: #fff;
          height: 1px;
          border: 0;
          margin: 15px auto;
          width: 60%;
        }
      }

      .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        border-radius: 7px;
        cursor: pointer;
        background: linear-gradient(rgba(0, 0, 0, 0.5), var(--theme-color));
        opacity: 0;
        transition: 1s;
      }
      &:hover {
        .overlay {
          opacity: 1;
        }
        .info {
          bottom: 40%;
          opacity: 1;
        }
      }
    }
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 250px 250px;
      grid-auto-rows: 250px;
    }
    @media (min-width: 1200px) {
      display: grid;
      grid-template-areas:
        "a b b"
        "a c d";
      .div-0 {
        grid-area: a;
      }
      .div-1 {
        grid-area: b;
      }
      .div-2 {
        grid-area: c;
      }
      .div-3 {
        grid-area: d;
      }
    }
    a {
      display: block;
      width: 9rem;
      margin: 0 auto;
      margin-top: 3rem;
      text-align: center;
    }
  }

  .btn-wrapper {
    padding: 20px;
    position: relative;

    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
      padding: 60px;
      text-align: center !important;
    }
  }
`;
