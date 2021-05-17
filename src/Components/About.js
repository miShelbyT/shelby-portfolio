import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '15%',
    color: 'rgb(48, 47, 47)',
    background: 'antiquewhite',
    overflowY: 'hidden',
  }

})

function About() {
  const classes = useStyles()
  return (
    <div id='about'>
      <h3>About Me:</h3>
      <p>
        My professional life began in the arts. I have had the immense privilege
        of traveling around the US and overseas as a professional actor.
        Eventually I realized I was ready to move on and do... something else.
        It didn't take me long to find my next passion: web development/software
        engineering have since become my nearest and dearest obsession. I
        graduated from Flatiron School's immersive bootcamp program in January, 2021. When I'm not madly coding I can be found on a hiking trail somewhere in upstate New York with my husband and the sweetest rescue dog you'll ever meet.<br></br>
      </p>
      <span>🍷🧁🍷🧁🍷🧁🍷🧁</span>
      
    </div>
  )
}

export default About
