import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {




  // write some logic that checks the type ie. this.props.type then sorts the card array dependent on the type that is being passed down

  // write another function that takes the sorted cards array and maps over them to transform each element into a <Stock> component

  mapStocks = () => {
    return this.props.allStocks.map(stock => {
      return <div><Stock key={stock.id} onBuyStock={this.props.onBuyStock} stock={stock} /></div>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.mapStocks()
        }
      </div>
    );
  }

}

export default StockContainer;
