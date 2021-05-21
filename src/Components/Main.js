import React from 'react'
import { makeStyles } from '@material-ui/core'
import Header from './Header'


const headerHeight = 115

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 73
    
  },
  page: {
    background: 'rgb(173, 181, 189)',
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

function Main({ children }){
  const classes = useStyles()

  

  return (
    <div className={classes.root}>
      <Header/>
      

      

      <div className={`${classes.page} ${classes.toolbar}`}>
        {/* gives us all the child components as wrapped in App.js */}
        {children}
        </div>
    </div>
  )
}

export default Main
