import React from 'react';
import Header from './Header';
import Latestworks from './Latestworks';
import Works from './Works';
import About from './About';
import Skill from './Skill';
import Contact from './Contact';
import Footer from './Footer';

function Main() {
  return (
    <div className="wrapper">
      <Header />
      <main id="contents">
        {/* <Latestworks /> */}
        <Works />
        <About />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
