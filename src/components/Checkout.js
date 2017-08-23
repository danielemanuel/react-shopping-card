import React, { Component } from 'react';
import '../css/App.css';

export default class Checkout extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.checkout}>Checkout</button>
      </div>
    );
  }
}

