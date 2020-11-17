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
        
        event.preventDefault();

        if (localStorage.getItem('logout') === 'si'){

            var tipo = "";

            if (this.props.tipo == "0"){
                tipo = "comentario"
            } else if (this.props.tipo == "1"){
                tipo = "donacion"
            } else if (this.props.tipo == "2"){
                tipo = "inversion"
            }

            var dataa = {
                "tipo": tipo,
                "monto": "0",
                "comentario": this.state.comentario,
                "calificacion": this.state.calificacion,
                "idea": this.props.idea,
                "usuario": localStorage.getItem("username")
            };


            fetch('https://mysterious-refuge-36454.herokuapp.com/interaccion', {
                method: 'POST',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify(dataa)
            })
            .then(response => {
                response.json()
                window.location.reload()
            })

        }
        else {
            alert('Debe estar logueado para poder comentar')
        }


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

                    </FormControl>

                    <br></br>

                    <Typography variant="h6" >Calificación</Typography>
                    

                        <RadioGroup row id="calificacion" aria-label="position" value={this.state.calificacion} onChange={this.handleChangeCalificacion}>
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2" control={<Radio />} label="2" />
                            <FormControlLabel value="3" control={<Radio />} label="3" />
                            <FormControlLabel value="4" control={<Radio />} label="4" />
                            <FormControlLabel value="5" control={<Radio />} label="5" />
                        </RadioGroup>

                    

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

            </form>
            
        );
    }
    
}
