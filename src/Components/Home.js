import React from 'react';
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import youAreHere from '../images/you-are-here.jpg'

const initialDrawerWidth = 73
const headerHeight = 86

const useStyles = makeStyles((theme) => ({
  root: {
   width: `calc(100vw - ${initialDrawerWidth}px)`,
    height: `calc(100vh - ${headerHeight}px)`,
    margin: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }, greeting: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      fontSize: 25,
    }
  },
  // image: {
  //   // margin: "0 0 -28px 50px",
  //   maxWidth: '800px',
  //   display: 'inline',
  //   [theme.breakpoints.down('sm')]: {
  //     width: '125%',
  //   }
  // },
  imgDiv: {
    width: '100vw',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
      height: '66%',
      width: '96%'
    }
  },
  toolbar: theme.mixins.toolbar
}))

function Home(props) {

  const classes = useStyles()

  return (
    <div className={classes.root}>
  <Typography variant="h3" className={`greeting slideIn ${classes.greeting}`}>Welcome and thanks for stopping by!</Typography>
<div className={`${classes.imgDiv} imgDiv`}>
<figure>
  {/* <img
    src={youAreHere}
    alt="neon sign you are here"
    className={`${classes.image} fade-in`}
  /> */}
  <small>
    <figcaption className={'fade-in caption'}>
    Photo by <a href="https://unsplash.com/@jlondonbaker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Baker</a> on <a href="https://unsplash.com/s/photos/you-are-here-sign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  


    </figcaption>
  </small>
</figure>
</div>
    </div>
  );
}

export default Home;