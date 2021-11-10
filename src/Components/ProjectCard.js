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
    width: 450,
    paddingTop: 10,
    // minHeight: 470,
    // marginLeft: '10%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#dcf0f2',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 15,
      width: 265,
      minHeight: 395
    },
  },
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // padding: '10px 20px 10px 0px',
    [theme.breakpoints.down('md')]: {
      color: theme.palette.primary.main,
    },

  },
  media: {
    borderRadius: 5,
    width: '95%',
    // width: "500px",
    height: "410px",
    paddingTop: '56.25%', // 16:9
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      height: 'auto'
    }
  },
  iframe: {
    width: "470px",
    height: "315px",
    [theme.breakpoints.down('sm')]: {
      width: "520px",
    height: "315px",
    },
    [theme.breakpoints.down('xs')]: {
      width: "220px",
      height: "225px"
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
      fontSize: 12,
      margin: theme.spacing(0)
    }
  },
  btn: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 9,
      width: 150
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
        sm={12} md={6} xl={4}>
          <Card className={classes.root}>
            {project.youTubeSrc ? ( <div>
              <iframe
                className={classes.iframe}
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
              className={classes.header}
              title={project.title}
              subheader={project.subheader}
            />
            {project.link? (<Link
              href={project.link}
              underline="none"
            >
              <Button variant="contained" color="primary" className={classes.btn}>
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
              <CardContent>
                <Typography align="justify" className={classes.moreText}>
                {project.moreText}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
  );
}

export default ProjectCard;