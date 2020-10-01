import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InteractionList from './InteractionList'

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabPanelInteracHechas() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [interac, setInterac] = React.useState([
    {
      "comentario":"Cambien el color de producto",
      "usuario":"Jose15.com",
      "calificacion":4
    }
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    componentDidMount(newValue);
  };

  const componentDidMount = (newValue) => {
    var path = "http://localhost:8080/interaccion/byIdeaAndTipo/1";
    if (newValue === 0){
      path = path+"/comentario"
    } else if (newValue === 1){
      path = path+"/donacion"
    } else if (newValue === 2){
      path = path+"/inversion"
    }

    fetch(path)
      .then(response => response.json())
      .then(data => {

        let usersList = [];
          data.map((interaction,i) => {
            usersList.push({
            "comentario":interaction.comentario,
            "usuario":interaction.usuario,
            "calificacion": interaction.calificacion
          })
        });
        setInterac(usersList)
      })
      
      ;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  variant="fullWidth">
          <Tab label="Comentarios" {...a11yProps(0)} />
          <Tab label="Donaciones" {...a11yProps(1)} />
          <Tab label="Inversiones" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <InteractionList interactionList={interac}/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <InteractionList interactionList={interac}/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <InteractionList interactionList={interac}/>
      </TabPanel>
    </div>
  );
}