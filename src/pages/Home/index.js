import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  Hero,
  Grid,
  TravelItinerary,
  Button,
  Banner,
  Video,
  ContactForm,
} from '~/components';

import { Container, Card, Gradient } from './styles';

export default function Home({ history }) {
  const { nextTrips } = useSelector(state => state.nextTrips);
  const { heroes } = useSelector(state => state.heroes);
  const { whyUs } = useSelector(state => state.whyUs);
  const { videos } = useSelector(state => state.videos);

  return (
    <Container>
      <Hero heroes={heroes} />
      <Grid>
        {nextTrips.map(({ slug, name, date, background }) => (
          <TravelItinerary
            key={slug}
            slug={slug}
            name={name}
            date={date}
            background={background}
            history={history}
          />
        ))}
      </Grid>
      <div style={{ paddingBottom: 64 }}>
        <Button>Ver Mais Roteiros</Button>
      </div>
      <Banner background="images/why-us.jpg">
        <Grid>
          <h5>Porque Viajar Conosco?</h5>
        </Grid>
        <Grid>
          {whyUs.map(({ title, text }, index) => (
            <Card key={title}>
              <h6>
                {String(index + 1).padStart(2, '0')} {title}
              </h6>
              <p>{text}</p>
            </Card>
          ))}
        </Grid>
      </Banner>
      <Gradient>
        <div className="background">
          <div className="gradient" />
          <img src="images/background-sand.jpg" alt="" />
        </div>
        <Grid>
          <h5>O que dizem sobre nós?</h5>
        </Grid>
        <Grid alignItems="flex-end">
          {videos.map((value, index) => (
            <Video key={value} src={value} margin={index * 64} />
          ))}
        </Grid>
        <ContactForm />
      </Gradient>
    </Container>
  );
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};
