import React from 'react';

import { Item } from './Item.js';

import './css/Explore.css';
import { MemoryRouter, Route, Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@material-ui/lab';

export class Explore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allItems:[[]],
            items: [],
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

    loadItems(items){
        console.log(items);
        this.setState({
            allItems:items,
            items:items[0],
            page:1
        })
    }

    getPageData() {
        //mirar que filtros están seleccionados
        //de acuerdo con eso invocar métodos adecuados para buscar en el backend -->ahora se hace en general.js
        //armar arreglo de items con la info obtenida.
        //fijar estado --> como aparece abajo.



        //Eventualmente cargará datos del backend
        this.setState({
            items: this.state.allItems[this.state.page - 1],
            totalPages: this.state.allItems.length
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