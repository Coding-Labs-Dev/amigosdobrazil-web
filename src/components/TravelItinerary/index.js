import React from 'react';
import PropTypes from 'prop-types';

import { Container, Background } from './styles';

export default function TravelItinerary({
  slug,
  background,
  name,
  date,
  history,
}) {
  function handleClick(e) {
    e.preventDefault();
    history.push(`roteiros/${slug}`);
  }
  return (
    <Container onClick={handleClick}>
      <Background
        background={background.image}
        position={background.position}
      />
      <div className="container">
        <h3>{name}</h3>
        <h4>{date}</h4>
      </div>
    </Container>
  );
}

TravelItinerary.propTypes = {
  history: PropTypes.shape().isRequired,
  slug: PropTypes.string.isRequired,
  background: PropTypes.shape({
    position: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
