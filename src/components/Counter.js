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
  value: PropTypes.number,
  onPlus: PropTypes.func,
  onMinus: PropTypes.func,
  hidden: PropTypes.bool
}

Counter.defaultProps = {
  value: 0,
  // onPlus: () => { console.log('Click') },
  // onMinus: () => { console.log('Click') },
  hidden: true
}

export default Counter
