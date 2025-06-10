import React from 'react'
import resume from '../resources/resume.pdf'

function Resume() {
  return (
    <div><iframe
      src={resume}
      width="600"
      height="800"
      title="PDF Viewer"
    /></div>
  )
}

export default Resume