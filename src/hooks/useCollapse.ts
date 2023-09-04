import React, { useState } from 'react';

export const useCollapse = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapseChange = () => {
    setCollapsed(collapsed ? false : true);
  };

  return { collapsed, handleCollapseChange };
};
