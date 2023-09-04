import React from 'react';
import { Tiles } from 'pages/home/tiles/Tiles';

import style from 'pages/home/Homepage.style.module.css';

export const HomePage = () => {
  return (
    <div className={style.content}>
      <h2 className={style.title}>
        Join 2 million+ Australians finding better
      </h2>
      <p className={style.description}>
        Finder's team of 40+ experts will help you find the right choices in
        over 100 categories.
      </p>
      <Tiles />
    </div>
  );
};
