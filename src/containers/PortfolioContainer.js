import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.myId} stock={stock} onClickStock={this.props.onClickStock}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStocks()
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
