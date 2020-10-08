import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './SingIn.css'



export class SignIn extends React.Component {


    constructor(props) {
        super(props);
        this.state = { username: "", password: "", recordar: false, nombres:"", apellidos:"" };
        
        localStorage.setItem('recordar', false);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNombres = this.handleNombres.bind(this);
        this.handleApellidos = this.handleApellidos.bind(this);
        this.sendJSON = this.sendJSON.bind(this);
        
    }

    sendJSON(event) {

        event.preventDefault();

        var data = {
            "correo": this.state.username,
            "contrasena": this.state.password,
            "nombrecompleto": this.state.nombres +" "+ this.state.apellidos 
        };

        fetch('https://mysterious-refuge-36454.herokuapp.com/usuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())

            .catch(error => alert("nombre de usuario ya tomado"))
            .then(response => { localStorage.setItem('currentLoginView', 'Login') });
    }

    render() {
        return (
            <Paper className="paper" elevation={20}>
                <div>
                    <Typography variant="h4">Registrarse</Typography>
                    <form className="form">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="nombres">Nombres</InputLabel>
                            <Input id="nombres" name="nombres" autoComplete="nombres" value={this.state.nombres}
                                onChange={this.handleNombres} autoFocus />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="apellidos">Apellidos</InputLabel>
                            <Input id="apellidos" name="apellidos" autoComplete="apellidos" value={this.state.apellidos}
                                onChange={this.handleApellidos} autoFocus />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Correo Electrónico</InputLabel>
                            <Input id="email" name="email" autoComplete="email" value={this.state.username}
                                onChange={this.handleUsername} autoFocus />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Contraseña</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handlePassword}
                                autoComplete="current-password" />
                                
                        </FormControl>
                                
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="blue"
                            onClick={this.sendJSON}>
                            Registrarse
                        </Button>

                        <br />
                        <br />

                    </form>
                </div>
            </Paper>
        );
    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
        
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    handleNombres(e) {
        this.setState({ nombres: e.target.value });
    }

    handleApellidos(e) {
        this.setState({ apellidos: e.target.value });
    }

    handleSubmit(e) {
        this.setState({ nombres: e.target.value });
        this.setState({ apellidos: e.target.value });
    }

}