import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import './Payments.css';

import {
    Button, FormControl, Input, InputLabel, Typography,
    Select, MenuItem, TextField, FormGroup, FormControlLabel,
    Checkbox, IconButton, Tooltip, Paper
} from '@material-ui/core';

import NumberFormat from 'react-number-format';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider, withStyles, makeStyles } from '@material-ui/core/styles';


const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);
export class Payments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recordarTarjeta: false
        }
        this.handleRecordarTarjeta = this.handleRecordarTarjeta.bind(this);


    }
    handleRecordarTarjeta(e) {
        this.setState({
            recordarTarjeta: e.target.checked
        });

        localStorage.setItem("recordarTarjeta", this.state.recordarTarjeta);

    }


    handleSubmit(e){
        e.preventDefault();
        window.location.href = "/idea";
    }

    render() {
        return (
            <div class="modal">
                <div class="modal__container">
                    <div class="modal__featured">

                        <div class="modal__circle"></div>
                        <img  class="modal__product" />
                    </div>
                    <div class="modal__content">
                        <h2>Sus datos de pago</h2>

                        <form>
                            <ul class="form-list">
                                <li class="form-list__row">
                                    <label>Nombre</label>
                                    <input className="inputPayment" type="text" name="" required="" />
                                </li>
                                <li class="form-list__row">
                                    <label>Número de tarjeta</label>
                                    <div id="input--cc" class="creditcard-icon">
                                        <input className="inputPayment" type="text" name="cc_number" required="" />
                                    </div>
                                </li>
                                <li class="form-list__row form-list__row--inline">
                                    <div>
                                        <label>Fecha de vencimiento</label>
                                        <div class="form-list__input-inline">
                                            <input className="inputPayment" type="text" name="cc_month" placeholder="MM" pattern="\\d*" minlength="2" maxlength="2" required="" />
                                            <input className="inputPayment" type="text" name="cc_year" placeholder="YY" pattern="\\d*" minlength="2" maxlength="2" required="" />
                                        </div>
                                    </div>
                                    <div>
                                    <label>CVV</label>
                                        <input className="inputPayment" type="text" name="cc_cvc" placeholder="123" pattern="\\d*" minlength="3" maxlength="4" required="" />
                                    </div>
                                </li>
                                <li class="form-list__row form-list__row--agree">
                                    <label>
                                        Desea recordar su tarjeta?{<GreenCheckbox checked={this.state.recordarTarjeta} onChange={this.handleRecordarTarjeta} name="gilad" />}
                        </label>
                                </li>
                                <li>
                                    <button type="submit" class="button" onClick={this.handleSubmit}>Pagar</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div >
        );
	}
}