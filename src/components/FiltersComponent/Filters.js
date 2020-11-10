import React from 'react';
import { List, ListItem, Divider, FormGroup, FormControlLabel, Checkbox, RadioGroup, Radio, TextField, InputAdornment, Typography } from '@material-ui/core';
import './css/filters.css';
import NumberFormat from 'react-number-format';

import { orange } from '@material-ui/core/colors';

export class Filters extends React.Component {
    
    constructor(props) {
        super(props);
        const INFINITY=Number.MAX_SAFE_INTEGER;//wanted to use JavaScript's Number.POSITIVE_INFINITY, but JSON doesn´t allow it
        const NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY;
        this.state = {
            rangeRadioValue: "none",
            selectedCategories: {
                Moda: false,
                Tecnología: false,
                Entretenimiento: false,
                Educación: false,
                Cultura: false
            },
            investmentRange: {
                lowBound: 0,
                highBound: INFINITY
            }

        }
        this.handleInvestmentChange = this.handleInvestmentChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
    }

    handleInvestmentChange(e) {
        const INFINITY=Number.MAX_SAFE_INTEGER;
        const NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY;
        this.setState({
            rangeRadioValue: e.target.value
        });
        switch (this.state.rangeRadioValue) {
            case "low":
                this.setState({
                    investmentRange: {
                        lowBound: 0,
                        highBound: 100000
                    }
                });
                break;
            case "mid":
                this.setState({
                    investmentRange: {
                        lowBound: 100000,
                        highBound: 250000000
                    }
                });
                break;
            case "high":
                this.setState({
                    investmentRange: {
                        lowBound: 250000000,
                        highBound: INFINITY
                    }
                });
                break;
            default:
                this.setState({
                    investmentRange: {
                        lowBound: 0,
                        highBound: INFINITY
                    }
                });
                break;
        }

    }

    handleAreaChange(e) {
        const categories = this.state.selectedCategories;
        this.setState({ selectedCategories: { ...categories, [e.target.name]: e.target.checked } });
    }

    render() {
        const categories = Object.keys(this.state.selectedCategories);
        const categoryCheckboxes = categories.map((category, i) =>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={this.state.selectedCategories.category}
                        onChange={this.handleAreaChange}
                        name={category}
                        color="primary"
                    />
                }
                label={category}
            />
        );
        return (
            <React.Fragment>
                <br/><br/>
                <Typography variant="h4" align="center"  style={{ color: orange[900] }}>Filtros</Typography>
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
                                        investmentRange: {
                                            highBound: this.state.investmentRange.highBound,
                                            lowBound: parseInt(e.target.value) || 0
                                        }

                                    })
                                }} margin="Low bound" label="límite inferior" variant="outlined" defaultValue="0" />
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
                                            investmentRange: {
                                                highBound: parseInt(e.target.value) || 0,
                                                lowBound: this.state.investmentRange.lowBound
                                            }
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
                            {categoryCheckboxes}
                        </FormGroup>
                    </ListItem>
                </List>
            </React.Fragment>

        );
    }
}