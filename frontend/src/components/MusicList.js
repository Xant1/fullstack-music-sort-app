import React from 'react';

import RenderData from './RenderData';

const MusicList = ({ data }) => {
  return data.map((d, index) => {
    return (
      <RenderData
        key={index}
        musician={d.musician}
        song={d.song}
        genre={d.genre}
        year={d.year}
      />
    );
  });
};

export default MusicList;
