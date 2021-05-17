import React from 'react'
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

function Projects() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item sm={12} lg={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={cupcakes}
              title="Brelbys Wine/Cupcakes"
            />

            <CardHeader
              title="Brelby's Wine & Cupcakes"
              subheader="A wine and cupcakes app... you're welcome, world!"
            />
            <Link
              href="https://mishelbyt.github.io/brelbys-sass/practice-project/dist/"
              underline="none"
            >
              <Button variant="outlined" color="primary">
                Brelby's as Deployed Via Github Pages
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
                  Responsively designed utilizing SASS, based on a CodeStackr
                  tutorial. Lovingly adapted from a Flatiron project created
                  with Bryn Knowles. Brelby's lives on!
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item sm={12} lg={6}>
          <Card className={classes.root}>
            <div>
              <iframe
                width="550"
                height="315"
                src="https://www.youtube.com/embed/Fhb1zT1z-WQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <CardHeader
              title="Take Care"
              subheader="A journaling app that focuses on self-care/mental health"
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
                  Take Care is a self-care journaling app that allows the user
                  to sign up/log in, create a profile, peruse a list of
                  self-care activities, save, update and delete journal entries
                  pertaining to those activities as well as create original
                  activities. Also uses an external API to generate daily
                  affirmations via a "roulette" affirmation button.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item sm={12} lg={6}>
          <Card className={classes.root}>
            <div>
              <iframe
                width="550"
                height="315"
                src="https://www.youtube.com/embed/U-3CXBiqes4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <CardHeader
              title="Third Eye Tarot"
              subheader="A tarot card app that invites playfulness and introspection"
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
                  Tarot Card App that encourages curiosity and insight into
                  past, current and future life events. Third Eye Tarot allows
                  the user to sign up/log in, "consult the cards" with a
                  question, deal themselves a reading of between 1 and 5 tarot
                  cards, record their comments/reflections on each reading and
                  then save/review, update and delete card readings.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item sm={12} lg={6}>
          <Card className={classes.root}>
            <div>
              <iframe
                width="550"
                height="315"
                src="https://www.youtube.com/embed/uolpe_CaOec"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <CardHeader title="Pet Dates" subheader="A pet scheduling app" />

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
                  Because pets need friends too! This pet-date scheduler app is
                  currently being used by dogs, cats, a gecko and a stuffed
                  raccoon.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Projects
