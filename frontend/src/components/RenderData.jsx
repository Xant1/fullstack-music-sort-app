import React from 'react';

const RenderData = ({ musician, song, genre, year }) => {
  return (
    <tr>
      <td>{`${musician}`}</td>
      <td>{`${song}`}</td>
      <td>{genre}}</td>
      <td>{year}</td>
    </tr>
  );
};

export default RenderData;
