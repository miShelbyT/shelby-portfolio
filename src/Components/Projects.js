import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'


import cupcakes from '../images/brelbys.png'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 570,
    minHeight: 500,
    marginLeft: '10%',
    marginTop: 20,
    padding: 12,
    backgroundColor: 'rgb(220, 235, 250)',
  },
  media: {
    width: 550,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

function Projects({ projectsRef }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const nonDemoProjects = [{
    id: 1,
    image: cupcakes,
    title: "Brelby's Wine & Cupcakes",
    subheader: "A wine and cupcakes app... you're welcome, world!",
    link: "https://mishelbyt.github.io/brelbys-sass/practice-project/dist/",
    buttonText: "Brelby's as Deployed Via Github Pages",
    moreText: "Responsively designed, based on a SASS tutorial from CodeStackr. This app is lovingly adapted from a Flatiron School project created with my wonderful friend Bryn Knowles. Brelby's lives on!"
  }]

  const demoProjects = [{
    id: 100,
    src: "https://www.youtube.com/embed/Fhb1zT1z-WQ",
    title: "Take Care",
    subheader: "A journaling app that focuses on self-care/mental health",
    moreText: "Take Care is a self-care journaling app that allows the user to sign up/log in, create a profile, peruse a list of self-care activities, save, update and delete journal entries pertaining to those activities as well as create original activities. Also uses an external API to generate daily affirmations via a \"roulette\" affirmation button."
  }, 
  { id: 101,
    src: "https://www.youtube.com/embed/U-3CXBiqes4",
    title: "Third Eye Tarot",
    subheader: "A tarot card app that invites playfulness and introspection",
    moreText: "Tarot Card App that encourages curiosity and insight into past, current and future life events. Third Eye Tarot allows the user to sign up/log in, \"consult the cards\" with a question, deal themselves a reading of between 1 and 5 tarot cards, record their comments/reflections on each reading and then save/review, update and delete card readings."
  },
  { id: 102,
    src: "https://www.youtube.com/embed/uolpe_CaOec",
    title: "Pet Dates",
    subheader: "A pet scheduling app",
    moreText: "Because pets need friends too! This pet-date scheduler app is currently being used by dogs, cats, a gecko and a stuffed raccoon."
  }
]

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Container maxWidth="lg" ref={projectsRef}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {nonDemoProjects.map(project => (
        
        <Grid item 
        key={project.id}
        sm={12} lg={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={project.image}
              title={project.title}
            />

            <CardHeader
              title={project.title}
              subheader={project.subheader}
            />
            <Link
              href={project.link}
              underline="none"
            >
              <Button variant="outlined" color="secondary">
                {project.buttonText}
              </Button>
            </Link>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography align="justify">
                  {project.moreText}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        ))}

        {demoProjects.map(project => (<Grid item sm={12} lg={6}>
          <Card className={classes.root}>
            <div>
              <iframe
                width="550"
                height="315"
                src={project.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <CardHeader
              title={project.title}
              subheader={project.subheader}
            />

            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography align="justify">
                {project.moreText}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        ))}

      </Grid>
    </Container>
  )
}

export default Projects
