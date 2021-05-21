import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import SideBar from './SideBar'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Icon from '@material-ui/core/Icon'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import shelby from '../images/shelby-logo.png'

const drawerWidth = 190

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
  icon: {
    margin: theme.spacing(1),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }
}))

function Header({ aboutRef, projectsRef, contactRef, blogsRef }) {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className="header">
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.root}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon color='secondary' fontSize='large'/>
          </IconButton>
          <Link href="/">
            <img src={shelby} alt="circular named logo" style={{margin: 'auto', marginBottom: 'auto', height: 60, width: 'auto', borderRadius: '100%'}}/>
          </Link>
            <Typography variant="h5" color="secondary" noWrap style={{flexGrow: 1, fontStyle: 'italic'}}>
              SRT Full Stack Web Development
            </Typography>

          <Link href="https://github.com/miShelbyT">
            <Icon
              className={`fab fa-github ${classes.icon}`}
              color="secondary"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/shelby-talbert">
            <Icon
              className={`fab fa-linkedin ${classes.icon}`}
              color="secondary"
            />
          </Link>

          <Link href="https://mi-shelbyrose.medium.com/">
            <Icon
              className={`fab fa-medium ${classes.icon}`}
              color="secondary"
            />
          </Link>
        </Toolbar>
      </AppBar>
      <SideBar handleDrawerClose={handleDrawerClose} open={open} aboutRef={aboutRef} projectsRef={projectsRef} blogsRef={blogsRef} contactRef={contactRef} />
    </div>
  )
}

export default Header
