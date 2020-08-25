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
import './SingIn.css'



export class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "", recordar: false };
        localStorage.setItem('username', "Mateo");
        localStorage.setItem('password', "IETI1234");
        localStorage.setItem('recordar', false);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="nombres">Nombres</InputLabel>
                                <Input id="nombres" name="nombres" autoComplete="nombres" autoFocus  />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="apellidos">Apellidos</InputLabel>
                                <Input id="apellidos" name="apellidos" autoComplete="apellidos" autoFocus />
                            </FormControl>

                            

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                    
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
                                Sign in
                            </Button>

                            <br />
                            <br />

                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );

    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    handleSubmit(e) {

    }

}