import React from 'react';

import RenderData from './RenderData';

const MusicList = ({ data }) => {
  return data.map((d, i) => {
    return (
      <RenderData
        key={i}
        musician={d.musician}
        song={d.song}
        genre={d.genre}
        year={d.year}
      />
    );
  });
};

export default MusicList;
