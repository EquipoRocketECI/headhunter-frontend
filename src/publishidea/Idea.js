import React from 'react';
import './Publish.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import moment from "moment";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { format,parse } from 'date-fns';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './Idea.css';
import {Comentar} from './Interactuar/Comentar';
import {Donar} from './Interactuar/Donar';
import {Invertir} from './Interactuar/Invertir';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);

const theme = createMuiTheme({
    typography: {
      
        h4: {
        fontWeight: 1000,
        fontFamily: 'Verdana',
        textAlign: 'left'
      },
      h5: {
          fontStyle: 'italic'
      },
      body2: {
        textAlign: 'center',
        fontSize: 20

      }
    },
  });

  var porcentaje=0;

  function startItems() {
     
    const name=localStorage.getItem("Nombre");
    const categ=localStorage.getItem("Categoria");
    const desc=localStorage.getItem("Descripción");
    var money=localStorage.getItem("Monto");
    const date=localStorage.getItem("Fecha");
    const user=localStorage.getItem("User");
    var moneyDonated=localStorage.getItem("MontoDonado");
    if (name===null || name ===""){
        localStorage.setItem("Nombre","Nombre de idea de prueba");
    }
    if (categ===null || categ===""){
        localStorage.setItem("Categoria","Categoria");
    }
    if (desc===null || desc===""){
        localStorage.setItem("Descripción","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.");
    }
    if (money===null || money===""){
        localStorage.setItem("Monto",100000);
        var money=100000;
    }
    if (date===null || date===""){
        localStorage.setItem("Fecha",format(new Date(),"MMM dd yyyy"));
    }
    if (user===null || user===""){
        localStorage.setItem("User","UsuarioDePrueba");
    }
    if (moneyDonated===null || moneyDonated===""){
        if (money===null || money===""){
            localStorage.setItem("MontoDonado",50000);
        }else {
            moneyDonated=money/2;
            localStorage.setItem("MontoDonado",money/2);
        }
        
    }
    porcentaje= (100/money)*moneyDonated;
    
  }


export class Idea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const ComentarView = () => (
            <Comentar/>
        );
    
        const DonarView = () => (
            <Donar/>
        );
    
        const InvertirView = () => (
            <Invertir/>
        );

        startItems();
        
        return (
            <Router>
                <Paper className="paperIdea" elevation={20}>
                <ThemeProvider theme={theme}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                        
                                <Typography gutterBottom variant="h4">
                                
                                {localStorage.getItem("Nombre")}
                                </Typography>
                        
                        </Grid>
                        <Grid item >
                            <Typography gutterBottom variant="h6">
                                {/*<Chip label={localStorage.getItem("Categoria")} /> */}
                                {localStorage.getItem("Categoria")}
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    <Typography gutterBottom variant="h5">
                            
                            de  {localStorage.getItem("User")}
                    </Typography>


                    <Typography variant="body1" gutterBottom>
                            {localStorage.getItem("Descripción")} <br/>
                    </Typography>

                    <Divider variant="middle" />

                    <Typography variant="body2" gutterBottom>
                        Recaudado ${localStorage.getItem("MontoDonado")} de  ${localStorage.getItem("Monto")} ({porcentaje}%)
                    <br/>
                    
                    </Typography>
                    <BorderLinearProgress variant="determinate" value={porcentaje} />
                    <Typography variant="body2" gutterBottom>
                        Dona antes de {localStorage.getItem("Fecha")} <br/>
                    <br/>
                    
                    </Typography>

                    <Divider variant="middle" /><br></br>
                    
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        
                        <Button className="person">
                            <Link class="link" to="/comentar">Comentar</Link>
                        </Button>

                        <Button className="person">
                            <Link class="link" to="/donar">Donar</Link>
                        </Button>

                        <Button className="person">
                            <Link class="link" to="/invertir">Invertir</Link>
                        </Button>

                    </ButtonGroup>

                    <div>
                        <Route path="/comentar" component={ComentarView} />
                        <Route path="/donar" component={DonarView} />
                        <Route path="/invertir" component={InvertirView} />
                    </div>    

                </ThemeProvider>
                </Paper>
            </Router>
        );
    }

    
}