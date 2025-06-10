import React from 'react'
import { Typography } from '@material-ui/core'
import ProjectCard from './ProjectCard'

import brelbys from '../resources/updated-brelbys.gif'
import ttt from '../resources/ttt.gif'
import petDates2 from '../resources/petDates.gif'
import takeCare from '../resources/take-care.gif'
import welcome from '../resources/welcome-to-nyc.png'
import kitties from '../resources/just-the-cat-facts.png'
import world from '../resources/world.png'
import travelSite from '../resources/travel-site.png'
import inventory_mgmt from '../resources/inventory_mgmt.png'

function Projects() {
  const projects = [
    {
      id: 1,
      image: inventory_mgmt,
      title: 'Inventory Management',
      subheader: 'WGU Capstone Project',
      link: 'https://github.com/miShelbyT/web-app-frontend',
      buttonText: 'Github codebase (front-end)',
      moreText:
        'Full stack application provides dual permission functionality (general user and manager) for a boutique company to manage CRUD operations on product inventory. (General user can only read, filter and run reports.) Front end code base is React with Context API. Back end is Spring Boot with several packages to handle session management and meet security standards. Spring Boot application is containerized and deployed on AWS. Deploy link available upon request.',
    },
    {
      id: 2,
      image: travelSite,
      title: 'Visit Taniti',
      subheader: 'WGU UX Design School Project: Prototype',
      link: 'https://mishelbyt.github.io/visit_taniti/index.html',
      buttonText: 'Deployed Site',
      moreText:
        'Multi-page prototype/website for the fictional island of Taniti. Main goals, along with creating an engaging/attractive design, are positional awareness and usability.',
    },
    {
      id: 3,
      image: world,
      title: 'The Whole World',
      subheader: 'WGU Angular School Project',
      link: 'https://the-whole-world.netlify.app/',
      buttonText: 'Deployed Site',
      moreText:
        'Angular application that displays an svg world map and provides information (as pulled from the WorldBank API) for each country on hover.',
    },
    {
      id: 4,
      image: welcome,
      title: 'Welcome to New York',
      subheader: 'WGU Web Dev School Project - Easy Breezy!',
      link: 'https://new-york-state.netlify.app/',
      buttonText: 'Deployed Site',
      moreText:
        'Simple multi-page static application that displays information for several cities in New York State.',
    },
    {
      id: 5,
      image: kitties,
      title: 'Just The Cat Facts',
      subheader: 'A cute little application to lift your mood via cats.',
      link: 'https://just-the-cat-facts.netlify.app/',
      buttonText: 'Deployed Site',
      moreText:
        'I created this to inspire my students/show what they could do with code in as little as an hour or two! Application uses two APIs to display cat facts and images.',
    },
    {
      id: 6,
      image: takeCare,
      title: 'Take Care',
      subheader: 'A journaling app that focuses on self-care/mental health',
      link: 'https://youtu.be/Fhb1zT1z-WQ',
      buttonText: 'Demo (on YouTube)',
      moreText:
        'Flatiron School capstone project (uses React and Rails): Take Care is a self-care journaling app that allows the user to sign up/log in, create a profile, peruse a list of self-care activities, save, update and delete journal entries pertaining to those activities as well as create original activities. Also uses an external API to generate daily affirmations via a "roulette" affirmation button.',
    },
    {
      id: 7,
      image: petDates2,
      title: 'Pet Dates',
      subheader: 'Because pets need friends too!',
      link: 'https://youtu.be/uolpe_CaOec',
      buttonText: 'Demo (on YouTube)',
      moreText:
        'Full stack project (uses Vanilla JS and Rails): Recently refactored to all OOP with loads of new functionality added. This pet-date scheduler is currently being used by dogs, cats, a gecko and a stuffed raccoon.',
    },

    {
      id: 8,
      image: brelbys,
      title: "Brelby's Wine & Cupcakes",
      subheader: "A wine and cupcakes app... you're welcome, world!",
      link: 'https://mishelbyt.github.io/brelbys-sass/practice-project/dist/',
      buttonText: 'Deployed Site',
      moreText:
        "Vanilla JS with SASS (riffed off of a SASS tutorial from CodeStackr). This app is lovingly adapted from a Flatiron School project created with my wonderful friend Bryn Knowles. Brelby's lives!",
    },
    {
      id: 9,
      image: ttt,
      title: 'Tic Tac Toe Game',
      subheader: 'Are you Team Gem or Team Cupcake?',
      link: 'https://gem-tictactoe.netlify.app/',
      buttonText: 'Deployed Site',
      moreText:
        "Riffed off of a React tutorial for a basic tic tac toe game, I've added features including scorekeeping, game control and window.alerts. Submitted to Mintbean as first ever hackathon, first game build, first deployment.",
    },
  ]

  return (
    <div style={{ marginTop: '60px', marginBottom: '0' }}>
      <div>
        <Typography variant="h5" className="project-header">
          Select and Hold a Project to View Additional Details
        </Typography>
      </div>
      <div className="project-div">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
