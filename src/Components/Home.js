import React from 'react';
import { makeStyles } from '@material-ui/core'

const headerHeight = 115

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 73
    
  },
  page: {
    background: '#f9f9f9',
    width: '100%',
    // gives us 24 pixels padding - base theme is 8px
    padding: theme.spacing(3),
  },
  image: {
    margin: `${headerHeight}px auto -28px`,
    width: '75vw'
  },
  quoteDiv: {
    width: '100vw',
    background: 'rgb(92, 77, 125)',
    padding: 35,
    margin: '75px 0'
  },
  quote: {
    fontFamily: 'Roboto',
    fontWeight: 300,
    color: 'rgb(221, 238, 238)'
  },
  toolbar: theme.mixins.toolbar
}))

function Home(props) {

  const classes = useStyles()
  
  return (
    <div className={classes.quoteDiv}>
        <h4 className={classes.quote}>
          <span style={{fontStyle: 'italic'}}>
            "I am just a child who has never grown up. I still keep asking these
            'how' and 'why' questions. Occasionally, I find an answer."
          </span>
          <br></br>
          Stephen Hawking
        </h4>
      </div>
  );
}

export default Home;