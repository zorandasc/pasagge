import React from "react";
import { styled } from "styled-components";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { FaRegCalendarDays } from "react-icons/fa6";
import services from "../../constants/services";

const Appointment = ({ className, image }) => {
  const bgImage = convertToBgImage(getImage(image));

  return (
    <BackgroundImage Tag="section" {...bgImage} className={className}>
      <div className="form-container">
        <div className="title">
          <div className="icon-container">
            <FaRegCalendarDays className="icon"></FaRegCalendarDays>
          </div>
          <div className="title-body">
            <span>Relaksirajte se svaki dan u svako vrijeme</span>
            <p>Zakažite Sastanak</p>
          </div>
        </div>

        <form
          name="contact"
          className="form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <div className="form-group">
            <label htmlFor="name"> </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Unesite ime"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="prezime"> </label>
            <input
              type="text"
              name="prezime"
              id="prezime"
              required
              placeholder="Unesite prezime"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"> </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Unesite Vaš email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone"> </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Unesite Vaš telefon"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="usluga"> </label>
            <select
              name="usluga"
              id="usluga"
              required
              placeholder="Izaberite uslugu"
              className="form-control"
              defaultValue="Izaberite uslugu"
            >
              <option disabled value="Izaberite uslugu">Izaberite uslugu</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>{service.title}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date"> </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              placeholder="Izaberite datum"
              className="form-control"
            />
          </div>
          <div className="form-group message-container">
            <label htmlFor="message"> </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Vaša poruka"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" aria-label="send">
            Pošalji
          </button>
        </form>
      </div>
    </BackgroundImage>
  );
};

export default styled(Appointment)`
  background: rgba(0, 0, 0, 0.4);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1 !important;
  padding: 130px 0px 130px 0px;
  --bs-gutter-x: 20px;
  --bs-gutter-y: 0;
  .form-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    background-color: rgba(242, 216, 231, 0.8);
    padding: 40px 20px;
    @media (min-width: 768px) {
      padding: 60px;
      max-width: 1200px;
    }

    .title {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      @media (min-width: 768px) {
        margin-bottom: 40px;
      }
      .icon-container {
        width: 45px;
        height: 45px;
        line-height: 50px;
        font-size: 18px;
        margin-right: 10px;
        text-align: center;
        background-color: var(--theme-color);
        color: var(--white-color);
        border-radius: 50%;

        @media (min-width: 768px) {
          width: 60px;
          height: 60px;
          line-height: 65px;
          font-size: 24px;
          margin-right: 15px;
        }
        .icon {
          display: inline-block;
          line-height: 1;
        }
      }
      .title-body {
        span {
          font-size: 16px;
          margin: 0 0 13px 0;
          line-height: 1;
          display: block;
          @media (min-width: 768px) {
            font-size: 18px;
          }
        }
        p {
          font-size: 22px;
          font-family: var(--body-font);
          margin: 0;
          line-height: 1;
          color: var(--title-color);
          @media (min-width: 768px) {
            font-size: 36px;
          }
        }
      }
    }
    .form {
      display: flex;
      flex-wrap: wrap;
      margin-top: calc(var(--bs-gutter-y) * -1);
      margin-right: calc(var(--bs-gutter-x) / -2);
      margin-left: calc(var(--bs-gutter-x) / -2);
      .form-group {
        padding-right: calc(var(--bs-gutter-x) / 2);
        padding-left: calc(var(--bs-gutter-x) / 2);
        margin-top: var(--bs-gutter-y);
        margin-bottom: var(--bs-gutter-x);
        width: 100%;
        position: relative;
        input,
        select,
        textarea {
          height: 60px;
          padding: 0 45px 0 30px;
          border: 1px solid var(--border-color);
          color: var(--body-color);
          background-color: var(--body-bg);
          border-radius: 9999px;
          border-radius: 0;
          font-size: 16px;
          width: 100%;
        }
        @media (min-width: 768px) {
          width: 50%;
        }
      }
      .message-container {
        width: 100%;
      }
      .submit-btn {
        letter-spacing: 2px;
        font-size: 16px;
        background-color: var(--theme-color);
        color: var(--white-color);
        line-height: 1;
        text-transform: capitalize;
        display: inline-block;
        border: none;
        position: relative;
        z-index: 1;
        text-align: center;
        padding: 15px 18px;
        width: 100%;
        margin-bottom: 1rem;
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
    }
  }
`;
