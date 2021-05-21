import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    width: 520,
    minHeight: 500,
    marginLeft: '10%',
    marginTop: 20,
    padding: 12,
    backgroundColor: '#dcf0f2',
    [theme.breakpoints.down('sm')]: {
      width: 235,
      marginLeft: '2%',
    },
  },
  media: {
    width: 500,
    paddingTop: '56.25%', // 16:9
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      height: 'auto',
      marginLeft: '2%',
    }
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
  moreText: {
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
    paddingTop: theme.spacing(0),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(0),
      marginLeft: theme.spacing(0),

    }
  }
}))

function ProjectCard({ project }) {

  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }


  return (
    <Grid item 
        key={project.id}
        sm={12} lg={6}>
          <Card className={classes.root}>
            {project.youTubeSrc ? ( <div>
              <iframe
                width="500"
                height="315"
                src={project.youTubeSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>) : (<CardMedia
              className={classes.media}
              image={project.image}
              title={project.title}
            />)}

            <CardHeader
              title={project.title}
              subheader={project.subheader}
            />
            {project.link? (<Link
              href={project.link}
              underline="none"
            >
              <Button variant="contained" color="primary">
                {project.buttonText}
              </Button>
            </Link>) : null}

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
              <CardContent  className={classes.moreText}>
                <Typography align="justify">
                {project.moreText}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
  );
}

export default ProjectCard;