import React from 'react'

import { makeStyles } from '@material-ui/core'

import Header from './Header'

import computer from '../images/computer-image.jpg'

const headerHeight = 115

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  page: {
    background: '#f9f9f9',
    width: '100%',
    // gives us 24 pixels padding - base theme is 8px
    padding: theme.spacing(3),
  },
  image: {
    margin: `${headerHeight}px auto -28px`,
    width: '65vw'
  },
  quote: {
    width: '100vw',
    background: 'rgb(48, 47, 47)',
    padding: 35,
    margin: '75px 0',
    fontFamily: 'Roboto',
    fontWeight: 300,
    color: 'antiquewhite',
  },
  toolbar: theme.mixins.toolbar
}))

function Main({ children, aboutRef, projectsRef, contactRef, blogsRef }){
  const classes = useStyles()

  

  return (
    <div className={classes.root}>
      <Header aboutRef={aboutRef} projectsRef={projectsRef} blogsRef={blogsRef} contactRef={contactRef}/>
      <div>
        <figure>
          <img
            src={computer}
            alt="computer sitting on desk"
            className={classes.image}
          />
          <small>
            <figcaption>
              Photo by{' '}
              <a href="https://unsplash.com/@cgower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Christopher Gower
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/@cgower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                {' '}
                Unsplash
              </a>
            </figcaption>
          </small>
        </figure>
      </div>

      <div className={classes.quote}>
        <h4>
          <span className={classes.quote}>
            I am just a child who has never grown up. I still keep asking these
            'how' and 'why' questions. Occasionally, I find an answer.
          </span>
          <br></br>
          Stephen Hawking
        </h4>
      </div>

      <div className={classes.page}>
        {/* gives us all the child components as wrapped in App.js */}
        <div className={classes.toolbar}></div>
        {children}
        </div>
    </div>
  )
}

export default Main
