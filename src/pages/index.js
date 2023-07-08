import * as React from "react";
import { Layout, Seo } from "../components";
import {
  Hero,
  About,
  Prices,
  Services,
  Comments,
  Appointment,
  Quote,
} from "../components/home";


const IndexPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Appointment></Appointment>
      <Prices></Prices>
      <Comments></Comments>
      <Quote></Quote>
    </Layout>
  );
};

export const Head = () => <Seo title="Početna" />;

export default IndexPage;
