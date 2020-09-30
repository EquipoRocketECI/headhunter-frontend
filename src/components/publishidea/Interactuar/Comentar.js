import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './Calificacion';
import './Comentar.css';


export class Comentar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sugerencia: ''
        };

        this.handleChange = this.handleChange.bind(this);
       
    }

    handleChange(event) {
        this.setState({ sugerencia: event.target.value });
        
    }

   

    render() {
        return (
            <form className="form">

                <Typography variant="h5" >Comentar</Typography>

                <FormControl margin="normal" required fullWidth>
                    <Typography variant="h6" >¿Desea contribuir al proyecto con su experiencia?</Typography>

                    <br></br>
                    <TextField
                        id="sugerencia"
                        label="Comentario"
                        multiline
                        rows={5}
                        cols={10}
                        value={this.state.sugerencia}
                        onChange={this.handleChange}
                        variant="outlined"
                        />


                    <br></br>
                    <Typography variant="h6" >Calificación</Typography>
                    <p class="clasificacion">
                        <input id="radio1" type="radio" name="estrellas" value="5" ></input>
                        <label for="radio1">1</label>
                        <input id="radio2" type="radio" name="estrellas" value="4"></input>
                            <label for="radio2">2</label>
                        <input id="radio3" type="radio" name="estrellas" value="3"></input>
                            <label for="radio3">3</label>
                        <input id="radio4" type="radio" name="estrellas" value="2"></input>
                            <label for="radio4">4</label>
                        <input id="radio5" type="radio" name="estrellas" value="1"></input>
                            <label for="radio5">5</label>
                     </p>

                     <br></br>
                    <Button
                        type="submit"
                        size = "small"
                        variant="contained"
                        className="blue"
                        >
                        Enviar
                    </Button>

                </FormControl>

            </form>
            
        );
    }
    
}
