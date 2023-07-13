import * as React from "react";
import { graphql } from "gatsby";

import { Layout, Seo } from "../components";
import {
  Hero,
  About,
  Prices,
  Services,
  Comments,
  Appointment,
  GridGalery,
  //Quote,
} from "../components/home";

export const query = graphql`
  {
    heroImage1: file(name: { eq: "hero1" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    heroImage2: file(name: { eq: "hero2" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    heroImage3: file(name: { eq: "hero3" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    aboutImage1: file(name: { eq: "about1" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    aboutImage2: file(name: { eq: "about2" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          height: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    aboutImage3: file(name: { eq: "about3" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    serviceImage: file(name: { eq: "servicesBg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    appointImage: file(name: { eq: "appointBg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    priceImage: file(name: { eq: "priceBg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
    massageImage1: file(name: { eq: "massage1" }) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          height: 150
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    massageImage2: file(name: { eq: "massage2" }) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          height: 150
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    massageImage3: file(name: { eq: "massage3" }) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          height: 150
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    massageImage4: file(name: { eq: "massage4" }) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          height: 150
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    commentImage: file(name: { eq: "commentBg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    personImage1: file(name: { eq: "person1" }) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          height: 150
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    personImage2: file(name: { eq: "person2" }) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          height: 150
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    personImage3: file(name: { eq: "person3" }) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          height: 150
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    gallImage1: file(name: { eq: "gallery1" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    gallImage2: file(name: { eq: "gallery2" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    gallImage3: file(name: { eq: "gallery3" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    gallImage4: file(name: { eq: "gallery4" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    galleryBg: file(name: { eq: "galleryBg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero images={[data.heroImage1, data.heroImage2, data.heroImage3]}></Hero>
      <About
        image1={data.aboutImage1}
        image2={data.aboutImage2}
        image3={data.aboutImage3}
      ></About>
      <Services image={data.serviceImage}></Services>
      <Comments
        images={[
          data.commentImage,
          data.personImage1,
          data.personImage2,
          data.personImage3,
        ]}
      ></Comments>
      <Prices
        images={[
          data.priceImage,
          data.massageImage1,
          data.massageImage2,
          data.massageImage3,
          data.massageImage4,
        ]}
      ></Prices>
      <Appointment image={data.appointImage}></Appointment>

      {/*<Quote></Quote>*/}
      <GridGalery
        images={[
          data.gallImage1,
          data.gallImage2,
          data.gallImage3,
          data.gallImage4,
          data.galleryBg,
        ]}
      ></GridGalery>
    </Layout>
  );
};

export const Head = () => <Seo title="Početna" />;

export default IndexPage;
