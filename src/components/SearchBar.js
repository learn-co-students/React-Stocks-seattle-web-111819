import React from 'react';

const SearchBar = props => {

  const handleSort = e => {
    props.onSortChange(e.target.value)
  }

  const handleFilter = e => {
    props.onFilterChange(e.target.value)
  }

  return (
    <div style={{margin: "auto", width: "max-content"}}>

      <strong>Sort by: </strong>
      <label>
        <input type="radio" value="abc" checked={props.sort === "abc" ? true : false} onChange={handleSort}/>
        Alphabetically 
      </label>
      <label>
        <input type="radio" value="$" checked={props.sort === "$" ? true : false} onChange={handleSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter: </strong>
        <select value={props.value} onChange={handleFilter}>
          <option value="None">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
