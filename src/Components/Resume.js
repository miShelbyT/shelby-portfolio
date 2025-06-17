import React from 'react'
import resume from '../resources/resume.pdf'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10)
  }
  }))

function Resume() {

  const classes = useStyles()
  return (
    <div className={classes.root}><iframe
      src={resume}
      width="600"
      height="800"
      title="PDF Viewer"
    /></div>
  )
}

export default Resume