import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  displayMyStock = () => {
    return this.props.myStocks.map(stock => {
      return <div><Stock key={stock.id? stock.id : stock.name} stock={stock} onTransferStock={this.props.onTransferStock} /></div>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.displayMyStock()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
