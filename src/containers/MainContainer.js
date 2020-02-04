import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      owned: [],
      serial: 1,
      filter: "none",
      sort: "$"
    }
    //this.getStocks() could also go here in the constructor 
  }

  componentDidMount() {
    this.getStocks()
  }

  getStocks = () => {
    fetch("http://localhost:3000/stocks")
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      this.setState({
        stocks: data
      })
    })
  }

  buyStock = (stock) => {
    this.setState(prevState => ({
      owned: [...prevState.owned, {...stock, myId: prevState.serial}],
      serial: prevState.serial + 1  
    }))
  }

  sellStock = (stock) => {
    this.setState(prevState => ({
      owned: prevState.owned.filter(item => item.myId !== stock.myId)
    }))
  }

  onFilterChange = (value) => {
    this.setState({
      filter: value  
    })
  }

  onSortChange = (value) => {
    this.setState({
      sort: value
    })
  }

  filterSortStocks = () => {
    let stocks = this.state.stocks
    if (this.state.filter !== "none") {
      stocks = stocks.filter(stock => stock.type === this.state.filter)
    } 
    if (this.state.sort === "$") { 
      stocks.sort((a,b) => (a.price < b.price) ? -1 : 1)
    } else {
      stocks.sort((a,b) => (a.name < b.name) ? -1 : 1)
    }
    return stocks
  }

  render() {
    return (
      <div>
        <SearchBar onFilterChange={this.onFilterChange} onSortChange={this.onSortChange} filter={this.state.filter} sort={this.state.sort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filterSortStocks()} onClickStock={this.buyStock}/>
              {/* was this.state.stocks before filter */}

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.owned} onClickStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
