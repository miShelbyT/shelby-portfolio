import React from 'react'

import { makeStyles } from '@material-ui/core'

import Header from './Header'
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs'
import Contact from './Contact'

import Container from '@material-ui/core/Container'

import computer from '../images/computer-image.jpg'

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
    page: {
    background: '#f9f9f9',
    width: '100%',
  }
})

function Main({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      
      <div className={classes.page}>{children}</div>

      {/* 
      <Container style={{marginLeft: 53, paddingLeft: 0}}>
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
        <h3>
          <span>
            I am just a child who has never grown up. I still keep asking these
            'how' and 'why' questions. Occasionally, I find an answer.
          </span><br></br>
          Stephen Hawking
        </h3>
      </div>
      
      
      <About />
      <Projects />
      <Blogs />
      <Contact />
      </Container> */}
    </div>
  )
}

export default Main
