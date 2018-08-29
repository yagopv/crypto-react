import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import tickers from 'store/models/tickers';

const store = init({
  models: {
    tickers
  },
  plugins: [selectPlugin()]
});

export const { select } = store;

export default store;
