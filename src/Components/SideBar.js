import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerLinks: {
    lineHeight: 5
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
}))

function SideBar({ handleDrawerClose, open }) {
  const classes = useStyles()
  const theme = useTheme()

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
        <div style={{ marginTop: 30 }}>
        <Typography className={classes.drawerLinks}>About</Typography>
        <Typography className={classes.drawerLinks}>Projects</Typography>
        <Typography className={classes.drawerLinks}>Blogs</Typography>
        <Typography className={classes.drawerLinks}>Contact</Typography>

          {/* <Link href="/about" underline='none'>
            <Typography className={classes.drawerLinks}>About</Typography>
          </Link>
          <Link href="/projects" underline='none'>
            <Typography className={classes.drawerLinks}>Projects</Typography>
          </Link>
          <Link href="/blogs" underline='none'>
            <Typography className={classes.drawerLinks}>Blogs</Typography>
          </Link>
          <Link href="/contact" underline='none'>
            <Typography className={classes.drawerLinks}>Contact</Typography>
          </Link> */}
        </div>
        <Divider />
      </Drawer>
    </div>
  )
}

export default SideBar
