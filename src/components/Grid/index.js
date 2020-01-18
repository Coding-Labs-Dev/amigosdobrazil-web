import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Grid({ children, alignItems }) {
  return <Container alignItems={alignItems}>{children}</Container>;
}

Grid.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

Grid.defaultProps = {
  alignItems: 'flex-start',
};
