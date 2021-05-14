import React from 'react';
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function Main(props) {



  return (
    <div className="main">
      <h1>I am Main</h1>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Main;