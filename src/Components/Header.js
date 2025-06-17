import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Icon from '@material-ui/core/Icon'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import shelby from '../resources/shelby.png'

const drawerWidth = 160
const smDrawerWidth = 65

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: theme.spacing(3),
    width: '100vw'
  },
  name: {
    flexGrow: 1,
    // marginLeft: 'auto',
    fontStyle: 'italic',
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: 22
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }, icon: {
    margin: '0 8px',
    '&:hover': {
      color: '#333232',
      transform: 'scale(1.2)'
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // to be used for small breakpoint
    [theme.breakpoints.down('xs')]: {
      width: `calc(100% - ${smDrawerWidth}px)`,
    }
  },
  menuButton: {
    marginRight: '3%'
  },
  hide: {
    display: 'none',
  },
  hideMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 0)
    }
  }
}))

function Header({handleDrawerOpen, open}) {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={1}
        color='secondary'
        className={clsx(classes.appBar, {
          // [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.root}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={`${clsx(classes.menuButton, {
              [classes.hide]: open,
            })} ${classes.hideMenu}`}
          >
            <MenuIcon color='primary' fontSize='large'/>
          </IconButton>
          <Link href="/">
            <img src={shelby} alt="logo: shelby t, hello world!" className="shelby-logo"/>
          </Link>
            <Typography variant="h4" component="h1" color="primary" noWrap className={classes.name}>
              Shelby Talbert: SWE / Full-Stack Web Dev
            </Typography>

          <Link href="https://github.com/miShelbyT">
            <Icon
              fontSize='large'
              className={`fab fa-github ${classes.icon}`}
              color="primary"
            />
            <span class="off-screen" aria-hidden="true">Github</span>
          </Link>

          <Link href="https://www.linkedin.com/in/shelby-talbert">
            <Icon
            fontSize='large'
              className={`fab fa-linkedin ${classes.icon}`}
              color="primary"
            />
            <span class="off-screen" aria-hidden="true">LinkedIn</span>
          </Link>

          <Link href="https://mi-shelbyrose.medium.com/">
            <Icon
            fontSize='large'
              className={`fab fa-medium ${classes.icon}`}
              color="primary"
            />
            <span class="off-screen" aria-hidden="true">Medium</span>
          </Link>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Header
