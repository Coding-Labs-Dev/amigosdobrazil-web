import React from 'react';
import PropTypes from 'prop-types';

import { Container, Background, Content } from './styles';

export default function Banner({ background, children }) {
  return (
    <Container>
      <Background background={background} />
      <Content>{children}</Content>
    </Container>
  );
}

Banner.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
