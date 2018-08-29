import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { select } from 'store/store';
import TickersHead from './tickers/TickersHead';
import TickersRow from './tickers/TickersRow';

function Tickers({ tickers }) {
  if (!tickers.length) {
    return null;
  }

  return (
    <Row>
      <Col>
        <div>
          <table>
            <thead>
              <TickersHead />
            </thead>
            <tbody>
              {tickers.map(ticker => {
                return <TickersRow ticker={ticker} key={ticker.id} />;
              })}
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  );
}

const mapState = select(models => ({
  tickers: models.tickers.getTickersById
}));

const mapDispatch = dispatch => ({
  getTickers: () => dispatch.tickers.getTickers()
});

export default compose(
  connect(
    mapState,
    mapDispatch
  ),
  lifecycle({
    componentDidMount() {
      this.props.getTickers();
    }
  })
)(Tickers);
