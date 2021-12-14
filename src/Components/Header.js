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

import shelby from '../images/shelby.png'

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
    margin: theme.spacing(1),
    // [theme.breakpoints.down('xs')]: {
    //   // fontSize: 30,
    // }
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

function Header() {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false)
    }, 4000);
  }

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
            <img src={shelby} alt="named logo" style={{margin: 0, height: 80, width: 'auto'}}/>
          </Link>
            <Typography variant="h4" color="primary" noWrap className={classes.name}>
              Shelby Talbert - Full Stack Web Developer
            </Typography>

          <Link href="https://github.com/miShelbyT"
          >
            <Icon
              fontSize='large'
              className={`fab fa-github ${classes.icon}`}
              color="primary"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/shelby-talbert">
            <Icon
            fontSize='large'
              className={`fab fa-linkedin ${classes.icon}`}
              color="primary"
            />
          </Link>

          <Link href="https://mi-shelbyrose.medium.com/">
            <Icon
            fontSize='large'
              className={`fab fa-medium ${classes.icon}`}
              color="primary"
            />
          </Link>
        </Toolbar>
      </AppBar>
      <SideBar 
      open={open} 
      handleDrawerOpen={handleDrawerOpen}/>
    </div>
  )
}

export default Header
