import React from 'react';
import { List, ListItem, Divider, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, TextField, InputAdornment } from '@material-ui/core';
import './css/filters.css';

export class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rangeRadioValue: "none",
            selectedAreas: {
                educacion: false,
                salud: false,
                comida: false,
                viaje: false
            },
            highRange: -1,
            lowRange: -1
        }
        this.handleInvestmentChange = this.handleInvestmentChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
    }

    handleInvestmentChange(e) {
        this.setState({ rangeRadioValue: e.target.value, lowRange: -1, highRange: -1 });

    }

    handleAreaChange(e) {
        const areas = this.state.selectedAreas;
        this.setState({ selectedAreas: { ...areas, [e.target.name]: e.target.checked } });
    }

    render() {
        return (
            <List onChange={this.props.getSelectedFilters(this.state)} className="filters">
                <ListItem className="investmentFilter">
                    <FormGroup className="customRangeForm">
                        <TextField className="customRangeInput"
                            id="lowRange"
                            size="small"
                            InputProps={{
                                startAdornment: <InputAdornment>$</InputAdornment>
                            }}
                            onChange={(e) => {
                                this.setState({
                                    rangeRadioValue: "none",
                                    lowRange: parseInt(e.target.value)
                                })
                            }} margin="Low bound" variant="outlined" />
                        <TextField className="customRangeInput"
                            id="highRange"
                            size="small"
                            InputProps={{
                                startAdornment: <InputAdornment>$</InputAdornment>
                            }}
                            onChange={
                                (e) => {
                                    this.setState({
                                        rangeRadioValue: "none",
                                        highRange: parseInt(e.target.value)
                                    })
                                }
                            } defaultValue="100.00" label="High bound" variant="outlined" />
                    </FormGroup>
                    <RadioGroup value={this.state.rangeRadioValue} onChange={this.handleInvestmentChange}>
                        <FormControlLabel value="low" control={<Radio color="black" />} label="LOW RANGE" />
                        <FormControlLabel value="mid" control={<Radio color="black" />} label="MID RANGE" />
                        <FormControlLabel value="high" control={<Radio color="black" />} label="HIGH RANGE" />
                    </RadioGroup>
                </ListItem>
                <Divider />
                <ListItem className="areaFilter">
                    <FormGroup className="areaFilterForm">
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.selectedAreas.educacion}
                                    onChange={this.handleAreaChange}
                                    name="educacion"
                                    color="black"
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
                                    color="black"
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
                                    color="black"
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
                                    color="black"
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