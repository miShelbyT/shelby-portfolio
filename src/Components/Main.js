import React from 'react'
import { makeStyles } from '@material-ui/core'
import Header from './Header'



const useStyles = makeStyles((theme) => ({
  page: {
    height: '100%',
    background: 'rgb(206, 212, 218)',
    // gives us 24 pixels padding - base theme is 8px
    // padding: theme.spacing(3),
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
