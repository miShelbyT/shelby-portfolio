import React from 'react';
import { makeStyles } from '@material-ui/core'

import youAreHere from '../images/you-are-here.jpg'

const initialDrawerWidth = 73
const headerHeight = 86

const useStyles = makeStyles((theme) => ({
  root: {
   width: `calc(100vw - ${initialDrawerWidth}px)`,
    height: `calc(100vh - ${headerHeight}px)`,
    marginTop: theme.spacing(12),
    overflowY: 'hidden',
    [theme.breakpoints.down('xs')]: {
      marginTop: '35%',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  image: {
    margin: 'auto auto -28px',
    maxWidth: '800px',
    display: 'inline',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      
    }
  },
  imgDiv: {
    width: '100vw',
    // height: '100%',
    // margin: 'auto',
    // paddingTop: 5,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      marginLeft: -30,
      width: '100vw',
    }
  },
  toolbar: theme.mixins.toolbar
}))

function Home(props) {

  const classes = useStyles()

  return (
    <div className={classes.root}>
  <h2 className={"greeting fadeOut"}>Welcome and thanks for stopping by!</h2>
<div className={classes.imgDiv}>
<figure>
  <img
    src={youAreHere}
    alt="neon sign you are here"
    className={`${classes.image} fade-in`}
  />
  <small>
    <figcaption className={'fade-in'}>
    Photo by <a href="https://unsplash.com/@jlondonbaker?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Baker</a> on <a href="https://unsplash.com/s/photos/you-are-here-sign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  


    </figcaption>
  </small>
</figure>
</div>
    </div>
  );
}

export default Home;