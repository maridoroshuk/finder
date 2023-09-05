import React from 'react';
import { ShowMoreButton } from 'components/buttons/show-more/ShowMoreButton';
import { Tile } from 'components/tile/Tile';
import { useCollapse } from 'hooks/useCollapse';

import cn from 'pages/home/tiles/Tiles.module.scss';

import data from '_data/categories.json';

export const Tiles = () => {
  const { collapsed, handleCollapseChange } = useCollapse();

  const categories = !collapsed ? data.slice(0, 6) : data;
  const button_text = `Show ${!collapsed ? 'more' : 'less'} categories`;

  return (
    <div className={cn.tiles_wrapper}>
      <div className={cn.section}>
        {categories.map((tile) => (
          <Tile key={tile.id} tile={tile} />
        ))}
      </div>
      <ShowMoreButton collapsed={collapsed} handleClick={handleCollapseChange}>
        {button_text}
      </ShowMoreButton>
    </div>
  );
};
