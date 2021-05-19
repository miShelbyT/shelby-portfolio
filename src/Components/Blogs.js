import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function Blogs({ blogsRef }) {
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
    <div ref={blogsRef} className={classes.root}>
      <GridList cellHeight={310} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Published in Medium's{' '}
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
              title={blog.title}
              // subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`read at ${blog.link}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

export default Blogs
