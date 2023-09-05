import React from 'react';
import { Tiles } from 'pages/home/tiles/Tiles';
import { HomeTitle } from 'pages/home/title/HomeTitle';

import cn from 'pages/home/Homepage.module.scss';

export const HomePage = () => {
  return (
    <div className={cn.content}>
      <HomeTitle />
      <Tiles />
    </div>
  );
};
