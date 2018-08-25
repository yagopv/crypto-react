import { init } from '@rematch/core';
import count from './models/count';

const store = init({
  count
});

export default store;
