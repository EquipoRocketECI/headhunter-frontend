import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';



export class InteractionListByUser extends React.Component {

  constructor(props) {

    super(props);
    this.sendJSON = this.sendJSON.bind(this);

  }

  sendJSON(event,interaccion) {
    
    event.preventDefault();

    if (localStorage.getItem('logout') === 'si'){

        fetch('https://mysterious-refuge-36454.herokuapp.com/interaccion/'+interaccion.interaccionId ,{
            method: 'DELETE'
        })
        .then(response => {
            response.json()
            alert("Eliminado exitosamente");
            window.location.reload()
        })

    }
    else {
        alert('Debe estar logueado para poder eliminar un comentario')
    }
  }

  render() { 
    const interactionList = this.props.interactionList.map((interaction, i) => {
        
      return (
        <div>
          <Card className="root">

            <h3 className="e"> {interaction.ideaNombre} </h3>
            
            <div className="color">
            <CardContent>
              <h4 className="comentario">
                {interaction.comentario}
              </h4>

              <h4 className="calificacion">
                Calificación: {interaction.calificacion}
              </h4>

              <h4 className="calificacion">
                Tipo de interacción: {interaction.tipo}
              </h4>

              <div style={{display: interaction.monto != 0 ? 'block' : 'none' }}>
                <h4 className="calificacion">
                  Monto: {interaction.monto}
                </h4>
              </div>

            </CardContent>
            </div>
            
            <div style={{display: (localStorage.getItem('username') == interaction.usuario ) ? 'block' : 'none' }}
                  onClick={(e) => this.sendJSON(e,interaction)}
            >
                <Button
                  
                  size = "small"
                  variant="contained"
                  className="blue"
                  color="secondary"
                  value={interaction}
                  
                  >
                  Eliminar Comentario
                    </Button>
              </div>

          </Card><br/><br/>   
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

export default InteractionListByUser;