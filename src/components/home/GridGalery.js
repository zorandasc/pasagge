import React from "react";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Button1 from "../Button1";

const GridGalery = ({ images }) => {
  const projects = [
    { id: 1, image: getImage(images[0]), name: "mini val", type: "njega kose" },
    {
      id: 2,
      image: getImage(images[1]),
      name: "divlja sjena",
      type: "sminkanje",
    },
    {
      id: 3,
      image: getImage(images[2]),
      name: "broncani majdan",
      type: "njega tijela",
    },
    { id: 4, image: getImage(images[3]), name: "relax", type: "relax" },
  ];

  return (
    <Wrapper>
      <div className="main-title">
        <h2>
          Istaknuti radovi<span>Naša Galerija</span>
        </h2>
        <p>
          Iskusite metamorfozu od napetosti do spokoja u našem salonu uz veliki
          izbor masaža i tretmana za lice, tijelo i kosu.
        </p>
      </div>
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
              <div className="info">
                <p>- {type} -</p>
                <h3>{name}</h3>
              </div>
            </article>
          );
        })}
      </div>
      <div className="btn-wrapper">
        <Button1>Galerija</Button1>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

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
      height: 100%;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--theme-color);
      &:hover .img {
        opacity: 0.2;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        transition: var(--transition);
        color: var(--smoke-color);
        text-align: center;
        opacity: 0;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
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

export default GridGalery;
