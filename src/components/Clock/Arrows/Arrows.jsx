import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SecondsArrow from '../SecondsArrow/SecondsArrow'
import HoursArrow from '../HoursArrow/HoursArrow'
import MinutesArrow from '../MinutesArrow/MinutesArrow'

function Arrows(props) {
  const [time, setTime] = useState({
    milliSeconds: new Date().getMilliseconds(),
    seconds: new Date().getSecond() + this.milliSeconds / 1000,
    minutes: new Date().getMinutes() + this.seconds / 60,
    hours: new Date().getHours() + this.minutes / 60,
  })

  return (
    <div>
      <HoursArrow gmt="7" />
      <MinutesArrow />
      <SecondsArrow />
    </div>
  )
}

Arrows.defaultProps = {
  gmt: '0',
}

Arrows.propTypes = {
  gmt: PropTypes.string.isRequired,
}

export default Arrows
