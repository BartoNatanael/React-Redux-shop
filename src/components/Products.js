import React, { Component } from 'react';
import util from "../util";
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

class Products extends Component {
   componentWillMount(){
    fetchProducts();
 
   }
   
    render(){
        const productItems = this.props.products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
                <div className="thumbnail text-center bg-secondary">
                    <a 
                        href={`#${product.id}`} 
                        onClick={this.props.handleAddToCart}
                    >
                        <img src={`/products/${product.sku}_2.jpg`} alt={product.title}/>
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <div>
                        <b>{util.formatCurrency(product.price)}</b>
                        <button 
                        className="btn btn-primary"
                        onClick={(e)=>this.props.handleAddToCart(e,product)}>
                            Add To Card
                        </button>
                    </div>
                </div>
            </div>)
        )
        return(
            <div className="row">
                {productItems}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    // cartItems: state.cart.items,
  });

export default connect(mapStateToProps,(fetchProducts))(Products)