import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import grey from '@material-ui/core/colors/grey'

import doWhatYouLove from '../images/do-what-you-love.jpg'
import shelbyPic from '../images/shelby-pic.png'

const initialDrawerWidth = 71


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(12),
    width: `calc(100% - ${initialDrawerWidth}px)`,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: -28,
    marginLeft: `calc(10px + ${initialDrawerWidth}px)`,
    maxHeight: '500px',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      margin: `0px auto -28px calc(10px + ${initialDrawerWidth}px)`,
      width: '100vw',
    },
  },
  shelbyImg: {
    borderRadius: '50%',
    float: 'left',
    margin: '50px 45px 25px 0',
    shapeOutside: 'circle(50%)',
    width: 300,
    height: 300,
    [theme.breakpoints.down('sm')]: {
      margin: '15px auto',
      height: 225,
      width: 225,
    },
  },
  aboutMe: {
    backgroundColor: '#dcf0f2',
    color: grey[800],
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 300,
    padding: '45px 70px',
    marginTop: 30,
    marginLeft: `calc(10px + ${initialDrawerWidth}px)`,
    maxWidth: 1042,
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      margin: `0px auto -28px calc(10px + ${initialDrawerWidth}px)`,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
    },
  },
}))

function About() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <figure>
          <img
            src={doWhatYouLove}
            alt="neon sign do what you love"
            className={`${classes.image} fade-in`}
          />
          <small>
            <figcaption className={'fade-in'}>
              Photo by{' '}
              <a href="https://unsplash.com/@millolin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Millo Lin
              </a>{' '}
              on{' '}
              <a href="https://unsplash.com/s/photos/millo-lin-neon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </figcaption>
          </small>
        </figure>
      </div>

      <div className={`${classes.aboutMe} about-me`}>
        <img src={shelbyPic} alt="shelby pic" className={classes.shelbyImg} />
        <h3>About Me:</h3>
        <p>
          My professional life began in the arts. I have had the immense
          privilege of traveling around the US and overseas as a professional
          actor. Eventually I realized I was ready to move on and do...
          something else. It didn't take me long to find my next passion: web
          development/software engineering have since become my nearest and
          dearest obsession. I graduated from Flatiron School's bootcamp program
          in January, 2021. I am a fullstack developer however front end work is
          what excites me the most. Pretty much every day you can find me
          happily immersed in the expansion of my Javascript, React, Redux,
          Semantic UI, Material UI, SASS and other front end skills.
        </p>
        <p>
          When I'm not coding madly I can be found on a hiking trail somewhere
          in upstate New York with my husband and the sweetest rescue dog you'll
          ever meet.<br></br>
        </p>
        <span>🍷🧁🍷🧁🍷🧁🍷🧁</span>
      </div>
    </div>
  )
}

export default About
