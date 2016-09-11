import React, { PropTypes } from 'react';

const Counter = ({ type }) => {
  return (
    <div className={type}>
      <i className="minus fa fa-minus" />
      <div className="count" />
      <i className="plus fa fa-plus" />
    </div>
  );
};

Counter.propTypes = {
  type: PropTypes.string
};

export default Counter;
