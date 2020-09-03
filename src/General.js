import React from 'react';
import { Login } from './components/Login';
import { SignIn } from './components/SignIn';
import { Publish } from './publishidea/Publish';
import { Idea } from './publishidea/Idea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './img/Logoo.png';
import './General.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Explore } from './components/ExploreComponent/Explore';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const LoginView = () => (
        <Login/>
    );

    const SignInView = () => (
        <SignIn/>
    );
    
    const PublishView = () => (
        <Publish/>
    );

    const ExploreView = () => (
        <Explore/>
    );

    return (
        <Router>
            <div className={classes.root}>
            <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Menú
                        </Typography>

                        <header className="App-header">
                            <div>
                                <img src={logo} class="logo" className="logoo"/>
                            </div>
                        </header>

                        <header className="App-header-c">
                            <div>
                                <Typography variant="h2"class="center">HeadHunter</Typography>
                            </div>
                        </header>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    </div>

                    <Divider /><Divider />

                    <List>

                    <       Button className="blue">
                            <ListItemIcon >
                                <FormatListNumberedRoundedIcon />
                            </ListItemIcon>
                                <Link class="link" to="/explore">Explorar</Link>
                            </Button>

                            <br></br>

                            <Button className="blue">
                            <ListItemIcon >
                                <FormatListNumberedRoundedIcon />
                            </ListItemIcon>
                                <Link class="link" to="/publish">Publicar</Link>
                            </Button>
                    </List>
                </Drawer>

                <main
                    className={clsx(classes.content, {
                    [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <div className="grid-container">               

                        
                            <div className="login">
                                <Route exact path="/" component={LoginView} />
                                <Route path="/SignIn" component={SignInView} />
                            </div>
                        
                        
                        <div className="main">
                            <Route path="/publish" component={PublishView} />
                            <Route path="/explore" component={ExploreView} />
                        </div>
                    </div>
                      
                </main>
            </div>
        </Router>
    );
}