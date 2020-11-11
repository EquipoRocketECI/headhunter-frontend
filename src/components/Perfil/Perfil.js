import React from 'react';
import {
  AppBar, Tabs, Tab, Typography, Box
} from '@material-ui/core';
import PropTypes from 'prop-types';
import './Perfil.css';

import InteractionListByUser from './InteractionListByUser'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { orange } from '@material-ui/core/colors';
import IdeaListByUser from './IdeaListByUser';

function getSteps() {
  return ['En Gestación', 'Destacada', 'Consolidada'];
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export class Perfil extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ideas: []
      ,
      interacciones: [{
        "id": 6, "tipo": "comentario", "monto": 0, "comentario": "we",
        "calificacion": 4.0, "idea": 1, "usuario": "diego.com"
      },
      {
        "id": 1, "tipo": "donacion", "monto": 10000, "comentario": "Me gusta la idea",
        "calificacion": 5, "idea": 1, "usuario": "diego.com"
      },
      {
        "id": 48, "tipo": "inversion", "monto": 500000, "comentario": "test 5",
        "calificacion": 3, "idea": 1, "usuario": "diego.com"
      }],
      value: 0
    };
    this.starInteracciones();

    this.steps = getSteps();
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/ideas?user=" + localStorage.getItem('username'))
      .then(response => response.json())
      .then(data => {
        this.setState({ ideas: data })
      });
  }

  starInteracciones() {

    var path = "https://mysterious-refuge-36454.herokuapp.com/interaccion/byUser/" + localStorage.getItem('username');

    let interactionList = [];

    fetch(path)
      .then(response => response.json())
      .then(data => {

        data.map((interaction) => {

          var ideaNombre = "";

          fetch("https://mysterious-refuge-36454.herokuapp.com/ideas/" + interaction.idea)
            .then(response => response.json())
            .then(data => {
              ideaNombre = data.nombre;

              interactionList.push({
                "comentario": interaction.comentario,
                "ideaNombre": ideaNombre,
                "calificacion": interaction.calificacion,
                "monto": interaction.monto,
                "tipo": interaction.tipo,
                "usuario": interaction.usuario,
                "interaccionId": interaction.id
              });
            });
        });
        this.setState({ interacciones: interactionList })
      });

  }

  handleChange(event, newValue) {
    event.preventDefault();
    this.setState({ value: newValue });
  };

  render() {

    return (
      <div className="paperPerfil">

        <div className="center">
          <AccountCircleIcon style={{ color: orange[900], fontSize: 60 }} />
          <h4 className="titulo">
            MI PERFIL
              </h4>
        </div><br />

        <AppBar position="static">
          <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example" variant="fullWidth">
            <Tab label="Mis Proyectos" {...a11yProps(0)} />
            <Tab label="Mis interacciones" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <div style={{ display: (localStorage.getItem('username') != "") ? 'block' : 'none' }}>
          <TabPanel value={this.state.value} index={0}>
            <IdeaListByUser ideaList={this.state.ideas} />
          </TabPanel>
        </div>

        <div style={{ display: (localStorage.getItem('username') != "") ? 'block' : 'none' }}>
          <TabPanel value={this.state.value} index={1}>
            <InteractionListByUser interactionList={this.state.interacciones} />
          </TabPanel>
        </div>

        <div style={{ display: (localStorage.getItem('username') == "") ? 'block' : 'none' }}>
          <TabPanel value={this.state.value} index={1}>
            Inicie sesion para ver sus interacciones
                  </TabPanel>
        </div>

      </div>

    );
  };




}
