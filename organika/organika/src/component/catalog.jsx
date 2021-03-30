import React, { Component } from 'react';
import Product from './product';
import ProductService from '../services/productService';
    
import"./catalog.css";

class Catalog extends Component {
state = { 
    catalog: []
};

//  super();
    //console.log("I'm the constructor");
//}
    render() {
        return(
            <div className="catalog-page">
                <h3>This is our amazing catalog {this.state.catalog.length} products</h3>

                {this.state.catalog.map((p) => (<Product key={p.id} data={p}></Product>
                ))}
            </div>
        );
    }


    componentDidMount(){
        console.log("Load data now");
        // call the service, get the catalog and put the catalog in the state
        let service = new ProductService();
        var data= service.getProducts();

        this.setState({ catalog: data });

    }
}
export default Catalog;