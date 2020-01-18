import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types and Action Creators */
const { Types, Creators } = createActions({
  // Ducks
  nextTripsSuccess: ['data'],
});

export const NotificationTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  nextTrips: [
    {
      slug: 'africa-do-sul-2020',
      name: 'África do Sul',
      date: 'Março/2020',
      background: {
        position: 'center',
        image: 'images/cape-town.jpg',
      },
    },
    {
      slug: 'china-2020',
      name: 'China',
      date: 'Julho/2020',
      background: {
        position: 'center',
        image: 'images/china.jpg',
      },
    },
    {
      slug: 'india-2020',
      name: 'Índia',
      date: 'Novembro/2020',
      background: {
        position: 'center',
        image: 'images/india.jpg',
      },
    },
  ],
});

/* Reducers */
export const nextTripsSuccess = (state, { data }) => {
  return state.merge({ nextTrips: [data] });
};

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.NEXT_TRIPS_SUCCESS]: nextTripsSuccess,
});
