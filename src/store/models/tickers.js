import mapValues from 'lodash/mapValues';
import values from 'lodash/values';
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
        byId: payload
      };
    }
  },
  effects: dispatch => ({
    async getTickers(payload, rootState) {
      try {
        const [tickersResult, coinListResult] = await Promise.all([
          getTickers(),
          getCoinList()
        ]);

        if (coinListResult.data['Response'] === 'Error') {
          throw new Error(coinListResult.data['ErrorsSummary']);
        }

        if (
          tickersResult.data &&
          tickersResult.data['data'] &&
          coinListResult.data &&
          coinListResult.data['Data']
        ) {
          mapValues(tickersResult.data.data, ticker => {
            ticker.meta = coinListResult.data['Data'][ticker.symbol];

            // IOTA ticker is different in coinmarketcap than in cryptocompare
            if (ticker.symbol === 'MIOTA') {
              ticker.symbol = 'IOT';
              ticker.meta = coinListResult.data['Data']['IOT'];
            }
          });
        }
        dispatch.tickers.setTickers(tickersResult.data.data);
      } catch (error) {}
    }
  }),
  selectors: (slice, createSelector, hasProps) => ({
    getTickersById() {
      return slice(tickers => {
        return values(tickers.byId, ticker => ticker);
      });
    }
  })
};
