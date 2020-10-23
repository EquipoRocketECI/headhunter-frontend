import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './Login.css';
//import { SHA256 } from './sha256';
import Link from "@material-ui/core/Link";




export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "", recordar: false, logout:"no"};
        
        
        localStorage.setItem('logout', 'no');
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }

    

    render() {
       
        return (
            <Paper className="paper" elevation={20}>
                <div>
                    <Typography variant="h4">Iniciar Sesión</Typography>
                    <form className="form" onSubmit={this.handleSubmit}>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="username">Nombre de usuario</InputLabel>
                            <Input id="username" name="username" autoComplete="username" autoFocus onChange={this.handleUsername}
                                value={this.state.userName}  selected={this.state.userName} />
                        </FormControl>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Contraseña</InputLabel>
                            <Input
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handlePassword}
                                value={this.state.userName}
                                selected={this.state.password}
                            />
                        </FormControl>

                        <Button
                            
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="blue"
                                                
                            >
                            Ingresar
                        </Button>
                    </form>
                </div> 
            </Paper>
        );
    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
        localStorage.setItem('username', e.target.value);
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }


    handleSubmit(e) {  

        e.preventDefault();
        var sha256 = require('js-sha256');
        var path = "https://mysterious-refuge-36454.herokuapp.com/usuario/" + this.state.username;

        var hash = sha256(this.state.password);

        fetch(path)
            .then(response => response.json())
            .then(usuario => {
                if (usuario.contrasena == hash) {
                    localStorage.setItem('logout', 'si');
                    window.location.reload();
                }
                else {
                    alert("Usuario o contraseña incorrectos");
                }
            }).catch(error => alert('Usuario no econtrado'));;
    }

    handleClick(e){
        localStorage.setItem("recordar", true)
    }

    
}