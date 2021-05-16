import React from 'react'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs'
import Contact from './Contact'

import computer from '../images/computer-image.jpg'

function Main() {
  
  return (
    <div className="main">
      <Header/>
      <figure>
        <img src={computer} alt="computer sitting on desk" />
        <small>
        <figcaption>
          Photo by{' '}
          <a href="https://unsplash.com/@cgower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christopher Gower
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/@cgower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">{' '}
            Unsplash
          </a>
        </figcaption>
        </small>
      </figure>
      <div className="quote">
        <h4>
          <span>
            I am just a child who has never grown up. I still keep asking these
            'how' and 'why' questions. Occasionally, I find an answer.
          </span><br></br>
          Stephen Hawking
        </h4>
      </div>
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  )
}

export default Main
