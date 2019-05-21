import React, { Component, Fragment } from 'react';

import axios from 'axios'
import './style.css'

class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.match.params.id,
            loading: true,
            data: {}
        };
    }

    componentDidMount(){
        axios.all([
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}`),
            axios.get(`https://api.mercadolibre.com/items/${this.state.id}/description`)    
        ]).then(([item, description]) => {
                console.log(item, description)
                this.setState({
                    data: {
                        ...item.data,
                        description: description.data.plain_text
                    },
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render(){
        //console.log(this.state.data)
        const content = this.state.loading ? <div>Carregando</div> : <div>oi</div>

        const { data } = this.state
        if (!Object.keys(data).length){
            return (
                <Fragment>
                    { content }
                </Fragment>
                
            );
        }

        return (
            <Fragment>
                <div className="mdl-shadow--2dp">

                    <div className="mdl-grid">
                        <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                            <img src={ data.pictures[0].url } className="img-product" />
                        </div>

                        <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                            <h1>{ data.title }</h1>

                            <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                                Comprar
                            </button>
                        </div>
                    </div>

                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone">
                            <p> { data.description } </p>
                        </div>
                    </div>

                    
                    
                </div>
                
            </Fragment>
        );
    }
}

export default Product;