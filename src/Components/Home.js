import React from 'react';
import { makeStyles } from '@material-ui/core'

import youAreHere from '../images/you-are-here.jpg'

const headerHeight = 115

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
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
  // quoteDiv: {
  //   width: '100vw',
  //   background: 'rgb(92, 77, 125)',
  //   padding: 35,
  //   margin: '75px 0'
  // },
  // quote: {
  //   marginRight: 50,
  //   marginLeft: 50,
  //   fontFamily: 'Roboto',
  //   fontWeight: 300,
  //   color: 'rgb(221, 238, 238)'
  // },
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

    {/* <div className={classes.quoteDiv}>
        <h4 className={classes.quote}>
          <span style={{fontStyle: 'italic'}}>
            "I am just a child who has never grown up. I still keep asking these
            'how' and 'why' questions. Occasionally, I find an answer."
          </span>
          <br></br>
          Stephen Hawking
        </h4>
      </div> */}
    </div>
  );
}

export default Home;