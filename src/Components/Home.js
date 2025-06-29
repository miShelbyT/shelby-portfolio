import React from 'react'
import { makeStyles } from '@material-ui/core'

import youAreHere from '../resources/you-are-here.jpg'

// const initialDrawerWidth = 73
const headerHeight = 86

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: `calc(100vh - ${headerHeight}px)`,
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingTop: theme.spacing(5),
  },
  greeting: {
    [theme.breakpoints.down('md')]: {
      marginTop: 20,
      marginLeft: theme.spacing(7),
      fontSize: 20,
    },
  },
  imgDiv: {
    background: `url(${youAreHere})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'contain',
    height: '600px',
    width: '85%',
    marginLeft: '100px',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
      height: '66%',
      width: '96%',
    },
  },
  toolbar: theme.mixins.toolbar,
}))

function Home(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className="slide-in-div">
        <h1 className={`greeting ${classes.greeting}`}>
          Welcome and thanks for stopping by!
        </h1>
      </div>

      <div className={`${classes.imgDiv} imgDiv`}>
        <small className={'fade-in caption'}>
          <figcaption>
            Photo by{' '}
            <a href="https://unsplash.com/@jlondonbaker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              John Baker
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/s/photos/you-are-here-sign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </figcaption>
        </small>
      </div>
    </div>
  )
}

export default Home
