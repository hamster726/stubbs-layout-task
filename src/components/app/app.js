import React from "react";

import '../../scss/style.scss'

import Header from "../header/header";
import Slider from "../slider/slider";
import Services from "../services/services";
import About from "../about/about";
import Footer from "../footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <About />
      <Footer />
    </>
  );
};

export default App;
