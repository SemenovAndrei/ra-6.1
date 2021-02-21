import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import PropTypes from 'prop-types'

const Arrow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  width: 50px;
  height: 4px;
  background-color: #000000;
  border-radius: 2px;
  transform-origin: left;

  transform: translateX(0) translateY(-50%) rotate(${(props) => props.hours}deg);
`

function HoursArrow(props) {
  const [hours, setHours] = useState(moment().utcOffset(`gmt${props.gmt}`).format('h'))
  const [seconds, setSeconds] = useState(moment().format('ss'))

  useEffect(() => {
    setSeconds(() => moment().format('ss'))
    setHours(() => moment().utcOffset(`gmt${props.gmt}`).format('h'))

    const timeout = setTimeout(() => {
      setSeconds(() => moment().format('ss'))
      setHours(() => moment().utcOffset(`gmt${props.gmt}`).format('h'))
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [seconds, hours, props.gmt])

  const minutesToDegree = (time) => (time * 6 - 90) * 5

  return <Arrow hours={minutesToDegree(hours)}></Arrow>
}

HoursArrow.defaultProps = {
  gmt: '0',
}

HoursArrow.propTypes = {
  gmt: PropTypes.string.isRequired,
}

export default HoursArrow
