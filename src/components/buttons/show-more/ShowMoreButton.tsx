import React from 'react';

import {
  faChevronDown,
  faChevronUp,
} from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import cn from 'components/buttons/show-more/ShowMoreButton.module.scss';

export const ShowMoreButton = ({
  handleClick,
  collapsed,
  children,
}: ShowMoreButtonProps) => {
  const icon = !collapsed ? faChevronDown : faChevronUp;

  return (
    <div className={cn.button_container}>
      <button type="button" onClick={handleClick} className={cn.show_button}>
        {children}
        <FontAwesomeIcon icon={icon as IconProp} />
      </button>
    </div>
  );
};
