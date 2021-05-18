import React, { useRef } from 'react';

function Contact({ contactRef }) {

  

  return (
    <div ref={contactRef}>
      <h1>Contact Me</h1>
    </div>
  );
}

export default Contact;