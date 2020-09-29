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

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';
 


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
        this.state = { nombre: "", descripcion: "", categoria: "", monto: 0
                    , fecha: moment(this.props.start)
                    , donaciones: false, inversiones:false, expertos: false,
                        areas: "",
                        VersiónPremium: false, Descuento:false,  AdquisiciónTemprana:false,
                        derecho: false, ingenieria: false, manufactura:false, economia:false} ;
        
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleChangeCategoria = this.handleChangeCategoria.bind(this);
        this.handleChangeMonto = this.handleChangeMonto.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

        this.handleChangeDonaciones = this.handleChangeDonaciones.bind(this);
        this.handleChangeInversiones = this.handleChangeInversiones.bind(this);
        this.handleChangeExpertos = this.handleChangeExpertos.bind(this);

        this.handleChangeAreas = this.handleChangeAreas.bind(this);

        this.handleChangeVersiónPremium = this.handleChangeVersiónPremium.bind(this);
        this.handleChangeDescuento = this.handleChangeDescuento.bind(this);
        this.handleChangeAdquisiciónTemprana = this.handleChangeAdquisiciónTemprana.bind(this);

        this.handleChangeDerecho = this.handleChangeDerecho.bind(this);
        this.handleChangeIngenieria = this.handleChangeIngenieria.bind(this);
        this.handleChangeManufactura = this.handleChangeManufactura.bind(this);
        this.handleChangeEconomia = this.handleChangeEconomia.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    handleName(e) {
        this.setState({
            nombre: e.target.value
        });
        localStorage.setItem("Nombre",this.state.nombre);
    }

    handleDescription(e) {
        this.setState({
            descripcion: e.target.value
        });
        localStorage.setItem("Descripción",this.state.descripcion);
    }

    handleChangeCategoria(e){
        this.setState({
            categoria: e.target.value
        });
        localStorage.setItem("Categoria",this.state.categoria);
    }

    handleChangeMonto(e){
        this.setState({
            monto: e.target.value
        });
        localStorage.setItem("Monto",this.state.monto);
    }

    handleDateChange(date) {
        this.setState({
            fecha: date
        });
        localStorage.setItem("Fecha",this.state.fecha);
    }

    handleChangeDonaciones(e){
        this.setState({
            donaciones: e.target.checked
        });
        
        localStorage.setItem("Donaciones",this.state.donaciones);
        
    }

    handleChangeInversiones(e){
        this.setState({
            inversiones: e.target.checked
        });
        
        localStorage.setItem("Inversiones",this.state.inversiones);
    }

    handleChangeExpertos(e){
        this.setState({
            expertos: e.target.checked
        });
        
        localStorage.setItem("Expertos",this.state.expertos);
    }

    handleChangeAreas(e){
        this.setState({
            areas: e.target.value
        });
        
        localStorage.setItem("Areas",this.state.areas);
    }


    handleChangeVersiónPremium(e){
        this.setState({
            VersiónPremium: e.target.checked
        });
        
        localStorage.setItem("VersiónPremium",this.state.VersiónPremium);
        
    }

    handleChangeDescuento(e){
        this.setState({
            Descuento: e.target.checked
        });
        
        localStorage.setItem("Descuento",this.state.Descuento);
    }

    handleChangeAdquisiciónTemprana(e){
        this.setState({
            AdquisiciónTemprana: e.target.checked
        });
        
        localStorage.setItem("AdquisiciónTemprana",this.state.AdquisiciónTemprana);
    }

    handleChangeDerecho(e){
        this.setState({
            derecho: e.target.checked
        });
        
        localStorage.setItem("VersiónPremium",this.state.derecho);
        
    }

    handleChangeIngenieria(e){
        this.setState({
            ingenieria: e.target.checked
        });
        
        localStorage.setItem("Ingenieria",this.state.ingenieria);
    }

    handleChangeManufactura(e){
        this.setState({
            manufactura: e.target.checked
        });
        
        localStorage.setItem("Manufactura",this.state.manufactura);
    }

    handleChangeEconomia(e){
        this.setState({
            economia: e.target.checked
        });
        
        localStorage.setItem("AdquisiciónTemprana",this.state.economia);
    }

    handleSubmit(e) {

        if (localStorage.getItem('logout' === 'si')){
            e.preventDefault();
            localStorage.setItem("Nombre", this.state.nombre);
            localStorage.setItem("Categoria", this.state.categoria);
            localStorage.setItem("Descripción", this.state.descripcion);
            localStorage.setItem("Monto", this.state.monto);
            localStorage.setItem("Fecha", this.state.fecha);

            window.location.href = "/idea";
        }
        else {
            alert('Debe estar logueado para poder publicar')
        }
    }


    render(){
        return (
            <Router>
            <Paper className="paperPublish" elevation={20}>
                <ThemeProvider theme={theme}>
                    <Typography variant="h3" >Publica tu idea/proyecto</Typography>
                </ThemeProvider>
                    <br/>
                    <form onSubmit={this.handleSubmit} className="form">
                            <Typography variant="h5" >Selecciona una categoría para clasificar tu proyecto:</Typography>
                            <FormControl  margin="dense" required fullWidth>                                                       
                                <InputLabel id="Categoria">Categoría</InputLabel>
                                <Select
                                    labelId="Categoria"
                                    id="Categoria"
                                    value={this.state.categoria}
                                    onChange={this.handleChangeCategoria}
                                    >
                                    <MenuItem value={'Agro'}>Agro</MenuItem>
                                    <MenuItem value={'Cultura'}>Cultura</MenuItem>
                                    <MenuItem value={'Educación'}>Educación</MenuItem>
                                    <MenuItem value={'Entretenimiento'}>Entretenimiento</MenuItem>
                                    <MenuItem value={'Gastronomia'}>Gastronomia</MenuItem>
                                    <MenuItem value={'Moda'}>Moda</MenuItem>
                                    <MenuItem value={'Tecnología'}>Tecnología</MenuItem>
                                </Select>
    
                
                            </FormControl>
                            <br/>
                            <Typography variant="h5">Dale un nombre para identificarla: </Typography>
                            <FormControl margin="dense" required fullWidth>
                            
                                <InputLabel htmlFor="nombre">Nombre</InputLabel>
                                    <Input
                                        name="nombre"
                                        id="nombre"
                                        onChange={this.handleName}
                                        selected={this.state.nombre}
                                    />
                            </FormControl>
                            <br/>
                            <Typography variant="h5">Descríbela:  </Typography>
                            <FormControl margin="dense" required fullWidth>
                                <InputLabel htmlFor="descripcion">Descripción</InputLabel>
                                    <Input
                                        name="descripcion"
                                        id="descripcion"
                                        onChange={this.handleDescription}
                                        selected={this.state.descripcion}
                                    />
                            </FormControl>

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
                            </FormControl>
                            
                            <FormControl component="fieldset" >
                            <Typography variant="h5">¿Qué estas buscando para tu proyecto?</Typography>
                               
                                <FormGroup>
                                <FormControlLabel
                                    control={<GreenCheckbox  checked={this.state.donaciones} onChange={this.handleChangeDonaciones} name="gilad" />}
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
                                    control={<GreenCheckbox  checked={this.state.inversiones} onChange={this.handleChangeInversiones} name="jason" />}
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
                                    control={<GreenCheckbox  checked={this.state.expertos} onChange={this.handleChangeExpertos} name="antoine" />}
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
                        
                        <div style={{display: this.state.donaciones? 'block' : 'none' }}>
                            <Typography variant="h5">¿Qué incentivos le quieres dar a las personas que te donen? </Typography>
                            <FormControl  component="fieldset"> 
                                <FormGroup>
                                    <FormControlLabel
                                        control={<GreenCheckbox  checked={this.state.VersiónPremium} onChange={this.handleChangeVersiónPremium} name="gilad" />}
                                        label={  
                                            <div>
                                                <Typography variant="body2" >
                                                    Versión Premium/Especial del Producto                                                
                                                </Typography>
                                            </div>    
                                        }>
                                        
                                    </FormControlLabel>           
                                    <FormControlLabel
                                        control={<GreenCheckbox  checked={this.state.Descuento} onChange={this.handleChangeDescuento} name="jason" />}
                                        label={  
                                            <div>
                                                <Typography variant="body2" >
                                                    Descuentos en el Producto o Servicio Final
                                                </Typography>
                                            </div>    
                                        }
                                    />
                                    <FormControlLabel
                                        control={<GreenCheckbox  checked={this.state.AdquisiciónTemprana} onChange={this.handleChangeAdquisiciónTemprana} name="antoine" />}
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
                        
                        <div style={{display: this.state.expertos ? 'block' : 'none' }}>
                            <Typography variant="h5" >¿En que áreas necesitas expertos o personal?</Typography>
                                <FormControl  margin="dense" required fullWidth>                                                               
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={<GreenCheckbox  checked={this.state.derecho} onChange={this.handleChangeDerecho} name="gilad" />}
                                            label={  
                                                <div>
                                                    <Typography variant="body2" >
                                                        Derecho y Leyes                                               
                                                    </Typography>
                                                </div>    
                                            }>
                                            
                                        </FormControlLabel>           
                                        <FormControlLabel
                                            control={<GreenCheckbox  checked={this.state.economia} onChange={this.handleChangeEconomia} name="jason" />}
                                            label={  
                                                <div>
                                                    <Typography variant="body2" >
                                                        Economia y Finanzas
                                                    </Typography>
                                                </div>    
                                            }
                                        />
                                        <FormControlLabel
                                            control={<GreenCheckbox  checked={this.state.ingenieria} onChange={this.handleChangeIngenieria} name="antoine" />}
                                            label={  
                                                <div>
                                                    <Typography variant="body2" >
                                                        Ingeniería                                      
                                                    </Typography>
                                                </div>    
                                            }
                                        />
                                         <FormControlLabel
                                            control={<GreenCheckbox  checked={this.state.manufactura} onChange={this.handleChangeManufactura} name="antoine" />}
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

                        <div style={{display: this.state.donaciones || this.state.inversiones ? 'block' : 'none' }}>
                            <Typography variant="h5">Define un monto limite: </Typography>
                            <FormControl margin="dense" required fullWidth>
                            
                                <TextField
                                    label="Monto"
                                    value={this.state.monto}
                                    onChange={this.handleChangeMonto}
                                    name="numberformat"
                                    id="formatted-numberformat-input"
                                    InputProps={{
                                    inputComponent: NumberFormatCustom,
                                    }}
                                />
                            </FormControl>
                        </div> 

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
                                            value={this.state.fecha}
                                            onChange={this.handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            />
                                </MuiPickersUtilsProvider>
                            </FormControl>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            onClick={this.handleSubmit}
                            >
                                Publicar Idea
                            </Button>
                    </form> 
            </Paper>      
        </Router>
        );
    }
}