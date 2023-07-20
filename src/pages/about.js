import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { getImage, StaticImage } from "gatsby-plugin-image";

import { Layout, Seo, Background } from "../components";

const about = ({ data }) => {
  return (
    <Layout>
      <Wrapper>
        <Background image={getImage(data.heroImage1)}>
          <div className="section-center">
            <div className="contact-header-title">
              <ul>
                <li>
                  <Link to="/">Početna</Link>
                </li>
                <li>O Nama</li>
              </ul>
              <div>
                <h1>O NAMA</h1>
              </div>
            </div>
          </div>
        </Background>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImage1: file(name: { eq: "pageBg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

const Wrapper = styled.section`
  color: var(--title-color);
  .contact-header-title {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 0 0 31px;
      list-style: none;
      color: var(--theme-color);

      li:first-child a {
        color: var(--title-color);
      }
      li:first-child a:hover {
        color: var(--theme-color);
      }

      li:not(:first-child)::before {
        content: ">>";
        border-radius: 50%;
        padding: 0 11px;
        color: var(--theme-color);
        font-size: 20px;
        font-weight: 900;
        display: inline-block;
      }
    }
  }
`;

export const Head = () => <Seo title="O nama" />;

export default about;
