import React, { useState } from 'react';
import { FaArrowUp, FaArrowsAltV, FaArrowDown } from 'react-icons/fa';

const Table = ({ data, setData }) => {
  const [sorted, setSorted] = useState({});

  //sorting items
  const sortByYear = () => {
    const dataCopy = [...data];
    dataCopy.sort((dataA, dataB) => {
      if (sorted.reversed) {
        return dataA.year - dataB.year;
      }
      return dataB.year - dataA.year;
    });
    setData(dataCopy);
    setSorted({ sorted: 'year', reversed: !sorted.reversed });
  };

  const sortByName = () => {
    const dataCopy = [...data];
    dataCopy.sort((dataA, dataB) => {
      const nameA = `${dataA.musician}`;
      const nameB = `${dataB.musician}`;
      if (sorted.reversed) {
        return nameB.localeCompare(nameA);
      }
      return nameA.localeCompare(nameB);
    });
    setData(dataCopy);
    setSorted({ sorted: 'musician', reversed: !sorted.reversed });
  };

  const sortBySong = () => {
    const dataCopy = [...data];
    dataCopy.sort((dataA, dataB) => {
      const songA = `${dataA.song}`;
      const songB = `${dataB.song}`;
      if (sorted.reversed) {
        return songB.localeCompare(songA);
      }
      return songA.localeCompare(songB);
    });
    setData(dataCopy);
    setSorted({ sorted: 'song', reversed: !sorted.reversed });
  };

  const sortByGenre = () => {
    const dataCopy = [...data];
    dataCopy.sort((dataA, dataB) => {
      const genreA = `${dataA.genre}`;
      const genreB = `${dataB.genre}`;
      if (sorted.reversed) {
        return genreB.localeCompare(genreA);
      }
      return genreA.localeCompare(genreB);
    });
    setData(dataCopy);
    setSorted({ sorted: 'genre', reversed: !sorted.reversed });
  };
  //rendering arrow icon
  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowDown />;
    }
    return <FaArrowUp />;
  };

  return (
    <thead>
      <tr>
        <th onClick={sortByName}>
          <span style={{ marginRight: 10 }}>Musician</span>
          {sorted.sorted === 'musician' ? renderArrow() : <FaArrowsAltV />}
        </th>
        <th onClick={sortBySong}>
          <span style={{ marginRight: 10 }}>Song</span>
          {sorted.sorted === 'song' ? renderArrow() : <FaArrowsAltV />}
        </th>
        <th onClick={sortByGenre}>
          <span style={{ marginRight: 10 }}>Genre</span>
          {sorted.sorted === 'genre' ? renderArrow() : <FaArrowsAltV />}
        </th>
        <th onClick={sortByYear}>
          <span style={{ marginRight: 10 }}>Year</span>
          {sorted.sorted === 'year' ? renderArrow() : <FaArrowsAltV />}
        </th>
      </tr>
    </thead>
  );
};

export default Table;