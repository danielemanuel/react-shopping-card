import React, { Component } from 'react';
import '../css/App.css';

const Home = () => {

 
    return (
      <div className="wrapper">
        <Products addProduct={this.addProduct.bind(this)} />
        <Cart products={this.state.products} total={this.state.total}/>
      </div>
    );
  }

export default Home;
