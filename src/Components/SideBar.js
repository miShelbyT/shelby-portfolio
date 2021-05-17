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

import Avatar from '@material-ui/core/Avatar'

const drawerWidth = 195

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerLinks: {
    margin: '27px 18px'
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
  teal: {
    backgroundColor: 'rgba(0, 150, 135, 0.8)',
    margin: 20
  },
  blue: {
    backgroundColor: 'rgba(3, 169, 244, 0.8)',
    margin: 20
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
          <div className={'options'}>
            <Avatar className={classes.blue} variant='rounded'>A</Avatar>
            <Link href="/about" underline='none'>
            <Typography className={classes.drawerLinks}>About</Typography>
            </Link>
          </div>

          <div className={'options'}>
            <Avatar className={classes.teal}>P</Avatar>
            <Link href="/projects" underline='none'>
            <Typography className={classes.drawerLinks}>Projects</Typography>
            </Link>
          </div>

          <div className={'options'}>
            <Avatar className={classes.blue} variant='rounded'>B</Avatar>
            <Link href="/blogs" underline='none'>
            <Typography className={classes.drawerLinks}>Blogs</Typography>
            </Link>
          </div>

          <div className={'options'}>
            <Avatar className={classes.teal}>C</Avatar>
            <Link href="/contact" underline='none'>
            <Typography className={classes.drawerLinks}>Contact</Typography>
            </Link>
          </div>

        </div>
        <Divider />
      </Drawer>
    </div>
  )
}

export default SideBar
