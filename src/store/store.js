import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import ticker from 'store/models/ticker';

const store = init({
  models: {
    ticker
  },
  plugins: [selectPlugin()]
});

export default store;
