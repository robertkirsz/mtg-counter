import React, { PropTypes } from 'react';

const Counter = ({ type, value = '' }) => {
  return (
    <div className={type}>
      <i className="minus fa fa-minus" />
      <div className="count">{value}</div>
      <i className="plus fa fa-plus" />
    </div>
  );
};

Counter.propTypes = {
  type: PropTypes.string,
  value: PropTypes.number
};

export default Counter;
