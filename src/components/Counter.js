import React, { PropTypes } from 'react'

const Counter = ({ type, value, onPlus, onMinus }) => {
  return (
    <div className={type}>
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
  onMinus: PropTypes.func.isRequired
}

Counter.defaultProps = {
  value: '',
  onPlus: () => { console.log('Click') },
  onMinus: () => { console.log('Click') }
}

export default Counter
