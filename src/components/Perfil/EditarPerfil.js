import React from 'react';
import {FormControl, Button,Input, InputLabel, Paper} from '@material-ui/core';


export class EditarPerfil extends React.Component {

    constructor(props) {
      super(props);
        this.state = { username: { "correo": "", "contrasena": "", "nombrecompleto": "" }, password: "", nombres:""};
        this.sendJSON = this.sendJSON.bind(this);
        this.sendNombres = this.sendNombres.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleNombres = this.handleNombres.bind(this);
        this.getDatosUsuario();
    }

    sendNombres(event) {


        event.preventDefault();

        /** FETCH PUT USUARIO */
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }

        };
        var path = "https://mysterious-refuge-36454.herokuapp.com/usuario" + localStorage.getItem('username') + "/nombrecompleto/" + this.state.nombres;     


            fetch(path, requestOptions)

                .then(usuario => {

                    this.getDatosUsuario();
                    alert("Nombres actualizados correctamente")
                    window.location.href = "/perfil";

                }).catch(error => console.error('Error:', error));
        
    }



    sendJSON(event) {

        
        event.preventDefault();

    /** FETCH PUT USUARIO */

        var sha256 = require('js-sha256');
        var hash = sha256(this.state.password);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
            
        };
        var path = "https://mysterious-refuge-36454.herokuapp.com/usuario" + localStorage.getItem('username') + "/contrasena/" + hash;

        
        if (this.state.username.contrasena == hash) {

            alert("Las contraseñas no pueden ser iguales")
        }
        else {
            

            fetch(path, requestOptions)

                .then(usuario => {
                    
                    this.getDatosUsuario();
                    alert("contrasena actualizada correctamente")
                    window.location.href = "/perfil";

                }).catch(error => console.error('Error:', error));
        }
    }

    getDatosUsuario() {

        var path = "https://mysterious-refuge-36454.herokuapp.com/usuario/" + localStorage.getItem("username");

        fetch(path)
            .then(response => response.json())
            .then(usuario => {
                this.setState({ username: usuario })
            }).catch(error => alert('Usuario no econtrado'));;
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    handleNombres(e) {
        this.setState({ nombres: e.target.value });
    }

    render() { 
 
        return (
            <Paper className="paper" elevation={20}>
                <form className="form" >

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="nombres">Nombre Completo</InputLabel>
                        <Input id="nombres" name="nombres" autoComplete="nombres" value={this.state.nombres}
                            onChange={this.handleNombres} autoFocus />
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="blue"
                        onClick={this.sendNombres}>
                        Cambiar Nombres
                        </Button>

                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Nueva Contraseña</InputLabel>
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
                            Cambiar Contraseña
                        </Button>

                        <br />

                    </form>
               
            </Paper>
  
        );
    };
  

  }
  