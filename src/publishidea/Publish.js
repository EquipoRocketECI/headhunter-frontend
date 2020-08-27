import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

export class Publish extends React.Component{
    constructor(props) {
        super(props);
        this.state = { nombre: "", descripcion: "", categoria: "", monto: "", fecha: moment(this.props.start)};
        
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
    }

    handleDescription(e) {
        this.setState({
            descripcion: e.target.value
        });
    }

    handleChangeCategoria(e){
        this.setState({
            categoria: e.target.value
        });
    }

    handleChangeMonto(e){
        this.setState({
            monto: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            fecha: date
        });
    }

    handleSubmit(e) {
       
        e.preventDefault();
        
        
        alert("Nombre: "+this.state.nombre+" Descripcion: "+this.state.descripcion+" Categoria: "+this.state.categoria+" Monto: "+this.state.monto+" Fecha: "+this.state.fecha.toDate());
    }


    render(){
        return (
            <Router>
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        
                        <Typography variant="h4">Publica tu idea/proyecto</Typography>
                     
                        <form onSubmit={this.handleSubmit} className="form">
                        <Typography variant="h5">1. Selecciona una categoria para clasificar tu idea</Typography>
                            <FormControl margin="normal" required fullWidth>
                            
                            
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
                            <Typography variant="h5">2. Dale un nombre a tu idea para identificarla </Typography>
                            <FormControl margin="normal" required fullWidth>
                            
                            <InputLabel htmlFor="nombre">Nombre</InputLabel>
                                <Input
                                    name="nombre"
                                    id="nombre"
                                    onChange={this.handleName}
                                    selected={this.state.nombre}
                                />
                            </FormControl>
                            <br/>
                            <Typography variant="h5">3. Describela  </Typography>
                            <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="descripcion">Descripción</InputLabel>
                                <Input
                                    name="descripcion"
                                    id="descripcion"
                                    onChange={this.handleDescription}
                                    selected={this.state.descripcion}
                                />
                            </FormControl>
                            
                            <Typography variant="h5">4. Define un monto limite </Typography>
                            <FormControl margin="normal" required fullWidth>
                            
                            <InputLabel htmlFor="monto">Monto</InputLabel>
                                <Input
                                    name="monto"
                                    id="monto"
                                    onChange={this.handleChangeMonto}
                                    selected={this.state.monto}
                                />
                            </FormControl>

                            <Typography variant="h5">5. Define una fecha para alcanzar el monto</Typography>
                            <FormControl margin="normal" required fullWidth>
                            
                            
                            <DatePicker
                                id="fecha"
                                selected={this.state.fecha}
                                placeholderText="Fecha"
                                onChange={this.handleDateChange}>
                            </DatePicker>
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
                </main>
                </React.Fragment>
            </Router>


        );

    }


}