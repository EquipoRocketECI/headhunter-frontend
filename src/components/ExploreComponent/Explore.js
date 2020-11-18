import React from 'react';

import { Item } from './Item.js';

import './css/Explore.css';
import { MemoryRouter, Route, Link } from 'react-router-dom';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { FormControl, Input, InputBase, TextField } from '@material-ui/core';

export class Explore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allItems: [[]],
            items: [],
            page: 1,
            currentSearch: "",
            selectedFilters: {}
        }

        this.handlePageChange = this.handlePageChange.bind(this);
        this.search = this.search.bind(this);
    }

    search(ideaName) {
        fetch("http://localhost:8080/ideas?q=" + ideaName)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.loadItems(data);
            });
    }

    handlePageChange(event, newPage) {
        this.setState({
            page: newPage
        }, this.getPageData);

    }

    loadItems(items) {
        const size=10;
            var pagedItems = [];
            for (var i = 0; i < items.length; i += size)
              pagedItems.push(items.slice(i, i + size));

                    if(pagedItems.length===0)
                        pagedItems.push([]);

        this.setState({
            allItems: pagedItems,
            items: pagedItems[0],
            totalPages: pagedItems.length,
            page: 1
        })
    }

    getPageData() {
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
                name={item.nombre}
                description={item.descripcion}
                id={item.id}
                imagen={item.imagen}
            />);

        });

        return (
            <div className="mainView">
                {/* <FormControl variant=>
                    <Input/> USE FORM AND PLACE SUBMIT BUTTON ON CLICK IS ON THE FORM
                </FormControl> */}
                <TextField className="searchBar" fullWidth="true" variant="filled" placeholder="Buscar" margin="normal" InputProps={{ disableUnderline: true}} onKeyPress={(e)=>{if(e.key === "Enter") this.search(e.target.value)}}/>
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