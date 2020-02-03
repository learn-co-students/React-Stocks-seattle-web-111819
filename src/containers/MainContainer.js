import React, { Component } from 'react';
import StockContainer from './StockContainer'
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
      // Add an 'owned' attribute, defaulting to false, for each stock on fetch
      .then(data => this.setState({stocks: data.map(stock => ({...stock, owned: false}))}))
  }

  onSortChange = sort => this.setState({sort: sort})
  onFilterChange = filter => this.setState({filter: filter})

  sortAndFilterStocks = () => {
    let {stocks, sort, filter} = this.state
    // If the filter is set to anything other than "None", then filter by that value
    if (filter !== "None") stocks = stocks.filter(stock => stock.type === filter)
    // Sort ascending by either name or price, based on the sort value
    if (sort === "abc") stocks.sort((a,b) => a.name < b.name ? -1 : 1)
    if (sort === "$") stocks.sort((a,b) => a.price < b.price ? -1 : 1)
    return stocks
  }

  // Filter stocks by owned or not in order to pass to the container
  sendOwnedStocks = () => this.sortAndFilterStocks().filter(stock => stock.owned)
  sendUnownedStocks = () => this.sortAndFilterStocks().filter(stock => !stock.owned)

  onClickStock = clicked => this.setState(prev => ({
    // Toggles the owned attribute of the clicked stock
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
                header="Stocks"
                stocks={this.sendUnownedStocks()}
                onClickStock={this.onClickStock}
              />
            </div>
            <div className="col-6">
              {/* No longer using a separate container for Portfolio */}
              <StockContainer 
                header="Portfolio"
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