import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import grey from '@material-ui/core/colors/grey'

import doWhatYouLove from '../images/do-what-you-love.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(12),
    width: '100vw',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    margin: 'auto auto -28px',
    maxHeight: '500px',
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      margin: '0 0 -28px',
      width: '100vw'
    }
  },
  aboutMe: {
    backgroundColor: '#dcf0f2',
    color: grey[800],
    fontFamily: 'Roboto',
    fontWeight: 300,
    padding: '30px 65px',
    marginTop: 40,
    width: '100vw'
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
    Photo by <a href="https://unsplash.com/@millolin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Millo Lin</a> on <a href="https://unsplash.com/s/photos/millo-lin-neon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


    </figcaption>
  </small>
</figure>
</div>

      <div className={classes.aboutMe}>
        <h3>About Me:</h3>
        <p>
          My professional life began in the arts. I have had the immense
          privilege of traveling around the US and overseas as a professional
          actor. Eventually I realized I was ready to move on and do...
          something else. It didn't take me long to find my next passion: web development/software engineering have since become my nearest and
          dearest obsession. I graduated from Flatiron School's
          bootcamp program in January, 2021. I am a fullstack developer however front end work is what excites me the most. Pretty much every day you can find me happily immersed in the expansion of my Javascript, React, Material UI and other front end skills.
          </p>
          <p>
          When I'm not coding madly I can be
          found on a hiking trail somewhere in upstate New York with my husband
          and the sweetest rescue dog you'll ever meet.<br></br>
        </p>
        <span>🍷🧁🍷🧁🍷🧁🍷🧁</span>
      </div>
    </div>
  )
}

export default About
