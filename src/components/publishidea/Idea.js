import React from 'react';

import './Publish.css';
import './Idea.css';

import {Paper,Typography,LinearProgress,Grid,Divider,CardMedia,
    Accordion,AccordionSummary,AccordionDetails, GridList,GridListTile,
    Stepper, Step, StepLabel, StepConnector, IconButton  } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import EditIcon from '@material-ui/icons/Edit';
import StarIcon from '@material-ui/icons/Star';

import { createMuiTheme, ThemeProvider,withStyles ,makeStyles} from '@material-ui/core/styles';



import {format, parseISO} from "date-fns";
import TabPanelInteractuar from './Interactuar/TabPanelInteractuar';
import TabPanelInteracHechas from './Interactuar/VerPrevias/TabPanelInteracHechas';

import img from "./img/PLACEHOLDERTHUMBNAIL.jpg";


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

const classes = makeStyles((theme) => ({
    root: {
      display: 'contents',
      
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
    
      width: 1000,
      height: 100,
    }
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

const theme = createMuiTheme({
    typography: {
      
        h3: {
            fontSize: 30,
            fontFamily: 'Verdana',
            fontWeight: 600,
            textAlign: 'left'
      },
      h5: {
          fontStyle: 'italic'
      },
      body2: {
        textAlign: 'center',
        fontSize: 20

      }
    },
  });

  var porcentaje=0;


  function getQueryVariable(variable)
  {
        var query = window.location.search.substring(1);
        console.log(query)
        var vars = query.split("&");
        console.log(vars) 
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    console.log(pair)
        if(pair[0] == variable){return pair[1];}
         }
         return(false);
  }




export class Idea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {idea:{id:"",nombre:"",descripcion:"",fechaLimite:"",montoLimite:"",
                    montoRecolectado:0,"categoria":"",calificacion:0,adquisiciontemprana:false,
                    descuento:true,versionpremium:false,pequenasdonaciones:true,grandesinversiones:false,
                    expertospersonal:false,imagen:"",fechapublicacion:"",propietario:"",fase:""}
                      ,expertos:[]};
        this.activeStep=0;
        this.steps = getSteps();
        this.startItems();
        this.startAreas();
    }

    startItems() {
   
      const id = getQueryVariable('id');
      var path = "http://mysterious-refuge-36454.herokuapp.com/ideas/"+id;
  
      fetch(path)
        .then(response => response.json())
        .then(newidea => {
          const ChangeIdea = {id: newidea.id ,nombre: newidea.nombre,descripcion:newidea.descripcion,
                              fechaLimite:newidea.fechaLimite,montoLimite:newidea.montoLimite,
                              montoRecolectado:newidea.montoRecolectado,categoria:newidea.categoria,
                              calificacion:newidea.calificacion ,adquisiciontemprana:newidea.adquisiciontemprana ,
                              descuento:newidea.descuento ,versionpremium:newidea.versionpremium ,
                              pequenasdonaciones:newidea.pequenasdonaciones ,grandesinversiones:newidea.grandesinversiones ,
                              expertospersonal:newidea.expertospersonal ,imagen:newidea.imagen ,fechapublicacion:newidea.fechapublicacion ,
                              propietario:newidea.propietario ,fase: newidea.fase };
          if ( newidea.fase ==="gestacion"){
            this.activeStep=0;
          }else if ( newidea.fase ==="destacada"){
            this.activeStep=1;
          }else if( newidea.fase ==="consolidada"){
            this.activeStep=2;
          }
          this.setState({ idea : ChangeIdea });
          porcentaje= (100/newidea.montoLimite)*newidea.montoRecolectado;
        }).catch(error => console.error('Error:', error));;
    }

    startAreas(){
      const id = getQueryVariable('id');
      var path = "http://mysterious-refuge-36454.herokuapp.com/ideas/"+id+"/expertos";
  
      fetch(path)
        .then(response => response.json())
        .then(nuevosexpertos => {
          let expertosList = [];
          nuevosexpertos.map((experto) => {
            expertosList.push({
                id: experto.id,
                area: experto.area,
                idea: experto.idea
              })
          });
          this.setState({ expertos : expertosList });
      })
      .catch(error => console.error('Error:', error));

    }

    render() {

        
        return (
          <div >
            <Paper className="paperIdea" elevation={10}>
                <ThemeProvider theme={theme}>
                    <Grid container alignItems="center">
                        <Grid item xs>        
                            <Typography gutterBottom variant="h3">
                                  {this.state.idea.nombre} 
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography gutterBottom variant="h6">
                             
                                {this.state.idea.categoria}
                                
                                <br/>
                                {this.state.idea.calificacion==0?"(Sin calificaciones)":this.state.idea.calificacion.toFixed(1)}
                                <StarIcon  style={{ color: yellow[500] }} />
                                
                                <br/>
                                Editar
                                <IconButton href={"/editar?id="+this.state.idea.id} >
                                  <EditIcon/>
                                </IconButton>
                                
                            </Typography>
                        </Grid>
                    </Grid>
                    
                   

                    <Typography gutterBottom variant="h5">
                            
                            de  {this.state.idea.propietario}
                    </Typography>

                    <Stepper alternativeLabel activeStep={this.activeStep} connector={<ColorlibConnector />}>
                    {this.steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>

                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="280"
                        image={img}
                        title="img"
                        />

                    <br/>

                    <Typography variant="body1" gutterBottom>
                            {this.state.idea.descripcion} <br/>
                    </Typography>

                    <Divider variant="middle" />

                    <br/>
                    <div style={{display: this.state.idea.expertospersonal ? 'block' : 'none' }}>
                      <Accordion>
                          <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                          >
                      
                      <Typography variant="body2" gutterBottom >Áreas en las que se busca expertos y/o personal </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <Typography>
                              <GridList className={classes.gridList} cols={3} >
                                  {this.state.expertos.map((experto)=>(
                                  <GridListTile key={experto.id}  style={{ height: 'auto' }}>

                                      <Typography variant="body1" gutterBottom>
                                          {experto.area}
                                      </Typography>
                                    
                                  </GridListTile> 
                                  ))}
                              </GridList>

                              </Typography>
                          </AccordionDetails>
                      </Accordion>
                    </div>
                    <br/>
                    <div style={{display: this.state.idea.pequenasdonaciones || this.state.idea.grandesinversiones ? 'block' : 'none' }}>
                        <Typography variant="body2" gutterBottom>
                            Recaudado ${this.state.idea.montoRecolectado} de  ${this.state.idea.montoLimite} ({porcentaje.toFixed(2)}%)
                        <br/>
                        
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={porcentaje} />
                        </div> 
                        <Typography variant="body2" gutterBottom>
                            Aporta antes de {moment(this.state.idea.fechaLimite).format('MMM DD YYYY')} <br/>
                          <br/>
                    
                         </Typography>
                                  
                </ThemeProvider>
            </Paper><br/>

            <Paper className="paperIdea" elevation={10}>
                <h1 > Interactúa con el Proyecto </h1>
              <TabPanelInteractuar/>
            </Paper><br/>

            <Paper className="paperIdea" elevation={10}>
                <h1 className="blue"> Interacciones </h1>
              <TabPanelInteracHechas/>
            </Paper>
          </div>
        );
    }

    
}