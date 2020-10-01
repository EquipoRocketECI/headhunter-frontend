import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Calificacion';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';


export class Invertir extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comentario: '',
            monto: 0,
            calificacion: ''
        };

        this.handleChangeComentario = this.handleChangeComentario.bind(this);
        this.handleChangeMonto = this.handleChangeMonto.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCalificacion = this.handleChangeCalificacion.bind(this);
        this.sendJSON = this.sendJSON.bind(this);
    }

    handleChangeComentario(event) {
        this.setState({ comentario: event.target.value });
    }

    handleChangeMonto(event) {
        this.setState({ monto: event.target.value });
    }

    handleChange(event) {
        event.preventDefault();
        window.location.href = "/payment";
    }

    handleChangeCalificacion(event) {
        this.setState({ calificacion: event.target.value });
    }

    sendJSON(event) {
        var tipo = "";

        if (this.props.tipo == "0"){
            tipo = "comentario"
        } else if (this.props.tipo == "1"){
            tipo = "donacion"
        } else if (this.props.tipo == "2"){
            tipo = "inversion"
        }

        var dataa = {
            tipo: tipo,
            monto: this.state.monto,
            comentario: this.state.comentario,
            calificacion: this.state.calificacion,
            idea: this.props.idea,
            usuario: "diego.com"
        };



        fetch('http://localhost:8080/interaccion', {
            method: 'POST',
            body: JSON.stringify(dataa),
            headers:{
              'Content-Type': 'application/json'
            }
          }
        )
        .then(response => alert(response.json()))
        .then(data => {
            alert(data)
        });

        this.handleChange(event);
    }

    render() {
        return (
            <form className="form">

                <Typography variant="h5" >Donar</Typography>

                <FormControl margin="normal" required fullWidth>
                    <Typography variant="h6" >¿Deseas donar al proyecto y recibir beneficios?</Typography>

                    <br></br>
                    <TextField
                        id="sugerencia"
                        label="Comentario"
                        multiline
                        rows={5}
                        cols={10}
                        value={this.state.sugerencia}
                        onChange={this.handleChangeComentario}
                        variant="outlined"
                    />

                    <br></br>
                    <Typography variant="h6" >Calificación</Typography>
                    <FormControl component="fieldset" onChange={this.handleChangeCalificacion} component="fieldset">

                        <RadioGroup row id="calificacion" aria-label="position" name="quiz" value={this.state.calificacion}>
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                            <FormControlLabel value="5" control={<Radio />} label="5" />
                        </RadioGroup>

                    </FormControl>

                     <FormControl>
                        <InputLabel >Monto</InputLabel>
                            <Select labelId="monto" 
                                    id="monto" 
                                    value={this.state.monto}
                                    onChange={this.handleChangeMonto}
                                >
                                <MenuItem value={100000}>100.000</MenuItem>
                                <MenuItem value={200000}>200.000</MenuItem>
                                <MenuItem value={300000}>300.000</MenuItem>
                                <MenuItem value={400000}>400.000</MenuItem>
                                <MenuItem value={500000}>500.000</MenuItem>
                            </Select>
                    </FormControl>

                    <br></br>
                    <Button
                        type="submit"
                        size = "small"
                        variant="contained"
                        className="blue"
                        onClick={this.sendJSON}>
                        Enviar
                    </Button>

                </FormControl>

            </form>
            
        );
    }
    
}