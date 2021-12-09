import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ProjectCard from './ProjectCard'
import brelbys from '../images/updated-brelbys.gif'
import ttt from '../images/ttt.gif'
// import petDates from '../images/pet-dates.gif'
import petDates2 from '../images/petDates.gif'
import tarot from '../images/3-eye-t.gif'
import takeCare from '../images/take-care.gif'

const initialDrawerWidth = 71

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(14),
    marginRight: theme.spacing(3),
    paddingLeft: `calc(${initialDrawerWidth}px + ${theme.spacing(0)}px)`,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(7),
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '55px'
    }
  }
}))



function Projects({ projectsRef }) {
  
const classes = useStyles()

  const projects = [{
    id: 1,
      image: takeCare,
      title: "Take Care",
      subheader: "A journaling app that focuses on self-care/mental health",
      link: "https://youtu.be/Fhb1zT1z-WQ",
      buttonText: "Take Care Demo",
      moreText: "React capstoneproject: Take Care is a self-care journaling app that allows the user to sign up/log in, create a profile, peruse a list of self-care activities, save, update and delete journal entries pertaining to those activities as well as create original activities. Also uses an external API to generate daily affirmations via a \"roulette\" affirmation button."
    }, 
    { id: 2,
      image: tarot,
      title: "Third Eye Tarot",
      subheader: "A tarot card app that invites playfulness and introspection",
      link: "https://youtu.be/U-3CXBiqes4",
      buttonText: "Third Eye Tarot Demo",
      moreText: "React project: Tarot Card App that encourages curiosity and insight into past, current and future life events. Third Eye Tarot allows the user to sign up/log in, \"consult the cards\" with a question, deal themselves a reading of between 1 and 5 tarot cards, record their comments/reflections on each reading and then save/review, update and delete card readings."
    },
    { id: 3,
      image: petDates2,
      title: "Pet Dates",
      subheader: "Because pets need friends too!",
      link: "https://youtu.be/uolpe_CaOec",
      buttonText: "Pet Dates Demo",
      moreText: "Vanilla JS app: Recently refactored to all OOP with loads of new functionality added. This pet-date scheduler is currently being used by dogs, cats, a gecko and a stuffed raccoon."
    },
    
    {id: 4,
    image: brelbys,
    title: "Brelby's Wine & Cupcakes",
    subheader: "A wine and cupcakes app... you're welcome, world!",
    link: "https://mishelbyt.github.io/brelbys-sass/practice-project/dist/",
    buttonText: "Brelby's as Deployed Via Github Pages",
    moreText: "Vanillla JS with SASS (riffed off of a SASS tutorial from CodeStackr). This app is lovingly adapted from a Flatiron School project created with my wonderful friend Bryn Knowles. Brelby's lives!"
  },
  {
    id: 5,
    image: ttt,
    title: "Tic Tac Toe Game",
    subheader: "Are you Team Gem or Team Cupcake?",
    link: "https://gem-tictactoe.netlify.app/",
    buttonText: "Tic Tac Toe as deployed Via Netlify",
    moreText: "Riffed off of a React tutorial for a basic tic tac toe game, I've added features including scorekeeping, game control and window.alerts. Submitted to Mintbean as first ever hackathon, first game build, first deployment."
  }
]

  

  return (
    <div ref={projectsRef} className={classes.root}>
      <Grid
        container
        spacing={4}
        direction="row"
        justifyContent="center"
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
