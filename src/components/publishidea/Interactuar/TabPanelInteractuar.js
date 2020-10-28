import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Comentar} from './Comentar';
import {Donar} from './Donar';
import {Invertir} from './Invertir';

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

let idea = {};

const startItems = () => {
   
  const id = getQueryVariable('id');
  var path = "http://mysterious-refuge-36454.herokuapp.com/ideas/"+id;

  fetch(path)
    .then(response => response.json())
    .then(newidea => {
      idea=newidea;
    }).catch(error => console.error('Error:', error));
}

function getQueryVariable(variable)
  {
        var query = window.location.search.substring(1);
        console.log(query)
        var vars = query.split("&");
        console.log(vars) 
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    console.log(pair)
        if(pair[0] == variable){return pair[1];}
         }
         return(false);
  }

export default function TabPanelInteractuar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  startItems();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"  variant="fullWidth">
          <Tab label="Comenta" {...a11yProps(0)} />
          <Tab label="Dona" {...a11yProps(1)} />
          <Tab label="Invierte" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Comentar idea={getQueryVariable('id')}  tipo={value}/>
      </TabPanel>

      <div style={{display: idea.pequenasdonaciones ? 'block' : 'none' }}>
        <TabPanel value={value} index={1}>
          <Donar idea={getQueryVariable('id')} tipo={value}/>
        </TabPanel>
      </div>

      <div style={{display: !idea.pequenasdonaciones ? 'block' : 'none' }}>
        <TabPanel value={value} index={1}>
          Este proyecto no solicita Donaciones
        </TabPanel>
      </div>

      <div style={{display: idea.grandesinversiones ? 'block' : 'none' }}>
        <TabPanel value={value} index={2}>
          <Invertir idea={getQueryVariable('id')} tipo={value}/>
        </TabPanel>
      </div>

      <div style={{display: !idea.grandesinversiones ? 'block' : 'none' }}>
        <TabPanel value={value} index={2}>
          Este proyecto no solicita Inversiones
        </TabPanel>
      </div>

    </div>
  );
}