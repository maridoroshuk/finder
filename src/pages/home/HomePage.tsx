import React from 'react';
import { Tiles } from 'pages/home/tiles/Tiles';

import cn from 'pages/home/Homepage.module.scss';

export const HomePage = () => {
  return (
    <div className={cn.content}>
      <h2 className={cn.title}>Join 2 million+ Australians finding better</h2>
      <p className={cn.description}>
        Finder's team of 40+ experts will help you find the right choices in
        over 100 categories.
      </p>
      <Tiles />
    </div>
  );
};
