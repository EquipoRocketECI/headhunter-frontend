import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom';
import './Calificacion';




export class Sugerencias extends React.Component {
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

                <FormControl margin="normal" required fullWidth>
                    <label htmlFor="sugerencia">Escriba su retroalimentacion al proyecto aqui:</label>
                    <br>
                    </br>
                    <textarea rows ="5" cols="10" id="sugerencia" type="text" value={this.state.sugerencia} onChange={this.handleChange} fullWidth />
                    <br>
                    </br>
                    <Button
                        type="submit"
                        size = "small"
                        variant="contained"
                        className="blue"
                        onClick={this.handleChange}>
                        Enviar
                        </Button>
                    <br>
                    </br>
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


                </FormControl>

            </form>
            
        );
    }
    
}
