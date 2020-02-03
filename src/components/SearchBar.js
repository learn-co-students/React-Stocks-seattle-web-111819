import React from 'react';

const SearchBar = (props) => {


  const handleFilter = e => {
    props.onFilterStocks(e.target.value)
  }
  
  const handlePriceChange = e => {
    e.target.checked ? props.onSortByPrice(props.stocks) : e.target.checked = false
  }

  const handleNameChange = e => {
    e.target.checked ? props.onSortByName(props.stocks) : e.target.checked = false
  }


  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={e => handleNameChange(e)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={e => handlePriceChange(e)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={e => handleFilter(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
