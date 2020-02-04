import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

renderStocks = () => {
  return this.props.stocks.map(stock => {
    return <Stock key={stock.name} stock={stock} onClickStock={this.props.onClickStock}/>
  })
}

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
