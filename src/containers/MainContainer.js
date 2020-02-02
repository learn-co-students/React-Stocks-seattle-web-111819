import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    sort: "abc",
    filter: "None",
    stocks: []
    }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(r => r.json())
      .then(data => this.setState({stocks: data.map(stock => ({...stock, owned: false}))}))
  }

  onSortChange = sort => this.setState({sort: sort})
  onFilterChange = filter => this.setState({filter: filter})

  sortAndFilterStocks = () => {
    let {stocks, sort, filter} = this.state
    if (filter !== "None") stocks = stocks.filter(stock => stock.type === filter)
    if (sort === "abc") stocks.sort((a,b) => a.name < b.name ? -1 : 1)
    if (sort === "$") stocks.sort((a,b) => a.price < b.price ? -1 : 1)
    return stocks
  }

  sendOwnedStocks = () => this.sortAndFilterStocks().filter(stock => stock.owned)
  sendUnownedStocks = () => this.sortAndFilterStocks().filter(stock => !stock.owned)

  onClickStock = clicked => this.setState(prev => ({
    stocks: prev.stocks.map(stock => (stock.id === clicked.id ? {...stock, owned: !stock.owned} : stock))
  }))

  render() {
    let {sort, filter} = this.state
    return (
      <div>
        <SearchBar
          sort={sort}
          filter={filter}
          onSortChange={this.onSortChange}
          onFilterChange={this.onFilterChange}
        />

          <div className="row">
            <div className="col-6">

              <StockContainer 
                stocks={this.sendUnownedStocks()}
                onClickStock={this.onClickStock}
              />

            </div>
            <div className="col-6">

              <PortfolioContainer 
                stocks={this.sendOwnedStocks()}
                onClickStock={this.onClickStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
