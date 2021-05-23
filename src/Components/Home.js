import React from 'react';
import { makeStyles } from '@material-ui/core'

import youAreHere from '../images/you-are-here.jpg'

const headerHeight = 115

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '80vh',
    marginTop: theme.spacing(12),
    overflowY: 'hidden',
    [theme.breakpoints.down('xs')]: {
      marginTop: '20%'
    }
  },
  image: {
    margin: 'auto auto -28px',
    maxHeight: '500px',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '95%'
    }
  },
  
  toolbar: theme.mixins.toolbar
}))

function Home(props) {

  const classes = useStyles()

  return (
    <div className={classes.root}>
<div>

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