/* eslint-disable no-unused-vars */
import React from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  AppBar,
  Toolbar,
  List,
  Drawer,
  Divider,
  IconButton,
  Badge,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  ShoppingCart,
  Menu,
  ChevronLeft,
  Notifications,
  Visibility,
  People,
  BarChart,
  Layers,
  Dashboard,
  Group
} from '@material-ui/icons'
import Logo from 'assets/logoPng.png'
import history from 'services/history'
import useAuth from 'hooks/useAuth'
import { useAuthStore } from 'store'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  }
}))

export default function NavBar() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const { handleLogout } = useAuth()
  const user = useAuthStore((state) => state.user)
  const test = useAuthStore((state) => state.test)
  const setTest = useAuthStore((state) => state.setTeste)

  console.log('nav', user)
  console.log('test', test)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <Menu />
          </IconButton>
          <span onClick={setTest}>click teste</span>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            onClick={handleLogout}
            className={classes.title}
          >
            Logout
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            onClick={handleLogout}
            className={classes.title}
          >
            {user?.username}
          </Typography>

          {/* <IconButton color="inherit">
            <Badge badgeContent={1} color="secondary">
              <Notifications />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <img src={Logo} />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
    </>
  )
}

export const mainListItems = (
  <div>
    <ListItem
      button
      onClick={() => {
        history.push('/')
      }}
    >
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem
      button
      onClick={() => {
        history.push('/geral')
      }}
    >
      <ListItemIcon>
        <Visibility />
      </ListItemIcon>
      <ListItemText primary="Visão geral" />
    </ListItem>
    <ListItem
      button
      onClick={() => {
        history.push('/operadores')
      }}
    >
      <ListItemIcon>
        <Group />
      </ListItemIcon>
      <ListItemText primary="Operadores" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChart />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Layers />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
  </div>
)
