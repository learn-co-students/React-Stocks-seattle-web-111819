import React from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = props => {

  const displayStocks = () => props.stocks.map(stock => <Stock key={stock.id} stock={stock} onClickStock={props.onClickStock} />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {displayStocks()}
    </div>
  );
}

export default PortfolioContainer;