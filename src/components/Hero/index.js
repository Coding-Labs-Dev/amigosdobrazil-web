import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/components/Button';

import { Container, Banner, Content } from './styles';

export default function Hero({ heroes }) {
  return (
    <Container>
      <Banner background={heroes[0].background} />
      <Content>
        <h1>Experiências Únicas</h1>
        <h2>com os melhroes roteiros de viagens</h2>
        <Button>Ver Roteiros</Button>
      </Content>
    </Container>
  );
}

Hero.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
