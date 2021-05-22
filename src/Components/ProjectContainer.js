import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ProjectCard from './ProjectCard'
import cupcakes from '../images/brelbys.png'
import ttt from '../images/ttt.png'

const headerHeight = 115


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(14),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
  }
}))



function Projects({ projectsRef }) {
  
const classes = useStyles()

  const projects = [{
    // no demo for these projects
    id: 1,
    image: cupcakes,
    title: "Brelby's Wine & Cupcakes",
    subheader: "A wine and cupcakes app... you're welcome, world!",
    link: "https://mishelbyt.github.io/brelbys-sass/practice-project/dist/",
    buttonText: "Brelby's as Deployed Via Github Pages",
    moreText: "Responsively designed, based on a SASS tutorial from CodeStackr. This app is lovingly adapted from a Flatiron School project created with my wonderful friend Bryn Knowles. Brelby's lives on!"
  },
  {
    id: 2,
    image: ttt,
    title: "Tic Tac Toe Game",
    subheader: "Are you team Gem or Team Cupcake?",
    link: "https://gem-tictactoe.netlify.app/",
    buttonText: "Tic Tac Toe as deployed Via Netlify",
    moreText: "Riffed off of a React tutorial for a basic tic tac toe game, I've added features including scorekeeping, game control and window.alerts. Submitted to Mintbean as first ever hackathon, first game build, first deployment."
  },
  // demos for these projects
  {id: 3,
    youTubeSrc: "https://www.youtube.com/embed/Fhb1zT1z-WQ",
    title: "Take Care",
    subheader: "A journaling app that focuses on self-care/mental health",
    moreText: "Take Care is a self-care journaling app that allows the user to sign up/log in, create a profile, peruse a list of self-care activities, save, update and delete journal entries pertaining to those activities as well as create original activities. Also uses an external API to generate daily affirmations via a \"roulette\" affirmation button."
  }, 
  { id: 4,
    youTubeSrc: "https://www.youtube.com/embed/U-3CXBiqes4",
    title: "Third Eye Tarot",
    subheader: "A tarot card app that invites playfulness and introspection",
    moreText: "Tarot Card App that encourages curiosity and insight into past, current and future life events. Third Eye Tarot allows the user to sign up/log in, \"consult the cards\" with a question, deal themselves a reading of between 1 and 5 tarot cards, record their comments/reflections on each reading and then save/review, update and delete card readings."
  },
  { id: 5,
    youTubeSrc: "https://www.youtube.com/embed/uolpe_CaOec",
    title: "Pet Dates",
    subheader: "A pet scheduling app",
    moreText: "Because pets need friends too! This pet-date scheduler app is currently being used by dogs, cats, a gecko and a stuffed raccoon."
  }
]

  

  return (
    <div ref={projectsRef} className={classes.root}>
      <Grid
        container
        spacing={5}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {projects.map(project => (
        <ProjectCard key={project.id} project={project}/>
        ))}

      </Grid>
    </div>
  )
}

export default Projects
