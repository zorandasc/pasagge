import React from "react";
import { createGlobalStyle } from "styled-components";
import { GatsbyProvider } from "./src/context/context";

const GlobalStyle = createGlobalStyle`

:root{
  --body-bg: #ffffff;
  --body-color: #555555;
  --title-color: #121f38;
  --title-color-second:#232b31;
  --secondary-color: #fde5d8;
  --smoke-color: #eff1f5;
  --light-color: #f8f9fa;
  --black-color: #000000;
  --white-color: #ffffff;
  --border-color: #e7e5e5;
  --theme-color: #DF497C;
  //rgb(223,73,124)
  --theme-color-light:rgba(242,216,231,0.8);

  --drawer-width: 480px;
  --title-font: 'Dancing Script', Georgia, Times, serif;
  --body-font: 'Josefin Sans', Helvetica, Arial, sans-serif;
  --main-container: 1270px;
  --container-gutters: 30px;
  --section-space: 120px;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --lightShadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.5);;
  --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  --primary-light-shadow: 0 10px 15px rgba(223,73,124, 0.2);
  --primary-dark-shadow: 0 10px 15px rgba(223,73,124, 0.6);
  --max-width: 1170px;
  --fixed-width: 700px;
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--body-font);
  font-size: 18px;
  font-weight: 400;
  color: var(--body-color);
  line-height: 28px;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  line-height: 28px;
  letter-spacing: 0;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: var(--smoke-color);
}

img{
  width: 100% ;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-weight: 700;
  font-family: var(--title-font);
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
 ;
}

@media screen and (min-width: 800px) {
   h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.3rem;
  }
 
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

/*  global classes */


/* section */
.section {
  padding: 5rem 0;
  position: relative;
}
.section-center {
  width: 80vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
`;

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  );
};
