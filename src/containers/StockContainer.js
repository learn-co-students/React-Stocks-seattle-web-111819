import React from 'react';
import Stock from '../components/Stock'

const StockContainer = props => {

  const displayStocks = () => props.stocks.map(stock => <Stock key={stock.id} stock={stock} onClickStock={props.onClickStock} />)

  return (
    <div>
      <h2>Stocks</h2>
      {displayStocks()}
    </div>
  );
}

export default StockContainer;