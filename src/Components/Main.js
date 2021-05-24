import React from 'react'
import { makeStyles } from '@material-ui/core'
import Header from './Header'


const headerHeight = 115

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 72,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
    
  },
  page: {
    background: 'rgb(206, 212, 218)',
    width: '100vw',
    overflowY: 'hidden',
    // gives us 24 pixels padding - base theme is 8px
    padding: theme.spacing(3),
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // image: {
  //   margin: `${headerHeight}px auto -28px`,
  //   width: '85vw'
  // },
  
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
