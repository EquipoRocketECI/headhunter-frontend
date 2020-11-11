import React from 'react';
import IdeaListItem from './IdeaListItem';

export default class IdeaListByUser extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const list =this.props.ideaList.map((idea) => (
            <IdeaListItem
                id={idea.id}
                nombre={idea.nombre}
                descripcion={idea.descripcion}
                montoLinite={idea.montoLinite}
                montoRecolectado={idea.montoRecolectado}
                categoria={idea.categoria}
                calificacion={idea.calificacion}
                fechaPublicacion={idea.fechaPublicacion}
                imagen={idea.imagen}
                fase={idea.fase}
                pequenasDonaciones={idea.pequenasDonaciones}
                grandesInversiones={idea.grandesInversiones}
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