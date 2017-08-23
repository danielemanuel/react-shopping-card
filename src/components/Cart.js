import React, { Component } from 'react';
import '../css/App.css';
import '../css/Cart.css';

import Checkout from './Checkout';

let cartTotal = 0;
export default class Cart extends Component {
   
    mountTable(){
      let listItems = this.props.products.map((item) =>{
      if(item.qtd > 1){
        cartTotal += item.price;
          
      } else {
        cartTotal = item.price;
      }
      return (
          <li key={item.name}>
          {item.qtd} {item.name.split('at')} : ${item.total} 
          </li>
        );
      });
     
      if(listItems){
        return (
          <div>
            <ul className="Cart">
              {listItems}
            </ul>
          </div>
        );
      } else {
        return (
          <div>
            <h3>See shopping basket</h3>
          </div>
        );
      }
    }

  render() {
    return (
      <div>
        <h3 className="title"> Shopping Basket </h3>
          {this.mountTable()}
          Total: { cartTotal }
          <Checkout checkout={this.props.checkout.bind(this)}></Checkout>
      </div>
    );
  }
}

