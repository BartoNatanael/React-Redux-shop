import React, { Component } from 'react';
import './App.css';
import Products from './components/Products';
import Filter from './components/Filter'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        products:[],
        filteredProducts:[],
        sort: '',
        size: '',
        cartItem: []
    };
    this.handleChangeSort = this.handleChangeSort.bind(this)
}
  componentWillMount(){
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredProducts: data
    }))
  }

  handleChangeSort(e){
    this.setState({
      sort: e.target.value
    });
    this.listProducts();
  }

  listProducts = () => {
    this.setState(state => {
      if (state.sort !== '') {
        state.products.sort((a, b) =>
          (state.sort === 'lowestprice'
            ? ((a.price > b.price) ? 1 : -1)
            : ((a.price < b.price) ? 1 : -1)));
      } else {
        state.products.sort((a, b) => (a.id > b.id) ? 1 : -1);
      }
      if (state.size !== '') {
        return { filteredProducts: state.products.filter(a => a.availableSizes.indexOf(state.size.toUpperCase()) >= 0) };
      }
      return { filteredProducts: state.products };
    })
  }
  handleSortChange = (e) => {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
    this.listProducts();
  }

  render(){
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart Application</h1>
        <hr/>
        <div className="row">
          <div className="col-md-8">
            <Filter size={this.state.size}
            sort={this.state.sort}
            count={this.state.filteredProducts.length}
            handleChangeSize={this.handleChangeSize}
            handleChangeSort={this.handleChangeSort}
            />
            <hr/>
            <Products 
            products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
          </div>
          <div className='col-md-4'>

          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
