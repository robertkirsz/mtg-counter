import React, { PropTypes } from 'react'
import cn from 'classnames'

const Die = ({ number, className }) => {
  return <div className={cn('die', className)}>{number}</div>
}

Die.propTypes = {
  number: PropTypes.number,
  className: PropTypes.string
}

Die.defaultProps = {
  number: 0,
  className: ''
}

export default Die
