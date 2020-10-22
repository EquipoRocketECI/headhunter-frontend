import React from 'react';

import { Item } from './Item.js';

import './css/Explore.css';
import { MemoryRouter, Route, Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@material-ui/lab';

import { orange } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';

export class Explore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.pages[0],
            page: 1,
            currentSearch: "",
            selectedFilters: {}
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(event, newPage) {
        this.setState({
            page: newPage
        }, this.getPageData);

    }

    getPageData() {
        //mirar que filtros están seleccionados
        //de acuerdo con eso invocar métodos adecuados para buscar en el backend -->ahora se hace en general.js
        //armar arreglo de items con la info obtenida.
        //fijar estado --> como aparece abajo.


        //Eventualmente cargará datos del backend
        this.setState({
            items: this.props.pages[this.state.page - 1],
            totalPages: this.props.pages.length
        })
    }

    render() {
        const itemList = this.state.items.map((item, i) => {
            return (<Item
                key={i}
                image={item.image}
                name={item.name}
                description={item.description}
            />);

        });

        return (
            <div className="mainView">
                <div className="searchResults">
                <SearchIcon style={{ color: orange[900],  fontSize: 60}} />
                <h4 className="titulo">
                    Explorar
                </h4><br/><br/><br/>
                    <div className="itemArea">
                        {itemList}
                    </div>
                    <MemoryRouter initialEntries={['/explore']} initialIndex={0}>
                        <Route>
                            {({ location }) => {
                                const query = new URLSearchParams(location.search);
                                const page = parseInt(query.get('page') || '1', 10);
                                return (
                                    <Pagination
                                        page={page}
                                        count={this.state.totalPages}
                                        renderItem={(item) => (
                                            <PaginationItem
                                                component={Link}
                                                to={`/explore${item.page === 1 ? '' : `?page=${item.page}`}`}
                                                {...item}
                                            />
                                        )}
                                        onChange={this.handlePageChange}
                                    />

                                );
                            }}
                        </Route>
                    </MemoryRouter>
                </div>

            </div>
        );
    }

}