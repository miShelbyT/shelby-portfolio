import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'


import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'

// import IconButton from '@material-ui/core/IconButton'

// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import Avatar from '@material-ui/core/Avatar'

const drawerWidth = 160
const headerHeight = 86

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerNames: {
    margin: '38px 17px',
  },
  drawerOpen: {
    backgroundColor: 'rgb(233, 236, 239)',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(8) + 1
    }
  },
  drawerClose: {
    backgroundColor: 'rgb(233, 236, 239)',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    [theme.breakpoints.down('xs')]: {
      width: 0
    }
  },
  avaPurple: {
    color: '#fff',
    backgroundColor: 'rgb(92, 77, 125)',
    margin: '15px 0',
  },
  avaBlue: {
    color: '#000',
    backgroundColor: '#5ec8e8',
    margin: '15px 0',
  },
  list: {
    marginTop: `${headerHeight}px`
  },
  active: {
    backgroundColor: 'rgb(206, 212, 218)'
  },
  // chevron: {
  //   [theme.breakpoints.up('md')]: {
  //     display: 'none',
  //   },
  // }
}))

function SideBar({ handleDrawerClose, open, handleDrawerOpen }) {
  const classes = useStyles()
  // const theme = useTheme()
  const history = useHistory()
  const location = useLocation()

  const sideBarItems = [
    {
      id: 1,
      text: 'Projects',
      avatar: <Avatar className={classes.avaPurple}>P</Avatar>,
      path: '/projects'
    },
    {
      id: 2,
      text: 'Blogs',
      avatar: (
        <Avatar className={classes.avaBlue} variant="rounded">
          B
        </Avatar>
      ),
      path: '/blogs'
    },
    {
      id: 3,
      text: 'About',
      avatar: (
        <Avatar className={classes.avaPurple} variant="rounded">
          A
        </Avatar>
      ),
      path: '/about'
    },
    {
      id: 4,
      text: 'Contact',
      avatar: <Avatar className={classes.avaBlue}>C</Avatar>,
      path: '/contact'
    },
  ]


  return (
    <div>
      <Drawer
      onMouseOver={handleDrawerOpen} 
      // onMouseOut={handleDrawerClose}
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
        {/* <div className={`${classes.toolbar} ${classes.chevron}`}>
          <IconButton 
          onClick={handleDrawerClose}
          >
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon color="primary"/>
            ) : (
              <ChevronLeftIcon color="primary" className={classes.chevron}/>
            )}
          </IconButton>
        </div> */}
        <List className={classes.list}>
       
          {sideBarItems.map(sideBarItem => (
            <>
            <ListItem 
            key={sideBarItem.id}
            button
            onClick={()=> history.push(sideBarItem.path)}
            className={location.pathname === sideBarItem.path ? classes.active : null}
            >
              <ListItemAvatar>
                {sideBarItem.avatar}
              </ListItemAvatar>
              <ListItemText primary={sideBarItem.text} />
            </ListItem>
           
              </>
          ) 
          )}
        </List>
      </Drawer>
    </div>
  )
}

export default SideBar
