import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import grey from '@material-ui/core/colors/grey'

import doWhatYouLove from '../resources/do-what-you-love.jpg'
import shelbyPic from '../resources/shelby-pic.png'

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
    width: '100%',
  },
  shelbyImg: {
    borderRadius: '50%',
    float: 'left',
    margin: '50px 45px 25px 0',
    shapeOutside: 'circle(50%)',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      borderRadius: '15%',
      margin: 0,
    },
  },
  aboutMe: {
    color: grey[800],
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 300,
    padding: '45px 70px',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: 16,
      padding: 40,
    },
  },
}))

function About() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className="about-div">
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

      <div className={`${classes.aboutMe} about-div`}>
        <img
          src={shelbyPic}
          alt="shelby headshot"
          className={classes.shelbyImg}
        />
        <p>
          My professional life began in the arts. I have had the immense
          privilege of traveling around the US and overseas as a professional
          actor. Eventually I realized I was ready to move on and do...
          something else. It didn't take me terribly long to find my next
          passion: web development/software engineering have since become my
          nearest and dearest obsession. I graduated from Flatiron School's
          bootcamp program in January, 2021 and was hired on to teach Flatiron's
          curriculum to cohorts at the State College of FL from March 2022 -
          April 2023. This May I earned a BS in Software Engineering at
          Western Governor's University because apparently I Cannot. Stop.
          Learning. 🤓
        </p>
        <p>
          When I'm not studying or coding madly I can be found on a hiking trail
          with my wonderful husband and the sweetest rescue dog you'll ever
          meet.<br></br>
        </p>
        <p>
          To view and/or print my resume, go <NavLink to="/resume" className="resume-link">here</NavLink>.
        </p>
        <div style={{ textAlign: 'center' }}>🍷🧁🍷🧁🍷🧁🍷🧁</div>
      </div>
    </div>
  )
}

export default About
