import React from 'react';
import { IItems } from 'utils/interfaces';

const Items: React.FC<IItems> = ({ children, ...props }) =>
  React.createElement('a-asset-item', props, children);

export default Items;