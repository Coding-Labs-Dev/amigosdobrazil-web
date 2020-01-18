import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types and Action Creators */
const { Types, Creators } = createActions({
  // Ducks
  whyUsSuccess: ['data'],
});

export const WhyUsTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  whyUs: [
    {
      title: 'Transporte Aéreo',
      text:
        'Os nossos pacotes já incluem a passagem aérea e as taxas de embarque, gerando inclusive milhas aéreas!',
    },
    {
      title: 'Transporte Terrestre',
      text:
        'Assim como o transporte aéreo, todos os translados entre os aeroportos, hotéis e passeios, estão inclusos!',
    },
    {
      title: 'Hospedagem',
      text:
        'Os nossos roteiros possuem hospedagem em hoteis 4 e 5 estrelas e com café-da-manhã incluso!',
    },
    {
      title: 'Passeios Exclusivos',
      text:
        'Passeios exlcusivos inclusos conforme o roteiro de viagem, todos acompanhados de guias locais!',
    },
  ],
});

/* Reducers */
export const whyUsSuccess = (state, { data }) => {
  return state.merge({ whyUs: [...data] });
};

/* Reducers to Types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.WHY_US_SUCCESS]: whyUsSuccess,
});
