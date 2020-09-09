import React from 'react';
import { List, ListItem, Divider, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, TextField, InputAdornment, Typography } from '@material-ui/core';
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
            <React.Fragment>
                <Typography variant="h4" align="center">Filtros</Typography>
                <List onChange={this.props.getSelectedFilters(this.state)} className="filters">
                    <ListItem className="investmentFilter">
                        <Typography variant="h5">Inversión deseada</Typography>
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
                                }} margin="Low bound" label="límite inferior" variant="outlined" defaultValue="0"/>
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
                                } defaultValue="20.000" label="límite superior" variant="outlined" />
                        </FormGroup>
                        <RadioGroup value={this.state.rangeRadioValue} onChange={this.handleInvestmentChange}>
                            <FormControlLabel value="low" control={<Radio color="primary" />} label="Baja inversión" />
                            <FormControlLabel value="mid" control={<Radio color="primary" />} label="Media inversión" />
                            <FormControlLabel value="high" control={<Radio color="primary" />} label="Alta inversión" />
                        </RadioGroup>
                    </ListItem>
                    <Divider />
                    <ListItem className="areaFilter">
                        <Typography variant="h5">Categoría</Typography>
                        <FormGroup className="areaFilterForm">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.selectedAreas.educacion}
                                        onChange={this.handleAreaChange}
                                        name="educacion"
                                        color="primary"
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
                                        color="primary"
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
                                        color="primary"
                                    />
                                }
                                label="Gastronomía"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.selectedAreas.viaje}
                                        onChange={this.handleAreaChange}
                                        name="viaje"
                                        color="primary"
                                    />
                                }
                                label="Cultura"
                            />
                        </FormGroup>
                    </ListItem>
                </List>
            </React.Fragment>

        );
    }
}