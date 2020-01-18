import React from 'react';
import PropTypes from 'prop-types';

import { Spacer, Container, Video } from './styles';

export default function VideoContainer({ margin, src }) {
  return (
    <Container>
      <Video src={src} margin={margin} />
      <Spacer margin={margin} />
    </Container>
  );
}

VideoContainer.propTypes = {
  margin: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};
