import React from 'react';
import { ShowMoreButton } from 'components/buttons/show-more/ShowMoreButton';
import { Tile } from 'components/tile/Tile';
import { useCollapse } from 'hooks/useCollapse';

import style from 'pages/home/tiles/Tiles.style.module.css';

import data from '_data/categories.json';

export const Tiles = () => {
  const { collapsed, handleCollapseChange } = useCollapse();
  const categories = !collapsed ? data.slice(0, 6) : data;
  const button_text = `Show ${!collapsed ? 'more' : 'less'} categories`;

  return (
    <div className={style.section}>
      {categories.map((tile) => (
        <Tile key={tile.id} tile={tile} />
      ))}
      <ShowMoreButton collapsed={collapsed} handleClick={handleCollapseChange}>
        {button_text}
      </ShowMoreButton>
    </div>
  );
};
