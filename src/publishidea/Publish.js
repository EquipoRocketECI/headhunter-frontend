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
import './Publish.css';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter as Router} from 'react-router-dom';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';
 

const theme = createMuiTheme({
    typography: {
      
      h4: {
        fontWeight: 1000,
        fontFamily: 'Verdana'
      },
      h5: {
          marginTop: 20,
          fontStyle: 'normal'
          
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
        this.state = { nombre: "", descripcion: "", categoria: "", monto: 0, fecha: moment(this.props.start)};
        
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleChangeCategoria = this.handleChangeCategoria.bind(this);
        this.handleChangeMonto = this.handleChangeMonto.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

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
                <Typography variant="h4" >Publica tu idea/proyecto</Typography>
                </ThemeProvider>
                        <br/>
                        <form onSubmit={this.handleSubmit} className="form">
                        <Typography variant="h5" >1. Selecciona una categoria para clasificar tu idea:</Typography>
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
                            <Typography variant="h5">2. Dale un nombre para identificarla: </Typography>
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
                            <Typography variant="h5">3. Descríbela:  </Typography>
                            <FormControl margin="dense" required fullWidth>
                            <InputLabel htmlFor="descripcion">Descripción</InputLabel>
                                <Input
                                    name="descripcion"
                                    id="descripcion"
                                    onChange={this.handleDescription}
                                    selected={this.state.descripcion}
                                />
                            </FormControl>
                            
                            <Typography variant="h5">4. Define un monto limite: </Typography>
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

                            

                            <Typography variant="h5">5. Define una fecha para alcanzar el monto:</Typography>
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