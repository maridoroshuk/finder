import React from 'react';

import style from 'components/tile/Tile.style.module.css';

export const Tile = ({ tile: { title, image, url } }: TileProps) => {
  return (
    <a className={style.tile} href={url} target="_blank" rel="noreferrer">
      <img src={image} />
      <h3 className={style.title}>{title}</h3>
    </a>
  );
};
