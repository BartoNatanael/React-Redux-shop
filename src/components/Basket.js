import React, { Component } from 'react';
import util from '../util';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

let id = 0;

class Basket extends Component {
    render() {
        const {cartItems} = this.props
        return(
            <div className="alert alert-info">
                {cartItems.length===0 ? " Basket is empty" : <div> You have {cartItems.length} products in the basket
                    <div>
                        <ul>
                            {cartItems.map(item => 
                                <li key={id++}>
                                    <b>{item.title} </b>
                                     X {item.count / 2} = {util.formatCurrency(item.price * item.count / 2)}
                                    <button className="btn btn-danger"
                                    onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>
                                        X
                                    </button>
                                </li>
                            )}
                        </ul>
                        Total: {util.formatCurrency( cartItems.reduce((a,c)=> a +c.price*c.count/2, 0))}
                    </div>
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.items
})
export default connect(mapStateToProps, {removeFromCart})(Basket)