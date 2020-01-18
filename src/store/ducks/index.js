import { combineReducers } from 'redux';

import { reducer as auth } from './Auth';
import { reducer as notifications } from './Notification';
import { reducer as heroes } from './Hero';
import { reducer as nextTrips } from './NextTrips';
import { reducer as whyUs } from './WhyUs';
import { reducer as videos } from './Video';

export default () =>
  combineReducers({
    auth,
    notifications,
    heroes,
    nextTrips,
    whyUs,
    videos,
  });
