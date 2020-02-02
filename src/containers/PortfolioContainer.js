import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  displayStocks = () => this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} onClickStock={this.props.onClickStock} />)

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.displayStocks()}
      </div>
    );
  }
}

export default PortfolioContainer;