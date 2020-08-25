import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css';
import { SignIn } from './SignIn';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';




export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "", recordar: false };
        localStorage.setItem('username', "Mateo");
        localStorage.setItem('password', "IETI1234");
        localStorage.setItem('recordar', false);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {


        const SignInView = () => {
            return <SignIn />
        };

    
        
        return (
            <Router>
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">HeadHunter</Typography>
                        <Typography variant="h5">Make your ideas fly</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Nombre de usuario</InputLabel>
                                <Input id="username" name="username" autoComplete="username" autoFocus onChange={this.handleUsername} selected={this.state.userName} />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handlePassword}
                                    selected={this.state.password}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={this.handleSubmit}
                            >
                                Login
                            </Button>

                            <br />
                            <br />                              
                                <ul>
                                <li><Link to="/SignIn">SignIn</Link></li>    </ul>
                            <div>
                                <Route path="/SignIn" component={SignInView} />
                            </div>
                              
                        </form>

                     
                    </Paper>
                </main>
                </React.Fragment>
            </Router>
        );

    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    handleSubmit(e) {  

        localStorage.setItem("recordar", true);
        
        
    }

    handleClick(e){
        localStorage.setItem("recordar", true)
        
}

}