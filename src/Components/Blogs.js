import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '8%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: '80%',
    height: 1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  subheader: {
    backgroundColor: 'rgb(52, 58, 64)',
    color: 'rgb(345, 200, 200)'
  }
}));

function Blogs() {
  const classes = useStyles()

  const rss2json =
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmi-shelbyrose.medium.com%2Ffeed'
  const [myBlogs, setMyBlogs] = useState([])


  useEffect(() => {
    fetch(rss2json)
      .then((r) => r.json())
      .then((blogs) => {
        setMyBlogs(blogs.items)
        console.log(blogs.items)
      })
  }, [rss2json])

  return (
    <div className={classes.root}>
      <GridList cellHeight={310} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader className={classes.subheader} component="div">My Blogs are Published in Medium's{' '}
        <a href="https://levelup.gitconnected.com/">Level Up Coding</a>,{' '}
        <a href="https://blog.usejournal.com/">Noteworthy</a>,{' '}
        <a href="https://medium.com/an-idea">An Idea</a> and{' '}
        <a href="https://medium.com/nerd-for-tech">Nerd For Tech's</a>{' '}
        publications.</ListSubheader>
        </GridListTile>
        {myBlogs.map((blog) => (
          <GridListTile key={blog.pubDate}>
            <img src={blog.thumbnail} alt={blog.title} />
            <GridListTileBar
              titlePosition="top"
              title={<a href={blog.link}>{blog.title}</a>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default Blogs
