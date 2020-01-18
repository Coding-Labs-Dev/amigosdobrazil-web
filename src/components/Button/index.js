import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles';

export default function ButtonComponent({ children }) {
  return <Button>{children}</Button>;
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
