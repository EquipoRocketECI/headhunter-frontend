import React from 'react';
import IdeaListItem from './IdeaListItem';

export default class IdeaListByUser extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        console.log(this.props.ideaList);
        const list =this.props.ideaList.map((idea) => (
            <IdeaListItem
                id={idea.id}
                nombre={idea.nombre}
                descripcion={idea.descripcion}
                montoLimite={idea.montoLimite}
                montoRecolectado={idea.montoRecolectado}
                categoria={idea.categoria}
                calificacion={idea.calificacion}
                fechaPublicacion={idea.fechapublicacion}
                imagen={idea.imagen}
                fase={idea.fase}
                pequenasDonaciones={idea.pequenasdonaciones}
                grandesInversiones={idea.grandesinversiones}
            />
        )
        )
        return (
            <React.Fragment>
                {list}
            </React.Fragment>

        )
    }
}