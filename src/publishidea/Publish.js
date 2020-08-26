import React from 'react';

export class Publish extends React.Component{
    constructor(props) {
        super(props);
        this.state = { nombre: "", descripcionCorta: "", descripcionLarga: ""};
        
        this.handleName = this.handleName.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    render(){


    }


}