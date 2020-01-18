import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types and Action Creators */
const { Types, Creators } = createActions({
  // Ducks
  videoSuccess: ['data'],
});

export const VideoTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  videos: ['videos/video01.jpg', 'videos/video02.jpg', 'videos/video03.jpg'],
});

/* Reducers */
export const videoSuccess = (state, { data }) => {
  return state.merge({ videos: [...data] });
};

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.VIDEO_SUCCESS]: videoSuccess,
});
