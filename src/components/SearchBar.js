import React from 'react';

const SearchBar = (props) => {

const handleFilterChange = (e) => {
  //console.log(e.target.value)
  props.onFilterChange(e.target.value)
}

const handleSortChange = (e) => {
  props.onSortChange(e.target.value)
}

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="abc" checked={props.sort === "abc" ? true : false} onChange={handleSortChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="$" checked={props.sort === "$" ? true : false} onChange={handleSortChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select value={props.filter} onChange={handleFilterChange}>
          <option value="none">None</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
