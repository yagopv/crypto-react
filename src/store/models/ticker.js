import mapKeys from 'lodash/mapKeys';
import { getTickers, getCoinList } from 'services/http/api';

export default {
  state: {
    byId: {},
    global: null,
    sortKey: { rank: 'Number' },
    sortOrder: 'asc',
    searchValue: ''
  },
  reducers: {
    setTickers(state, payload) {
      return {
        ...state,
        byId: mapKeys(payload, ticker => ticker.id)
      };
    }
  },
  effects: dispatch => ({
    async getTickers(payload, rootState) {
      try {
        const tickers = getTickers();
        const coinList = getCoinList();
        const tickersResult = await tickers;
        const coinListResult = await coinList;

        if (coinListResult.data['Response'] === 'Error') {
          throw new Error(coinListResult.data['ErrorsSummary']);
        }

        if (
          tickersResult.data &&
          coinListResult.data &&
          coinListResult.data['Data']
        ) {
          tickersResult.data.forEach(ticker => {
            ticker.meta = coinListResult.data['Data'][ticker.symbol];

            // IOTA ticker is different in coinmarketcap than in cryptocompare
            if (ticker.symbol === 'MIOTA') {
              ticker.symbol = 'IOT';
              ticker.meta = coinListResult.data['Data']['IOT'];
            }
          });
        }
        dispatch.ticker.setTickers(tickersResult);
      } catch (error) {}
    }
  })
};
