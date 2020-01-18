import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types and Action Creators */
const { Types, Creators } = createActions({
  // Ducks
  heroSuccess: ['data'],
});

export const HeroTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  heroes: [
    {
      background: 'images/hero.jpg',
    },
  ],
});

/* Reducers */
export const heroSuccess = (state, { data }) => {
  return state.merge({ heroes: [...data] });
};

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.HERO_SUCCESS]: heroSuccess,
});
