
import { RecoilRoot } from 'recoil'
import Slider from './components/Slider'
import { Footer } from './components/Footer'
import React, { useRef, useState } from 'react';
import { Gallery } from './components/Gallery'
import { Navbar } from './components/Navbar';
import { Particle } from './components/Particle';
import { Buttonbar } from './components/Buttonbar';
import { Testimonial } from './components/Testimonial';
import { Infotab } from './components/Infotab';
import { About } from './components/About';
import { Form } from './components/Form';
import { ButtonTab } from './components/ButtonTab';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <div>
      <RecoilRoot>
        <Navbar></Navbar>
        <Slider />
        <Buttonbar></Buttonbar>
        <Infotab></Infotab>
        <Testimonial />
        <Form />
        <Gallery></Gallery>
        <div className="about" id='about'>
          <About />
        </div>
        <ButtonTab></ButtonTab>
        <Footer />
      </RecoilRoot>
    </div>
  )
}
