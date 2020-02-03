import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

 ownedStocks = () => {
    return this.props.ownedStocks.map(stock => {
      return <div><Stock stock={stock} onBuyStock={this.props.onBuyStock} /></div>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.ownedStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
