import React from 'react';
import axios from 'axios';

const FilterSelect = ({ data, setData, reset, setReset }) => {
  const getByMusician = (e) => {
    axios
      .get('http://localhost:5555/api/music/name/' + e.target.value)
      .then((response) => setData(response.data))
      .then((error) => console.log(error));
  };

  const getByGenre = (e) => {
    axios
      .get('http://localhost:5555/api/music/genre/' + e.target.value)
      .then((response) => setData(response.data))
      .then((error) => console.log(error));
  };

  const getByYear = (e) => {
    axios
      .get('http://localhost:5555/api/music/year/' + e.target.value)
      .then((response) => setData(response.data))
      .then((error) => console.log(error));
  };

  //select unique dates for filter
  const arr = [...data];
  const nameKey = 'musician';
  const uniqueName = [
    ...new Map(arr.map((item) => [item[nameKey], item])).values(),
  ];
  const genreKey = 'genre';
  const uniqueGenre = [
    ...new Map(arr.map((item) => [item[genreKey], item])).values(),
  ];
  const yearKey = 'year';
  const uniqueYear = [
    ...new Map(arr.map((item) => [item[yearKey], item])).values(),
  ];

  return (
    <div className='select'>
      <h1>Filter</h1>
      <b>Musicians</b>
      <select onChange={getByMusician}>
        <option>-select-</option>
        {Array.from(uniqueName).map((d, i) => (
          <option key={i} value={d.musician}>
            {d.musician}
          </option>
        ))}
      </select>
      <b>Genre</b>
      <select onChange={getByGenre}>
        <option>-select-</option>
        {Array.from(uniqueGenre).map((d, i) => (
          <option key={i} value={d.genre}>
            {d.genre}
          </option>
        ))}
      </select>
      <b>Year</b>
      <select onChange={getByYear}>
        <option>-select-</option>
        {Array.from(uniqueYear).map((d, i) => (
          <option key={i} value={d.year}>
            {d.year}
          </option>
        ))}
      </select>
      <button
        className='button'
        onClick={() => {
          setReset(reset + 1);
        }}>
        Reset
      </button>
    </div>
  );
};

export default FilterSelect;
