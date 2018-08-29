import cachios from 'cachios';
import {
  COINMARKETCAP_ROOT_URL,
  CRYPTOCOMPARE_ROOT_URL,
  TickerDetailIntervals
} from './constants';

const getTickers = async () => {
  const response = await cachios.get(
    `${COINMARKETCAP_ROOT_URL}/ticker/?limit=0`,
    { ttl: 300 }
  );
  return response;
};

const getGlobalMarketInfo = async () => {
  const response = await cachios.get(`${COINMARKETCAP_ROOT_URL}/global/`, {
    ttl: 3600
  });
  return response;
};

const getCoinList = async () => {
  const response = await cachios.get(
    `${CRYPTOCOMPARE_ROOT_URL}/data/all/coinlist`,
    { ttl: 3600 }
  );
  return response;
};

const getHistoData = async (symbol, interval) => {
  const response = await cachios.get(getBaseUrl(symbol, interval), {
    ttl: 300
  });
  return response;
};

function getBaseUrl(symbol, interval) {
  switch (interval) {
    case TickerDetailIntervals.MINUTE:
      return `${CRYPTOCOMPARE_ROOT_URL}/data/histominute?fsym=${symbol}&tsym=USD&e=CCCAGG`;
    case TickerDetailIntervals.HOUR:
      return `${CRYPTOCOMPARE_ROOT_URL}/data/histohour?fsym=${symbol}&tsym=USD&e=CCCAGG`;
    default:
      return `${CRYPTOCOMPARE_ROOT_URL}/data/histoday?fsym=${symbol}&tsym=USD&e=CCCAGG&allData=true`;
  }
}

export { getHistoData, getTickers, getCoinList, getGlobalMarketInfo };
