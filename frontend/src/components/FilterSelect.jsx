import React from 'react';

const FilterSelect = ({ musicians, setSortSelect, genres, years }) => {
  const updateSortSelect = (e) => {
    setSortSelect(e.target.value === 'All' ? '' : e.target.value);
  };

  return (
    <div className='select'>
      <h1>Filter</h1>
      <b>Musicians</b>
      <select onChange={updateSortSelect}>
        <option value={'All'}>All</option>
        {Array.from(musicians).map((d, i) => (
          <option key={i} value={d}>
            {d}
          </option>
        ))}
      </select>
      <b>Genre</b>
      <select onChange={updateSortSelect}>
        <option value={'All'}>All</option>
        {Array.from(genres).map((d, i) => (
          <option key={i} value={d}>
            {d}
          </option>
        ))}
      </select>
      <b>Year</b>
      <select onChange={updateSortSelect}>
        <option value={'All'}>All</option>
        {Array.from(years).map((d, i) => (
          <option key={i} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
