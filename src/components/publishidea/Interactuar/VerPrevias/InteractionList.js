import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import './interactionList.css'

export class InteractionList extends React.Component {

  constructor(props) {

    super(props);
  }

  render() { 
    const interactionList = this.props.interactionList.map((interaction, i) => {
        
      return (
        <div>
          <Card className="root">

            <h3 className="e"> {interaction.usuario} </h3>
            
            <div className="color">
            <CardContent>
              <h4 className="comentario">
                {interaction.comentario}
              </h4>

              <h4 className="calificacion">
                Calificación: {interaction.calificacion}
              </h4>
            </CardContent>
            </div> 

          </Card><br/>         
        </div>

      );
    });


    return (
      <div>
        {interactionList}
      </div>
    );

  }

}

export default InteractionList;