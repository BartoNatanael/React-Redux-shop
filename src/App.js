import React, { Component } from 'react';
import { Provider } from "react-redux";
import './App.css';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';
import store from './store'

class App extends Component {
  

// componentWillMount() {
//   console.log(this.state.filteredProducts)
//   if (localStorage.getItem('cartItems')) {
//     this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) });
//   }}


  // handleRemoveFromCart = (e, product) => {
  //   this.setState(state => {
  //     const cartItems = state.cartItems.filter(a => a.id !== product.id);
  //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //     return { cartItems: cartItems };
  //   })
  // }
 
  

  render(){
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Ecommerce Shopping Cart Application</h1>
          <hr/>
          <div className="row">
            <div className="col-md-8">
              <Filter 
              // size={this.state.size}
              // sort={this.state.sort}
              // count={this.state.filteredProducts.length}
              // handleChangeSize={this.handleChangeSize}
              // handleChangeSort={this.handleChangeSort}
              />
              <hr/>
              <Products 
              // products={this.state.filteredItems} handleAddToCart={this.handleAddToCart} 
              />
            </div>
            <div className='col-md-4'>
              <Basket 
              // cartItems={this.state.cartItems}
              // handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </div>
          </div>
          
        </div>
      </Provider>
    );
  }
}

export default App;
