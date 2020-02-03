import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  displayStock = () => {
  return this.props.stocks.map(stock => {
    return <Stock stock={stock} onTransferStock={this.props.onTransferStock} key={stock.id? stock.id : stock.name}/>
  })
}

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
        this.displayStock()
        }
      </div>
    );
  }

}

export default StockContainer;
