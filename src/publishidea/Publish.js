import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import './Publish.css';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider,withStyles  } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel'
import {BrowserRouter as Router} from 'react-router-dom';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';
 

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
                        areas: ""} ;
        
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleChangeCategoria = this.handleChangeCategoria.bind(this);
        this.handleChangeMonto = this.handleChangeMonto.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

        this.handleChangeDonaciones = this.handleChangeDonaciones.bind(this);
        this.handleChangeInversiones = this.handleChangeInversiones.bind(this);
        this.handleChangeExpertos = this.handleChangeExpertos.bind(this);

        this.handleChangeAreas = this.handleChangeAreas.bind(this);

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
            areas: e.target.checked
        });
        
        localStorage.setItem("Areas",this.state.areas);
    }

    handleSubmit(e) {
       
        e.preventDefault();
        localStorage.setItem("Nombre",this.state.nombre);
        localStorage.setItem("Categoria",this.state.categoria);
        localStorage.setItem("Descripción",this.state.descripcion);
        localStorage.setItem("Monto",this.state.monto);
        localStorage.setItem("Fecha",this.state.fecha);
        
        window.location.href = "/idea";
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
                        <Typography variant="h5" >Selecciona una categoria para clasificar tu proyecto:</Typography>
                            <FormControl  margin="dense" required fullWidth>
                            
                            
                                <InputLabel id="Categoria">Categoria</InputLabel>
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
                            
                            <FormControl component="fieldset" >
                            <Typography variant="h5">¿Que estas buscando para tu proyecto?</Typography>
                               
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

                        <div style={{display: this.state.expertos ? 'block' : 'none' }}>
                            <Typography variant="h5" >¿En que areas necesitas expertos o personal?</Typography>
                                <FormControl  margin="dense" required fullWidth>
                                
                                
                                    <InputLabel id="Categoria">Areas</InputLabel>
                                    <Select
                                    labelId="Categoria"
                                    id="Categoria"
                                    value={this.state.areas}
                                    onChange={this.handleChangeAreas}
                                    >
                                    <MenuItem value={'Derecho y Leyes'}>Derecho y Leyes</MenuItem>
                                    <MenuItem value={'Economia'}>Economia</MenuItem>
                                    <MenuItem value={'Ingenieria'}>Ingenieria</MenuItem>
                                    <MenuItem value={'Manufactura'}>Manufactura</MenuItem>
                                
                                    </Select>
        
                    
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
                                
                            >
                                Subir Idea
                            </Button>
                        </form>    
                
                    
            </Paper>      

        </Router>


        );

    }


}