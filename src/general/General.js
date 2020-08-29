import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import logo from './Logo.png';
import './General.css';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';




export class General extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {         
        
        return (
            <div class="grid-container">
                <div class="item1">
                    <div>
                        <img src={logo} class="logo" />
                    </div>
                    <h1 className="App-title">HeadHunter</h1>
                </div>
                <div class="item5">
                    <ButtonGroup class="ButtonGroup" variant="contained" aria-label="contained button group">
                        <Button>Explorar</Button>
                        <Button>Publicar</Button>
                    </ButtonGroup>
                    <AppBar position="static">
                        <InputBase 
                            placeholder="Search…"
                        />
                    </AppBar>
                </div>
                <div elevation={3} class="item2">login</div>
                <div class="item3">Main</div>  
                <div class="item4">
                </div>
            </div>
        );

    }

}