import React from 'react'



const Stock = (props) => {

  const handleStockClick = () => {
    props.onTransferStock(props.stock)
  }

  // const handleSellClick = () => {
  //   props.onSellStock(props.stock)
  // }
  return (
  <div>

    <div className="card" onClick={() => handleStockClick()} >
    {/* // onClick={() => handleSellClick} */}
      <div className="card-body">
        <h5 className="card-title">{
            props.stock.name
          }</h5>
        <p className="card-text">{
            `${props.stock.ticker}: ${props.stock.price}`
          }</p>
      </div>
    </div>


  </div>
  )
};

export default Stock
