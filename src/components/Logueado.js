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




export class Logueado extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    render() {
       
        return (
            <Paper className="paper" elevation={20}>
                <div>
                    <Typography variant="h4">Bienvenido</Typography>
                    <form className="form">

                        <List>
                            <ListItem>
                                <AccountCircleIcon />
                                <ListItemText primary={localStorage.getItem('username')} />
                            </ListItem>
                        </List>

                        <div>

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