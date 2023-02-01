import React from 'react';

import RenderData from './RenderData';

const MusicList = ({ data }) => {
  return Array.from(data).map((d) => {
    return (
      <RenderData
        key={d.id}
        musician={d.musician}
        song={d.song}
        genre={d.genre}
        year={d.year}
      />
    );
  });
};

export default MusicList;
