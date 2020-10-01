import React from 'react';

import './Publish.css';
import './Idea.css';

import {Paper,Typography,LinearProgress,Grid,Divider,CardMedia,
    Accordion,AccordionSummary,AccordionDetails, GridList,GridListTile,
    Stepper, Step, StepLabel, StepConnector } from '@material-ui/core';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CommentIcon from '@material-ui/icons/Comment';
import EditIcon from '@material-ui/icons/Edit';

import { createMuiTheme, ThemeProvider,withStyles ,makeStyles} from '@material-ui/core/styles';


import { format } from 'date-fns';

import TabPanelInteractuar from './Interactuar/TabPanelInteractuar';
import TabPanelInteracHechas from './Interactuar/TabPanelInteracHechas';

import img from "./img/PLACEHOLDERTHUMBNAIL.jpg";


function getSteps() {
    return ['Fase 1', 'Fase 2', 'Fase 3'];
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
      1: <CommentIcon />,
      2: <AttachMoneyIcon />,
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
    
      width: 500,
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

  function startItems() {
     
    const name=localStorage.getItem("Nombre");
    const categ=localStorage.getItem("Categoria");
    const desc=localStorage.getItem("Descripción");
    var money=localStorage.getItem("Monto");
    const date=localStorage.getItem("Fecha");
    const user=localStorage.getItem("User");
    var moneyDonated=localStorage.getItem("MontoDonado");
    if (name===null || name ===""){
        localStorage.setItem("Nombre","Nombre de idea de prueba");
    }
    if (categ===null || categ===""){
        localStorage.setItem("Categoria","Categoria");
    }
    if (desc===null || desc===""){
        localStorage.setItem("Descripción","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.");
    }
    if (money===null || money===""){
        localStorage.setItem("Monto",100000);
        var money=100000;
    }
    if (date===null || date===""){
        localStorage.setItem("Fecha",format(new Date(),"MMM dd yyyy"));
    }
    if (user===null || user===""){
        localStorage.setItem("User","UsuarioDePrueba");
    }
    if (moneyDonated===null || moneyDonated===""){
        if (money===null || money===""){
            localStorage.setItem("MontoDonado",50000);
        }else {
            moneyDonated=money/2;
            localStorage.setItem("MontoDonado",money/2);
        }
        
    }
    porcentaje= (100/money)*moneyDonated;
    
  }


export class Idea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {expertos:[{id:1,area:"Ingeniería",idea:1},{id:2,area:"Manufactura",idea:1}
                                ,{id:3,area:"Derecho y Leyes",idea:1},
                                {id:4,area:"Economia y Finanzas",idea:1}]};
        this.activeStep=1;
        this.steps = getSteps();
    }

    render() {

        startItems();
        
        return (
          <div>
            <Paper className="paperIdea" elevation={10}>
                <ThemeProvider theme={theme}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                        
                                <Typography gutterBottom variant="h3">
                                
                                {localStorage.getItem("Nombre")} 
                                </Typography>
                                
                                
                        
                        </Grid>
                        <Grid item >
                            <Typography gutterBottom variant="h6">
                             
                                {localStorage.getItem("Categoria")}
                                <br/>
                                
                                Editar
                                <EditIcon/>
                                
                            </Typography>
                        </Grid>
                    </Grid>
                    
                   

                    <Typography gutterBottom variant="h5">
                            
                            de  {localStorage.getItem("User")}
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
                            {localStorage.getItem("Descripción")} <br/>
                    </Typography>

                    <Divider variant="middle" />

                    <br/>
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
                    <br/>
                    <Typography variant="body2" gutterBottom>
                        Recaudado ${localStorage.getItem("MontoDonado")} de  ${localStorage.getItem("Monto")} ({porcentaje}%)
                    <br/>
                    
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={porcentaje} />
                    <Typography variant="body2" gutterBottom>
                        Aporta antes de {localStorage.getItem("Fecha")} <br/>
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