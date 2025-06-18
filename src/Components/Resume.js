import React from 'react'
import resume from '../resources/resume.pdf'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }
  }))

function Resume() {

  const classes = useStyles()
  return (
    <div className={classes.root}>
      
      <a class="download-button" href={resume} download>
    📄 Download Resume (PDF) To Preserve Hyperlinks
  </a>
      <iframe
      src={resume}
      width="600"
      height="800"
      title="PDF Viewer"
    /></div>
  )
}

export default Resume