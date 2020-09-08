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
import { Filters } from './components/FiltersComponent/Filters';



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

    const stubPages = [[{ name: "idea 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" }
], [{ name: "idea 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" }
], [{ name: "idea 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" }
], [{ name: "idea 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 8", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 7", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" }
], [{ name: "idea 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" },
{ name: "idea 9", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis urna sit amet tortor pulvinar rhoncus at ut odio. Donec risus augue, scelerisque molestie vehicula a, interdum a tellus. Sed dapibus ac dui sed congue. Mauris auctor, turpis vitae sagittis sodales, risus libero hendrerit mi, id tempor urna libero vitae ante.", image: "PLACEHOLDERTHUMBNAIL.jpg" }
]];

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [currentLoginView,setCurrentLoginView] = React.useState("Login");
    const [loadedItems,setLoadedItems] = React.useState(stubPages);

    //---------------------------------------------------------------------------------------
    // SERVICE ACCESS
    //---------------------------------------------------------------------------------------

    //gets filter component state and calls search methods accordingly
    const getSelectedFilters = (selectedFilters) =>{
        console.log(selectedFilters);
    }

    const searchByTitle = (title) =>{
        return (<h1>IN CONSTRUCTION</h1>); //crear servicios en backend -> debe mapear a un arreglo en json de la forma [[<conjunto de ideas1>],[<conjunto de ideas2>],...,[<conjunto de ideas n>]].
        //Cada idea debe ir de la forma name: <nombre>, description: <desc>, image:<ruta imagen>}
    }

    const searchByInvestmentRange = (lowRange, highRange) =>{
        return (<h1>IN CONSTRUCTION</h1>); //crear servicios en backend -> debe mapear a un arreglo en json de la forma [[<conjunto de ideas1>],[<conjunto de ideas2>],...,[<conjunto de ideas n>]].
        //Cada idea debe ir de la forma name: <nombre>, description: <desc>, image:<ruta imagen>}
    }

    const searchByInvestor=(investorName) =>{
        return (<h1>IN CONSTRUCTION</h1>); //crear servicios en backend -> debe mapear a un arreglo en json de la forma [[<conjunto de ideas1>],[<conjunto de ideas2>],...,[<conjunto de ideas n>]].
        //Cada idea debe ir de la forma name: <nombre>, description: <desc>, image:<ruta imagen>}
    }

    const searchByArea = (area)=> {
        return (<h1>IN CONSTRUCTION</h1>);//crear servicios en backend -> debe mapear a un arreglo en json de la forma [[<conjunto de ideas1>],[<conjunto de ideas2>],...,[<conjunto de ideas n>]].
        //Cada idea debe ir de la forma name: <nombre>, description: <desc>, image:<ruta imagen>} 
    }

    //---------------------------------------------------------------------------------------
    // HANDLERS
    //---------------------------------------------------------------------------------------

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //---------------------------------------------------------------------------------------
    // VIEWS
    //---------------------------------------------------------------------------------------

    const LoginView = () => (
        <div>
            <Login/>
            <Button className="sing"
                onClick={()=>{setCurrentLoginView("SignIn")}}>
                Registrarse
            </Button>
        </div>
    );

    const SignInView = () => (
        <div>
            <SignIn/>
            <Button className="sing"
                onClick={()=>{setCurrentLoginView("Login")}}>
                Inscribirse
            </Button>
        </div>
    );
    
    const PublishView = () => (
        <Publish/>
    );

    const ExploreView = () => (
        <Explore pages={loadedItems}/>
    );

    const IdeaView = () => (
        <Idea/>
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
                                <a href="/"><img src={logo} class="logo" className="logoo"/></a>
                            </div>
                        </header>

                        <header className="App-header-c">
                            <div>
                                <Typography variant="h2"class="center" className="withe">HeadHunter</Typography>
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
                        <Divider /><Divider />

                        <Button className="blue" href="/idea" variant="contained" color="primary" fullWidth>
                            <ListItemIcon >
                                <FormatListNumberedRoundedIcon />
                            </ListItemIcon>
                               Idea
                        </Button>

                        <Button className="blue" href="/explore" variant="contained" color="primary" fullWidth>
                            <ListItemIcon >
                                <FormatListNumberedRoundedIcon />
                            </ListItemIcon>
                                Explorar
                        </Button>


                        <Button   className="blue" href="/publish" variant="contained" color="primary" fullWidth>
                            <ListItemIcon >
                                <FormatListNumberedRoundedIcon />
                            </ListItemIcon>
                                Publicar
                        </Button>

                        <Filters getSelectedFilters={getSelectedFilters}/>

                    </List>
                </Drawer>

                <main
                    className={clsx(classes.content, {
                    [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <div className="grid-container">               

                        
                        <div className="login"> {
                            currentLoginView =="Login" ?
                            LoginView():
                            SignInView()
                        }
                            
                        </div>
                        
                        
                        <div className="main">
                            <Route path="/publish" component={PublishView} />
                            <Route path="/explore" component={ExploreView} />
                            <Route path="/idea" component={IdeaView} />
                        </div>
                    </div>
                      
                </main>
            </div>
        </Router>
    );
}