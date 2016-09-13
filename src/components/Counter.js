import React, { PropTypes } from 'react'
import cn from 'classnames'

const Counter = ({ type, value, onPlus, onMinus, hidden }) => {
  return (
    <div className={cn(
      'counter',
      `counter--${type}`,
      { hidden: hidden }
    )}>
      <i className="minus fa fa-minus" onClick={() => { onMinus() }} />
      <div className="count">{value}</div>
      <i className="plus fa fa-plus" onClick={() => { onPlus() }} />
    </div>
  )
}

Counter.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onPlus: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired,
  hidden: PropTypes.bool
}

Counter.defaultProps = {
  value: 0,
  hidden: true
}

export default Counter
