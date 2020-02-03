import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  //put state that tracks search bar changes
  // state should have some string that represents a selection ie. "alphabetically", "by price"

  state = {
    stocks: [],
    displayedStocks: [],
    ownedStocks: [],
    filteredStocks: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => this.setState({stocks: data, displayedStocks: data}))
  }
  
  buyStock = selectedStock => {
    const newOwnedStocks = [...this.state.ownedStocks]
    if(this.state.ownedStocks.includes(selectedStock)){
      let newer = newOwnedStocks.filter(stock => {
        return stock.id !== selectedStock.id
      })
      this.setState({
        ownedStocks: newer
      })
    }else{
      newOwnedStocks.push(selectedStock)
      this.setState({
        ownedStocks: newOwnedStocks
      })
    }
  }

  filteredStocks = value => {
    let filtered = this.state.stocks.filter(stock => stock.type === value)
    this.setState({
      displayedStocks: filtered
    })
  }

  sortByName = stocks => {
    let sorted = stocks.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      displayedStocks: sorted
    })
  }

  sortByPrice = stocks => {
    let sorted = stocks.sort((a,b) => a.price > b.price ? 1 : -1)
    this.setState({
      displayedStocks: sorted
    })
    console.log(sorted)
  }

  render() {
    return (
      <div>
        <SearchBar onFilterStocks={this.filteredStocks} stocks={this.state.displayedStocks} onSortByName={this.sortByName} onSortByPrice={this.sortByPrice}/>

          <div className="row">
            <div className="col-8">
              {/* in this component call you need to pass down the card array as well as the type selection ie. this.state.type */}

              <StockContainer allStocks={this.state.displayedStocks} onBuyStock={this.buyStock}  />

            </div>
            <div className="col-4">

              <PortfolioContainer ownedStocks={this.state.ownedStocks} onBuyStock={this.buyStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
