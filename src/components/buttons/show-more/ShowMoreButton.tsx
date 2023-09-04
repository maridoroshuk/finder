import React from 'react';

import {
  faChevronDown,
  faChevronUp,
} from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from 'components/buttons/show-more/ShowMoreButton.style.module.css';

export const ShowMoreButton = ({
  handleClick,
  collapsed,
  children,
}: ShowMoreButtonProps) => {
  const icon = !collapsed ? faChevronDown : faChevronUp;
  return (
    <div className={style.button_container}>
      <button type="button" onClick={handleClick} className={style.show_button}>
        {children}
        <FontAwesomeIcon icon={icon as IconProp} />
      </button>
    </div>
  );
};
