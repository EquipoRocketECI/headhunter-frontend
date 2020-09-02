import React from 'react';
import { List, ListItem, Divider, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio } from '@material-ui/core';
import './css/filters.css';

export class Filters extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rangeRadioValue:"none",
            selectedAreas:{
                educacion:false,
                salud:false,
                comida:false,
                viaje:false
            }
        }
        this.handleInvestmentChange=this.handleInvestmentChange.bind(this);
        this.handleAreaChange=this.handleAreaChange.bind(this);
    }

    handleInvestmentChange(e){
        this.setState({rangeRadioValue:e.target.value});//use useState for each filter section
    }

    handleAreaChange(e){
        const areas =this.state.selectedAreas;
        this.setState({selectedAreas:{...areas,[e.target.name]:e.target.checked}});
    }

    render(){
        return(
            <List className="filters">
                <ListItem className="investmentFilter">
                    <FormGroup>
                        
                    </FormGroup>
                    <RadioGroup value={this.state.rangeRadioValue} onChange={this.handleInvestmentChange}>
                        <FormControlLabel value="low" control={<Radio/>} label="LOW RANGE"/>
                        <FormControlLabel value="mid" control={<Radio/>} label="MID RANGE"/>
                        <FormControlLabel value="high" control={<Radio/>} label="HIGH RANGE"/>
                    </RadioGroup>
                </ListItem>
                <Divider/>
                <ListItem className="areaFilter">
                    <FormGroup>
                        <FormControlLabel 
                            control={
                                <Checkbox
                                    checked={this.state.selectedAreas.educacion}
                                    onChange={this.handleAreaChange}
                                    name="educacion"
                                />
                            }
                            label="Educación"    
                        />
                        <FormControlLabel 
                            control={
                                <Checkbox
                                checked={this.state.selectedAreas.salud}
                                onChange={this.handleAreaChange}
                                    name="salud"
                                />
                            }
                            label="Salud"    
                        />
                        <FormControlLabel 
                            control={
                                <Checkbox
                                checked={this.state.selectedAreas.comida}
                                onChange={this.handleAreaChange}
                                    name="comida"
                                />
                            }
                            label="Comida"    
                        />
                        <FormControlLabel 
                            control={
                                <Checkbox
                                checked={this.state.selectedAreas.viaje}
                                onChange={this.handleAreaChange}
                                    name="viaje"
                                />
                            }
                            label="Viaje"    
                        />
                    </FormGroup>
                </ListItem>
            </List>
        );
    }
}