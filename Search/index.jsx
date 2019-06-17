import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Search extends Component {
    constructor(){
        super()

        this.state = {
            results: []
        };

        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(event){
        const value = event.currentTarget.value;

        if(value.length > 3){
            axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
             .then(( { data } ) => {
                this.setState({
                    results: data.results
                });
             });
        }                                                                                                                       
        
    }

    renderItem(item){
        return (
            <tr key={ item.id }>
                <td>{ item.id }</td>
                <td>{ item.title }</td>
                <td>
                    <Link to={ `/product/${item.id}` }> Abrir produto </Link>
                </td>
                
            </tr>
        )
    }

    render(){
        return (
            <div>
                <input type="text" onChange={ this.onSearch } />

                <table>
                    { this.state.results.map(this.renderItem) }
                </table>

            </div>
        );
    }
}

export default Search;