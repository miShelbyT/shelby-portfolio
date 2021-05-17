import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'

import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import Avatar from '@material-ui/core/Avatar'

const drawerWidth = 190

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerNames: {
    margin: '38px 17px',
  },
  drawerOpen: {
    backgroundColor: '#bdbdbd',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: '#bdbdbd',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  avaTeal: {
    backgroundColor: 'rgba(0, 150, 135, 0.8)',
    margin: '30px 15px',
  },
  avaBlue: {
    backgroundColor: 'rgba(3, 169, 244, 0.8)',
    margin: '30px 15px',
  },
}))

function SideBar({ handleDrawerClose, open }) {
  const classes = useStyles()
  const theme = useTheme()

  const sideBarItems = [
    {
      text: 'About',
      avatar: (
        <Avatar className={classes.avaBlue} variant="rounded">
          A
        </Avatar>
      ),
      path: '/about',
    },
    {
      text: 'Projects',
      avatar: <Avatar className={classes.avaTeal}>P</Avatar>,
      path: '/projects',
    },
    {
      text: 'Blogs',
      avatar: (
        <Avatar className={classes.avaBlue} variant="rounded">
          B
        </Avatar>
      ),
      path: '/blogs',
    },
    {
      text: 'Contact',
      avatar: <Avatar className={classes.avaTeal}>C</Avatar>,
      path: '/contact',
    },
  ]

  return (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <List>
          {sideBarItems.map(sideBarItem => (
            <ListItem key={sideBarItem.text}>
              <ListItemAvatar>
                {sideBarItem.avatar}
              </ListItemAvatar>
              <ListItemText primary={sideBarItem.text} />
              <Divider />
            </ListItem>
          ) 
          )}
        </List>
      </Drawer>
    </div>
  )
}

export default SideBar
