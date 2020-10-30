import React from 'react';
import {Paper,AppBar ,Tabs, Tab ,Typography ,Box, Card,
        CardContent, CardActions, Button , Grid,
        Stepper, Step, StepLabel, StepConnector, LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './Perfil.css';

import StarIcon from '@material-ui/icons/Star';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';

import { yellow } from '@material-ui/core/colors';
import clsx from 'clsx';

import InteractionListByUser from './InteractionListByUser'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { orange } from '@material-ui/core/colors';

function getSteps() {
    return ['En Gestación', 'Destacada', 'Consolidada'];
  }

const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
  });
  
function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
      1: <ChildFriendlyIcon />,
      2: <ImportantDevicesIcon />,
      3: <CheckCircleIcon />,
    };
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    completed: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
  })(StepConnector);



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const classes = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 10,
      height: 10
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);


export class Perfil extends React.Component {

    constructor(props) {
      super(props);
      this.state = { ideas: [{id:"8",nombre:"Una Idea",descripcion:"Descripcion de una idea",
                                montoLimite:100000,montoRecolectado:200,categoria:"Tecnología",calificacion:4.0,
                                fechapublicacion:"",imagen:"",propietario:"", fase:"Destacada",
                                pequenasdonaciones: true ,grandesinversiones:true , activeStep:1,
                                porcentaje: (100/100000)*200},
                             {id:"9",nombre:"Una Idea",descripcion:"Descripcion de una idea",
                                montoLimite:100000,montoRecolectado:40000,categoria:"Tecnología",calificacion:3.0,
                                fechapublicacion:"", fase:"Consolidada",imagen:"",propietario:"",
                                pequenasdonaciones: true ,grandesinversiones:true , activeStep:2,
                                porcentaje: (100/100000)*40000}
                            ] 
                    ,interacciones:[{"id":6,"tipo":"comentario","monto":0,"comentario":"we",
                                    "calificacion":4.0,"idea":1,"usuario":"diego.com"},
                                    {"id":1,"tipo":"donacion","monto":10000,"comentario":"Me gusta la idea",
                                    "calificacion":5,"idea":1,"usuario":"diego.com"},
                                    {"id":48,"tipo":"inversion","monto":500000,"comentario":"test 5",
                                    "calificacion":3,"idea":1,"usuario":"diego.com"}],
                    value:0};

        this.startIdeas();
        this.starInteracciones();

        this.steps = getSteps();                            
        this.handleChange = this.handleChange.bind(this);  
    }

    startIdeas(){
            /*
                FETCH PARA GET-IDEAS-POR-USUARIO
            */ 

    }


    starInteracciones(){

        var path = "https://mysterious-refuge-36454.herokuapp.com/interaccion/byUser/" + localStorage.getItem('username');

        let interactionList = [];

        fetch(path)
          .then(response => response.json())
          .then(data => {

            data.map((interaction) => {

              var ideaNombre = "";

              fetch("https://mysterious-refuge-36454.herokuapp.com/ideas/"+interaction.idea)
              .then(response => response.json())
              .then(data => {
                ideaNombre = data.nombre;

                interactionList.push({
                  "comentario": interaction.comentario,
                  "ideaNombre": ideaNombre,
                  "calificacion": interaction.calificacion,
                  "monto": interaction.monto,
                  "tipo": interaction.tipo,
                  "usuario": interaction.usuario,
                  "interaccionId": interaction.id
                });
              });
            });
            this.setState({ interacciones : interactionList}) 
          });

    }

    handleChange (event, newValue){
        event.preventDefault();
        this.setState({ value : newValue });
      };

    render() { 
 
        return (
          <div className="paperPerfil">

            <div className="center">
              <AccountCircleIcon style={{ color: orange[900],  fontSize: 60}} />
              <h4 className="titulo">
                MI PERFIL
              </h4>
            </div><br/>
               
                <AppBar position="static">
                    <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example" variant="fullWidth">
                        <Tab label="Mis Proyectos" {...a11yProps(0)} />
                        <Tab label="Mis interacciones" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.value} index={0}>
                    {this.state.ideas.map((idea)=>(
                        <Card className={classes.root}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    <Grid container alignItems="center">
                                        <Grid item xs>        
                                            {idea.nombre}
                                        </Grid>
                                        <Grid item >
                                                {idea.calificacion==0?"(Sin calificaciones)":idea.calificacion.toFixed(1)}
                                                    <StarIcon  style={{ color: yellow[500] }} />

                                        </Grid>
                                    </Grid>
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {idea.categoria}
                                </Typography>
                                <Stepper alternativeLabel activeStep={idea.activeStep} connector={<ColorlibConnector />}>
                                    {this.steps.map((label) => (
                                        <Step key={label}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>

                                <div style={{display: idea.pequenasdonaciones || idea.grandesinversiones ? 'block' : 'none' }}>
                                    <Typography variant="body2" gutterBottom>
                                        Recaudado ${idea.montoRecolectado} de  ${idea.montoLimite} ({idea.porcentaje.toFixed(2)}%)
                                        <br/>
                        
                                     </Typography>
                                    <BorderLinearProgress variant="determinate" value={idea.porcentaje} />
                                </div> 

                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" href={"/idea?id="+idea.id}>
                                    Ver Más 
                                </Button>
                            </CardActions>
                        </div>
                        
                      </Card>
                    )
                    )}
                </TabPanel>

                <div style={{display: (localStorage.getItem('username') != "" ) ? 'block' : 'none' }}>
                  <TabPanel value={this.state.value} index={1}>
                    <InteractionListByUser interactionList={this.state.interacciones}/>
                  </TabPanel>
                </div>

                <div style={{display: (localStorage.getItem('username') == "" ) ? 'block' : 'none' }}>
                <TabPanel value={this.state.value} index={1}>
                  Inicie sesion para ver sus interacciones
                  </TabPanel>
                </div>
              
          </div>
  
        );
    };
  
  
    
  
  }
  