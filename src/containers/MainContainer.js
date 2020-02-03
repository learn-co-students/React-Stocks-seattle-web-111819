import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    serial: 1 
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => this.setState({stocks: data}))
  }

  // stocksArray = (sArray) => {
  //   this.setState({
  //     stocks: sArray.map((stock) => ({
  //       ...stock, isClicked: false
  //     }))
  //   })
  // }

  buyStock = (boughtStock) => {
    // boughtStock.isClicked = true

    this.setState(prevState => {
      return {
        portfolio: [...prevState.portfolio, {...boughtStock, id: prevState.serial}],
        serial: prevState.serial + 1
      }
    })
    console.log(boughtStock)
  }

  sellStock = (soldStock) => {
    this.setState(prevState => {
      return {
        portfolio: prevState.portfolio.filter(stock => stock.id !== soldStock.id)
      }
    }) 
  }

  sortAlphabetically = (stocks) => {
    let alphabetical = stocks.sort((a, b) => {
      return a.ticker.localeCompare(b.ticker)
    })
    this.setState({
      stocks: alphabetical
    })
  }

  filterStocks = (value) => {
    let valueFilter = this.state.stocks.filter(stock => stock.type === value)
    this.setState({
      stocks: valueFilter 
    })
  }

  sortPrice = (stocks) => {
    let priceSort = stocks.sort((a, b) => {
      return a.price - b.price
    })
    this.setState({
      stocks: priceSort
    })
  }

  render() {
    return (
      <div>
        <SearchBar stocks={this.state.stocks} 
        onSortByName={this.sortAlphabetically}
        onSortPrice={this.sortPrice}
        onFilterStock={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} 
              onTransferStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.portfolio} 
              onTransferStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
