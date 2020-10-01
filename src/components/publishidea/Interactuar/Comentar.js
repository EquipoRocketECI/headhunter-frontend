import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './Calificacion';
import './Comentar.css';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';



export class Comentar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comentario: '',
            calificacion: ''

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCalificacion = this.handleChangeCalificacion.bind(this);
        this.sendJSON = this.sendJSON.bind(this);
       
    }

    handleChange(event) {
        this.setState({ comentario: event.target.value });
        
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
            monto: "0",
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

    }   

    render() {
        return (
            <form className="form">

                <Typography variant="h5" >Comentar</Typography>

                <FormControl margin="normal" required fullWidth>
                    <Typography variant="h6" >¿Deseas contribuir al proyecto con tu experiencia?</Typography>

                    <br></br>
                    <TextField
                        id="comentario"
                        label="Comentario"
                        multiline
                        rows={5}
                        cols={10}
                        value={this.state.comentario}
                        onChange={this.handleChange}
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

                     <br></br>
                    <Button
                        type="submit"
                        size = "small"
                        variant="contained"
                        className="blue"
                        onClick={this.sendJSON}
                        >
                        Enviar
                    </Button>

                </FormControl>

            </form>
            
        );
    }
    
}
