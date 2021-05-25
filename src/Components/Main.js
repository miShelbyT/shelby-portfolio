import React from 'react'
import { makeStyles } from '@material-ui/core'
import Header from './Header'


const initialDrawerWidth = 71
const headerHeight = 86

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
    // gives us 24 pixels padding - base theme is 8px
    padding: theme.spacing(3),
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  toolbar: theme.mixins.toolbar
}))

function Main({ children }){
  const classes = useStyles()

  return (
    <>
      <Header/>

      <div className={`${classes.page} ${classes.toolbar}`}>
        {/* gives us all the child components as wrapped in App.js */}
        {children}
        </div>
    </>
  )
}

export default Main
