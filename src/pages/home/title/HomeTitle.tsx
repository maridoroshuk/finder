import React from 'react';

import cn from 'pages/home/title/HomeTitle.module.scss';

export const HomeTitle = () => {
  return (
    <>
      <h2 className={cn.title}>Join 2 million+ Australians finding better</h2>
      <p className={cn.description}>
        Finder's team of 40+ experts will help you find the right choices in
        over 100 categories.
      </p>
    </>
  );
};
