import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Button, FormControl,Input,InputLabel, Typography,
        Select, MenuItem, TextField, FormGroup, FormControlLabel,
        Checkbox, IconButton, Tooltip, Paper} from '@material-ui/core';

import NumberFormat from 'react-number-format';
import { green } from '@material-ui/core/colors';

import InfoIcon from '@material-ui/icons/Info';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import './Publish.css';

import { createMuiTheme, ThemeProvider,withStyles,makeStyles } from '@material-ui/core/styles';

import {BrowserRouter as Router} from 'react-router-dom';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import { orange } from '@material-ui/core/colors';

import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';
 
import PublishIcon from '@material-ui/icons/Publish';


  const classes = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const theme = createMuiTheme({
    typography: {
      
      h3: {
        fontSize: 40,
        fontFamily: 'Verdana',
        fontWeight: 600
      },
      h5: {
          marginTop: 20,
          fontStyle: 'normal'
          
      },
      body2: {
        textAlign: 'center',
        fontSize: 18

      }
    },
  });


  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  }
  

  
  


export class Publish extends React.Component{
    constructor(props) {
        super(props);
        this.state = { idea:{id:"",nombre:"",descripcion:"",fechaLimite:moment(this.props.start),
                            montoLimite:0,montoRecolectado:0,categoria:"",calificacion:0,adquisiciontemprana:false,
                            descuento:false,versionpremium:false,pequenasdonaciones:false,grandesinversiones:false,
                            expertospersonal:false,fechapublicacion:"",imagen:"",propietario:localStorage.getItem("username")},
                        expertos:{derecho: false, ingenieria: false, manufactura:false, economia:false}
                    } ;

                        
        
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleChangeCategoria = this.handleChangeCategoria.bind(this);
        this.handleChangeMonto = this.handleChangeMonto.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

        this.handleChangeDonaciones = this.handleChangeDonaciones.bind(this);
        this.handleChangeInversiones = this.handleChangeInversiones.bind(this);
        this.handleChangeExpertos = this.handleChangeExpertos.bind(this);

        

        this.handleChangeVersiónPremium = this.handleChangeVersiónPremium.bind(this);
        this.handleChangeDescuento = this.handleChangeDescuento.bind(this);
        this.handleChangeAdquisiciónTemprana = this.handleChangeAdquisiciónTemprana.bind(this);

        this.handleChangeDerecho = this.handleChangeDerecho.bind(this);
        this.handleChangeIngenieria = this.handleChangeIngenieria.bind(this);
        this.handleChangeManufactura = this.handleChangeManufactura.bind(this);
        this.handleChangeEconomia = this.handleChangeEconomia.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);  
        this.handleSubmitAreas = this.handleSubmitAreas.bind(this);  
    }

    handleName(e) {
        const newIdea = { ...this.state.idea, nombre : e.target.value };
        this.setState({ idea : newIdea });
    }

    handleDescription(e) {

        const newIdea = { ...this.state.idea, descripcion : e.target.value };
        this.setState({ idea : newIdea });
    }

    handleChangeCategoria(e){

        const newIdea = { ...this.state.idea, categoria : e.target.value };
        this.setState({ idea : newIdea });
    }

    handleChangeMonto(e){
        
        const newIdea = { ...this.state.idea, montoLimite : e.target.value };
        this.setState({ idea : newIdea });
    }

    handleDateChange(date) {

        const newIdea = { ...this.state.idea, fechaLimite : date };
        this.setState({ idea : newIdea });
    }

    handleChangeDonaciones(e){

        const newIdea = { ...this.state.idea, pequenasdonaciones : e.target.checked };
        this.setState({ idea : newIdea });
        
    }

    handleChangeInversiones(e){

        const newIdea = { ...this.state.idea, grandesinversiones : e.target.checked };
        this.setState({ idea : newIdea });
    }

    handleChangeExpertos(e){

        const newIdea = { ...this.state.idea, expertospersonal :e.target.checked };
        this.setState({ idea : newIdea });
    }


    handleChangeVersiónPremium(e){
        const newIdea = { ...this.state.idea, versionpremium : e.target.checked };
        this.setState({ idea : newIdea });
        
    }

    handleChangeDescuento(e){
        const newIdea = { ...this.state.idea, descuento : e.target.checked };
        this.setState({ idea : newIdea });
    }

    handleChangeAdquisiciónTemprana(e){
        const newIdea = { ...this.state.idea, adquisiciontemprana : e.target.checked };
        this.setState({ idea : newIdea });
    }

    handleChangeDerecho(e){
        const newIdea = { ...this.state.expertos, derecho : e.target.checked};
        this.setState({ expertos : newIdea });
        
    }

    handleChangeIngenieria(e){
        const newIdea = { ...this.state.expertos, ingenieria : e.target.checked };
        this.setState({ expertos : newIdea });
    }

    handleChangeManufactura(e){
        const newIdea = { ...this.state.expertos, manufactura : e.target.checked };
        this.setState({ expertos : newIdea });
    }

    handleChangeEconomia(e){
        const newIdea = { ...this.state.expertos, economia : e.target.checked };
        this.setState({ expertos : newIdea });
    }

    handleSubmit(e) {

        if (localStorage.getItem('logout') === 'si'){
            
            e.preventDefault();
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state.idea)
            };
            fetch('https://mysterious-refuge-36454.herokuapp.com/ideas', requestOptions)
                .then(response => response.json())
                .then(newIdea=>{
                    let experto;        
                    if (this.state.expertos.derecho){                  
                        experto = {"id":"","area":"Derecho y Leyes","idea":newIdea.id}
                        this.handleSubmitAreas(experto);
                    }
                    if (this.state.expertos.economia){
                        experto = {"id":"","area":"Economia y Finanzas","idea":newIdea.id}
                        this.handleSubmitAreas(experto);
                    }
                    if (this.state.expertos.ingenieria){
                        experto = {"id":"","area":"Ingeniería","idea":newIdea.id}
                        this.handleSubmitAreas(experto);   
                    }
                    if (this.state.expertos.manufactura){
                        experto = {"id":"","area":"Manufactura","idea":newIdea.id}
                        this.handleSubmitAreas(experto);
                    }


                    window.location.href = "/idea?id="+newIdea.id;
                })
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));;

            /*window.location.href = "/idea";*/
        }
        else {
            alert('Debe estar logueado para poder publicar')
        }
    }

    handleSubmitAreas(experto){
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(experto)
        };
        fetch('https://mysterious-refuge-36454.herokuapp.com/ideas/expertos', requestOptions)
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));;
    }


    render(){
        return (
            <Router>
                <PublishIcon style={{ color: orange[900],  fontSize: 60}} />
                <h4 className="titulo">
                    Publica tu idea/proyecto
                </h4><br/><br/><br/>
            <Paper className="paperPublish" elevation={20}>
                    <br/>
                    <form onSubmit={this.handleSubmit} className="form">
                            <Typography variant="h5" >Selecciona una categoría para clasificar tu proyecto:</Typography>
                            <FormControl  margin="dense" required fullWidth>                                                       
                                <InputLabel id="Categoria">Categoría</InputLabel>
                                <Select
                                    labelId="Categoria"
                                    id="Categoria"
                                    value={this.state.idea.categoria}
                                    onChange={this.handleChangeCategoria}
                                    >
                                    <MenuItem value={'Agro'}>Agro</MenuItem>
                                    <MenuItem value={'Cultura'}>Cultura</MenuItem>
                                    <MenuItem value={'Educación'}>Educación</MenuItem>
                                    <MenuItem value={'Entretenimiento'}>Entretenimiento</MenuItem>
                                    <MenuItem value={'Gastronomia'}>Gastronomia</MenuItem>
                                    <MenuItem value={'Moda'}>Moda</MenuItem>
                                    <MenuItem value={'Tecnología'}>Tecnología</MenuItem>
                                </Select><br/><br/><br/>
    
                
                            </FormControl>
                            <br/>
                            <Typography variant="h5">Dale un nombre para identificarla: </Typography>
                            <FormControl margin="dense" required fullWidth>
                            
                                <InputLabel htmlFor="nombre">Nombre</InputLabel>
                                    <Input
                                        name="nombre"
                                        id="nombre"
                                        onChange={this.handleName}
                                        selected={this.state.idea.nombre}
                                    />
                            </FormControl>
                            <br/><br/><br/><br/>
                            <Typography variant="h5">Descríbela:  </Typography>
                            <FormControl margin="dense" required fullWidth>
                                <InputLabel htmlFor="descripcion">Descripción</InputLabel>
                                    <Input
                                        name="descripcion"
                                        id="descripcion"
                                        onChange={this.handleDescription}
                                        selected={this.state.idea.descripcion}
                                    />
                            </FormControl><br/><br/><br/><br/>

                            <Typography variant="h5">¿Tienes alguna imagen o logo que represente tu idea? ¡Súbela!  </Typography>
                            <FormControl margin="dense" required fullWidth>
                                <div className={classes.root}>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        style={{display:'none'}}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                            Subir Imagen
                                        </Button>
                                    </label>
                                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" style={{display:'none'}}/>
                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </div>
                            </FormControl><br/><br/><br/>
                            
                            <FormControl component="fieldset" >
                            <Typography variant="h5">¿Qué estas buscando para tu proyecto?</Typography>
                               
                                <FormGroup>
                                <FormControlLabel
                                    control={<GreenCheckbox  checked={this.state.idea.pequenasdonaciones} onChange={this.handleChangeDonaciones} name="gilad" />}
                                    label={  
                                        <div>
                                            <Typography variant="body2" >
                                                Pequeñas Donaciones
                                                <Tooltip title="Recibe pequeñas donaciones de cualquier persona. Puedes definir incentivos para que más personas donen a tu proyecto"
                                                placement="right-start" arrow>  
                                                    <IconButton aria-label="info">
                                                        <InfoIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                            </Typography>
                                        </div>    
                                    }>
                                    
                                </FormControlLabel>
                               

                                <FormControlLabel
                                    control={<GreenCheckbox  checked={this.state.idea.grandesinversiones} onChange={this.handleChangeInversiones} name="jason" />}
                                    label={  
                                        <div>
                                            <Typography variant="body2" >
                                                Grandes Inversiones
                                                <Tooltip title="Recibe grandes donaciones de inversores. Estas serian recompensadas con un porcentaje de las ganancias que reciba tu proyecto en un futuro"
                                                placement="right-start" arrow>  
                                                    <IconButton aria-label="info">
                                                        <InfoIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                            </Typography>
                                        </div>    
                                    }
                                />
                                <FormControlLabel
                                    control={<GreenCheckbox  checked={this.state.idea.expertospersonal} onChange={this.handleChangeExpertos} name="antoine" />}
                                    label={  
                                        <div>
                                            <Typography variant="body2" >
                                                Expertos o Personal
                                                <Tooltip title="¿Te hace falta expertos o personal en ciertas areas que ayuden en tu proyecto? Estos pueden ser recompensados con una parte de las ganancias o bien podrias contratarlos como empleados cuando tu proyecto salga a la luz"
                                                        placement="right-start" arrow>  
                                                    <IconButton aria-label="info">
                                                        <InfoIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                            </Typography>
                                        </div>    
                                    }
                                />
                                </FormGroup>
                                
                            </FormControl>
                        
                        <div style={{display: this.state.idea.pequenasdonaciones? 'block' : 'none' }}>
                            <br/><br/><br/>
                            <Typography variant="h5">¿Qué incentivos le quieres dar a las personas que te donen? </Typography>
                            <FormControl  component="fieldset"> 
                                <FormGroup>
                                    <FormControlLabel
                                        control={<GreenCheckbox  checked={this.state.idea.versionpremium} onChange={this.handleChangeVersiónPremium} name="gilad" />}
                                        label={  
                                            <div>
                                                <Typography variant="body2" >
                                                    Versión Premium/Especial del Producto                                                
                                                </Typography>
                                            </div>    
                                        }>
                                        
                                    </FormControlLabel>           
                                    <FormControlLabel
                                        control={<GreenCheckbox  checked={this.state.idea.descuento} onChange={this.handleChangeDescuento} name="jason" />}
                                        label={  
                                            <div>
                                                <Typography variant="body2" >
                                                    Descuentos en el Producto o Servicio Final
                                                </Typography>
                                            </div>    
                                        }
                                    />
                                    <FormControlLabel
                                        control={<GreenCheckbox  checked={this.state.idea.adquisiciontemprana} onChange={this.handleChangeAdquisiciónTemprana} name="antoine" />}
                                        label={  
                                            <div>
                                                <Typography variant="body2" >
                                                    Adquisición Temprana del Producto                                        
                                                </Typography>
                                            </div>    
                                        }
                                    />
                                </FormGroup>                                                              
                            </FormControl>
                        </div> 
                        
                        <div style={{display: this.state.idea.expertospersonal ? 'block' : 'none' }}>
                            <br/><br/><br/>
                            <Typography variant="h5" >¿En que áreas necesitas expertos o personal?</Typography>
                                <FormControl  margin="dense" required fullWidth>                                                               
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={<GreenCheckbox  checked={this.state.expertos.derecho} onChange={this.handleChangeDerecho} name="gilad" />}
                                            label={  
                                                <div>
                                                    <Typography variant="body2" >
                                                        Derecho y Leyes                                               
                                                    </Typography>
                                                </div>    
                                            }>
                                            
                                        </FormControlLabel>           
                                        <FormControlLabel
                                            control={<GreenCheckbox  checked={this.state.expertos.economia} onChange={this.handleChangeEconomia} name="jason" />}
                                            label={  
                                                <div>
                                                    <Typography variant="body2" >
                                                        Economia y Finanzas
                                                    </Typography>
                                                </div>    
                                            }
                                        />
                                        <FormControlLabel
                                            control={<GreenCheckbox  checked={this.state.expertos.ingenieria} onChange={this.handleChangeIngenieria} name="antoine" />}
                                            label={  
                                                <div>
                                                    <Typography variant="body2" >
                                                        Ingeniería                                      
                                                    </Typography>
                                                </div>    
                                            }
                                        />
                                         <FormControlLabel
                                            control={<GreenCheckbox  checked={this.state.expertos.manufactura} onChange={this.handleChangeManufactura} name="antoine" />}
                                            label={  
                                                <div>
                                                    <Typography variant="body2" >
                                                        Manufactura                                 
                                                    </Typography>
                                                </div>    
                                            }
                                        />
                                    </FormGroup>                     
                                </FormControl>
                           
                        </div> 

                        <div style={{display: this.state.idea.pequenasdonaciones || this.state.idea.grandesinversiones ? 'block' : 'none' }}>
                            <br/><br/><br/>
                            <Typography variant="h5">Define un monto limite: </Typography>
                            <FormControl margin="dense" required fullWidth>
                            
                                <TextField
                                    label="Monto"
                                    value={this.state.idea.montoLimite}
                                    onChange={this.handleChangeMonto}
                                    name="numberformat"
                                    id="formatted-numberformat-input"
                                    InputProps={{
                                    inputComponent: NumberFormatCustom,
                                    }}
                                />
                            </FormControl>
                        </div><br/><br/><br/>

                            <Typography variant="h5">Define una fecha limite para reunir lo que necesitas:</Typography>
                            <FormControl margin="dense" required fullWidth>
                            
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            
                                    <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MMM dd yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Fecha"
                                            value={this.state.idea.fechaLimite}
                                            onChange={this.handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            />
                                </MuiPickersUtilsProvider>
                            </FormControl><br/><br/><br/>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            onClick={this.handleSubmit}
                            >
                            <FlightTakeoffIcon/>
                                HAZ VOLAR TU IDEA
                            </Button>
                    </form> 
            </Paper>      
        </Router>
        );
    }
}