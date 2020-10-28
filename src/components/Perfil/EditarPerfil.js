import React from 'react';
import {FormControl, Button,Input, InputLabel, Paper} from '@material-ui/core';


export class EditarPerfil extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
      this.sendJSON = this.sendJSON.bind(this);
    }


    sendJSON(event) {

        event.preventDefault();

        /** FETCH PUT USUARIO */
    }

    render() { 
 
        return (
            <Paper className="paper" elevation={20}>
                <form className="form" >

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
  