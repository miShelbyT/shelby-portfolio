import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import ListSubheader from '@material-ui/core/ListSubheader'


const headerHeight = 86

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    paddingLeft: '8%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowX: 'hidden',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(6),
    },
  },
  blogList: {
    width: '80%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
  },
  blogBanner: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  subheader: {
    top: headerHeight,
    lineHeight: 1.5,
    background: 'rgba(51, 50, 50, 0.8)',
    color: '#e9ecef',
    fontSize: '1.5em',
  },
}))

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
      })
  }, [rss2json])


  return (
    <div className={classes.root}>

      <ImageList rowHeight={410} className={classes.blogList}>
        <ImageListItem
          key="Subheader"
          width="100%"
          cols={2}
          style={{ height: 'auto'}}
        >
          <ListSubheader className={`${classes.subheader} subheader`} component="div">
          My Blogs are Published in the following Medium publications:
          <br></br>
            <a href="https://medium.com/geekculture">
              Start Up/Geek Culture
            </a>,{' '}
            <a href="https://levelup.gitconnected.com/">Level Up Coding</a>,{' '}
            <a href="https://blog.usejournal.com/">Noteworthy</a>,{' '}
            <a href="https://medium.com/an-idea">An Idea</a> and{' '}
            <a href="https://medium.com/nerd-for-tech">Nerd For Tech</a>{' '}
          </ListSubheader>
        </ImageListItem>
        {myBlogs.map((blog) => (
          <ImageListItem key={blog.pubDate} cols={1}>
            <img src={blog.thumbnail} alt={blog.title} />
            <ImageListItemBar
              className={classes.blogBanner}
              position="top"
              title={
                <a href={blog.link} style={{ fontSize: '1.3em' }}>
                  {blog.title}
                </a>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}

export default Blogs
