import React, { useRef } from 'react';

function Blogs({ blogsRef }) {

  

  return (
    <div ref={blogsRef}>
      <p>
      I am published in Medium's <a href="https://levelup.gitconnected.com/">Level Up Coding</a>, <a href="https://blog.usejournal.com/">Noteworthy</a>, <a href="https://medium.com/an-idea">An Idea</a> and <a href="https://medium.com/nerd-for-tech">Nerd For Tech's</a> publications. 
      </p>
    </div>
  );
}

export default Blogs;