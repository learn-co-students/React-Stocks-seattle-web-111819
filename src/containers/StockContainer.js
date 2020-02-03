import React from 'react';
import Stock from '../components/Stock'

const StockContainer = ({stocks, onClickStock, header}) => {

  const displayStocks = () => 
    // Map through and make Stock components
    stocks.map(stock => <Stock key={stock.id} stock={stock} onClickStock={onClickStock} />)

  return (
    <div>
      <h2>{header}</h2>
      {displayStocks()}
    </div>
  );
}

export default StockContainer;