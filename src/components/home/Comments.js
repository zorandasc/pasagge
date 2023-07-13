import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const Comments = ({ className, images }) => {
  const [index, setIndex] = React.useState(0);

  const bgImage = convertToBgImage(getImage(images[0]));

  const customers = [
    {
      image: getImage(images[1]),
      name: "Igor",
      title: "Terapija kose",
      quote:
        "OdličnI u pomaganju da popravim neke problematične urasle dlake. Problem riješen otkad sam slijedila njihove savjete. Bravo!",
    },
    {
      image: getImage(images[2]),
      name: "Jelena",
      title: "Terapija Voska",
      quote:
        "Praktično bez bola i odlični rezultati svaki put. Najbolje vaksiranje koje sam ikada imala.",
    },
    {
      image: getImage(images[3]),
      name: "Milan",
      title: "Masaža",
      quote:
        "Spa Beauty Salon je predivan salon sa veoma ljubaznim i prijatnim osobljem. Od prve sesije sa njima mogu da osetim promenu.",
    },
  ];

  React.useEffect(() => {
    const lastIndex = customers.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, customers.length]);

  return (
    <BackgroundImage Tag="section" {...bgImage} className={className}>
      <div className="section-center">
        {customers.map((customer, customerIndex) => {
          const { image, name, title, quote } = customer;
          let position = "nextSlide"; //na pocetku ovo ce btit sa drugi u nizu pomjeri desno
          if (customerIndex === index) {
            position = "activeSlide"; //za prvi u nizu centriraj
          }

          if (
            customerIndex === index - 1 ||
            (index === 0 && customerIndex === customers.length - 1)
          ) {
            position = "lastSlide"; // svaki prethodni ||  na pocetku za zadnjeg u nizu pomjeri lijevo
          }

          return (
            <article key={customerIndex} className={position}>
              <GatsbyImage
                image={image}
                className="img"
                alt="rewiver"
              ></GatsbyImage>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
          aria-label="swipe-left"
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
          aria-label="swipe-right"
        >
          <FiChevronRight />
        </button>
      </div>
    </BackgroundImage>
  );
};

export default styled(Comments)`
  background: rgba(0, 0, 0, 0.4);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1 !important;
  padding: 1rem 0;

  .section-center {
    margin-top: 4rem;
    width: 80vw;
    max-width: 800px;
    height: 450px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;

    .img {
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    h4 {
      text-transform: uppercase;
      color: var(--body-bg);
      margin-bottom: 0.25rem;
    }
    .title {
      text-transform: capitalize;
      margin-bottom: 0.75rem;
      color: var(--theme-color);
      font-size: 18px;
    }
    .text {
      max-width: 45em;
      margin: 0 auto;
      line-height: 2;
      color: var(--smoke-color);
    }
    .icon {
      font-size: 3rem;
      margin-top: 1rem;
      color: var(--theme-color);
    }
    .prev,
    .next {
      position: absolute;
      top: 200px;
      transform: translateY(-50%);
      background: var(--body-color);
      color: var(--smoke-color);
      width: 2.25rem;
      height: 2.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }
    .prev:hover,
    .next:hover {
      background: var(--theme-color);
    }
    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }
    @media (min-width: 800px) {
      .prev,
      .next {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
      }
    }
    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: var(--transition);
    }
    article.activeSlide {
      opacity: 1;
      transform: translateX(0);
    }

    article.lastSlide {
      transform: translateX(-100%);
    }

    article.nextSlide {
      transform: translateX(100%);
    }
  }
`;
