import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search-bar';
//import SortDropdown from '../containers/sort-dropdown';
import ProductList from '../containers/product-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center my-3">
            <div>
              <h1>PRODUCTS</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ">
              <SearchBar />
            {/* <div className="col-sm-4">
              <p>dropdown categories</p>
            </div>
            <div className="col-sm-4">
              <SortDropdown />
            </div> */}
          </div>
        </div>
        <div className="container ">            
            <ProductList />
        </div>
      </div>
    );
  }
}