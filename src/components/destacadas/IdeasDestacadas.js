import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import {  Stepper, Step, StepLabel, StepConnector, CardActions, Button} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import { orange } from '@material-ui/core/colors';

import './IdeasDestacadas.css';

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

function getSteps() {
  return ['En Gestación', 'Destacada', 'Consolidada'];
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

export class IdeasDestacadas extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ideas: [] };
    this.activeStep=0;
    this.steps = getSteps();
    this.componentDidMount();
  }

  componentDidMount() {
    var path = "https://mysterious-refuge-36454.herokuapp.com/ideas/getDestacadas";
    
    fetch(path)
      .then(response => response.json())
      .then(data => {

        let ideaList = [];
          data.map((idea,i) => {
            if ( idea.fase ==="gestacion"){
              this.activeStep=0;
            }else if ( idea.fase ==="destacada"){
              this.activeStep=1;
            }else if( idea.fase ==="consolidada"){
              this.activeStep=2;
            }
            ideaList.push({
            "nombre":idea.nombre,
            "descripcion":idea.descripcion,
            "categoria":idea.categoria,
            "calificacion":idea.calificacion,
            "propietario":idea.propietario,
            "fase":idea.fase,
            "activeStep":this.activeStep,
            "id": idea.id
          })
        });
        this.setState({ ideas: ideaList });
      });
  }

  render() { 
    const ideasList = this.state.ideas.map((idea, i) => {
        
      return (
        <div>
          <Card className="root">

            <h3 className="ee"> {idea.nombre} </h3>
            
            <div className="colorr">
              <CardContent>

                <h4 className="propietario">Descripción</h4>
           
                <h4 className="comentarioo">
                  {idea.descripcion}
                </h4>

                <h4 className="categoria">
                  {idea.categoria}
                </h4>

                <h4 className="cali">
                  {idea.calificacion}
                  <StarRoundedIcon style={{ fontSize: 25 }} />
                </h4>  

                <Stepper alternativeLabel activeStep={idea.activeStep} connector={<ColorlibConnector />}>
                  {this.steps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                     </Step>
                  ))}
                </Stepper>

                <h4 className="propietario">
                  De: {idea.propietario}
                </h4>

                <CardActions>
                    <Button href={"/idea?id="+idea.id}>VER MÁS</Button>
                </CardActions>

              </CardContent>
            </div> 

          </Card><br/><br/><br/>      
        </div>

      );
    });


    return (
      <div>
        <EmojiEventsIcon style={{ color: orange[900],  fontSize: 60}} />
        <h4 className="titulo">
          IDEAS DESTACADAS
        </h4>
        <br/><br/> 
        {ideasList}
      </div>
    );

  }

}

export default IdeasDestacadas;