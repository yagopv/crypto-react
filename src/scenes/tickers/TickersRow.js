import React from 'react';

function TickersRow({ ticker }) {
  const {
    price,
    market_cap,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d
  } = ticker.quotes['USD'];

  return (
    <tr>
      <th>
        <img alt="ticker" />
      </th>
      <td>
        <b>{ticker.name}</b>
      </td>
      <td>
        <b>{ticker.symbol}</b>
      </td>
      <td>{price}</td>
      <td>{market_cap}</td>
      <td>{ticker.max_supply}</td>
      <td>{ticker.total_supply}</td>
      <td>
        <span>{percent_change_1h}</span>
      </td>
      <td>
        <span>{percent_change_24h}</span>
      </td>
      <td>
        <span>{percent_change_7d}</span>
      </td>
    </tr>
  );
}

export default TickersRow;
