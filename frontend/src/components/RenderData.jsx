import React from 'react';

const RenderData = ({ musician, song, genre, year }) => {
  return (
    <tbody>
      <tr>
        <td>{musician}</td>
        <td>{song}</td>
        <td>{genre}</td>
        <td>{year}</td>
      </tr>
    </tbody>
  );
};

export default RenderData;
