import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/App.css';
import '../css/Products.css';

const products = [
  {name:'book at ', price:12.49, qtd: 1, category: 'Tax free products'},
  {name:'music CD at', price:14.99, qtd: 1, category: '10% Product Taxes'},
  {name:'chocolate bar at ', price:0.85, qtd: 1, category: 'Tax free products'},
  {name:'imported box of chocolates at ', price:10.00, qtd: 1, category: '5% Product Taxes'},
  {name:'imported bottle of parfume at ', price:47.50, qtd: 1, category: '15% Product Taxes'},
  {name:'imported bottle of parfume at ', price:27.99, qtd: 1, category: '15% Product Taxes'},
  {name:'bottle of perfume at ', price:18.99, qtd: 1, category: '10% Product Taxes'},
  {name:'packet of headache pills at ', price:9.75, qtd: 1, category: 'Tax free products'},
  {name:'box of imported chocolates at ', price:11.25, qtd: 1, category: 'Tax free products'}
];


export default class Products extends Component {

  constructor(){
    super();
    this.categories = [];
    this.productsArray = [{
      category : '',
      products: []
    }];
    this.d;
  }

  handleSelect(index, last) {
    console.log('Selected tab: ' + (index + 1) + ', Last tab: ' + last);
  }

  doReduce(){
    this.d = products.reduce(this.reducer, []);
  }

  reducer(ac, item){
    if(!ac.hasOwnProperty(item.category)){
      ac[item.category] = [];
      ac[item.category].push(item);
    } else {
      ac[item.category].push(item);
    }
    return ac;
  }

  selectProduct(item){
    this.props.addProduct(item);
  }

  mountTabs(){
    products.map((p) => {
        if(this.categories.indexOf(p.category) < 0){
          this.productsArray.push({
            category: p.category
          })
          this.categories.push(p.category);
        }
    });
    let tabs = this.productsArray.map((c) => {
      if(c.category){
        return(
          <Tab>{c.category}</Tab>
        )
      }

    });

    return(
      <TabList className="tabs-menu">
        {tabs}
      </TabList>
    )
  }

  mountTabContent() {
    return(
      this.categories.map((item) => {
          return (
            <TabPanel>
              {this.mountTable(item)}
            </TabPanel>
          )
      })
    )
  }

  mountTable(category){
    let listItems = this.d[category].map((item) => {
      return (
            <li className="list-item">
              1 {item.name} ${item.price}
              <button className="button-add" onClick={this.selectProduct.bind(this, item)}>+</button>
            </li>

        );
      });

      return (
        <div>
          <ul>
            {listItems}
          </ul>
        </div>
      );
    }

  render() {
    this.doReduce();
    return (
      <div>
        <h3 className="title"> Products </h3>
        <Tabs onSelect={this.handleSelect}>
          {this.mountTabs()}
          {this.mountTabContent()}
        </Tabs>
      </div>
    );
  }
}

