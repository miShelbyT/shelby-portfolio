import React from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

import computer from '../images/computer-image.jpg'

function Main(props) {
  return (
    <div className="main">
      <h1>SRT - Logo goes here</h1>
      <figure className="computer">
        <img src={computer} alt="computer sitting on desk" />
        <small>
        <figcaption>
          Photo by{' '}
          <a href="https://unsplash.com/@cgower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Christopher Gower
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/@cgower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">{' '}
            Unsplash
          </a>
        </figcaption>
        </small>
      </figure>
      <div className="quote">
        <h3>
          <span>
            I am just a child who has never grown up. I still keep asking these
            'how' and 'why' questions. Occasionally, I find an answer."
          </span><br></br>
          Stephen Hawking
        </h3>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Main
