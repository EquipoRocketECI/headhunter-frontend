import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './Login.css';
import Link from "@material-ui/core/Link";
import { ListItem } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import List from '@material-ui/core/List';
import MailIcon from '@material-ui/icons/Mail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';


export class Logueado extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { username: { "correo": "", "contrasena": "", "nombrecompleto": "" } };
        this.getDatosUsuario();
    }

    getDatosUsuario() {

        var path = "https://mysterious-refuge-36454.herokuapp.com/usuario/" + localStorage.getItem("username");

        fetch(path)
            .then(response => response.json())
            .then(usuario => {
                this.setState({ username: usuario })
            }).catch(error => alert('Usuario no econtrado'));;
    }

    render() {
       
        return (
            <Paper className="paper" elevation={20}>
                <div>
                    <Typography variant="h4">Bienvenido </Typography>
                    <form className="form">

                        <List>

                            <ListItem>
                                <ListItemText primary={this.state.username.nombrecompleto}/>
                            </ListItem>
                            <ListItem>
                                <MailIcon />
                                <ListItemText primary={localStorage.getItem('username')} />
                            </ListItem>
                        </List>

                        <div>
                            <Button 
                                    href="/perfil"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className="blue"
                                >
                                    <AccountCircleIcon />
                                Mi perfil

                            </Button>

                            <Button 
                                    href="/editarPerfil"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className="blue"
                                >
                                    <VpnKeyIcon />
                                Cambiar Contraseña

                            </Button>

                            <Button className="logout"
                                href="/"
                                type="submit"
                                fullWidth
                                variant="contained"
                                className="blue"
                                onClick={this.handleSubmit}>
                                <ArrowBackIcon />
                            Logout

                            </Button>
                        </div>
                    </form>
                </div> 
            </Paper>
        );
    } 
    handleSubmit(e) {
        localStorage.setItem('logout', 'no');
        localStorage.setItem('username', '')
    }


    
}