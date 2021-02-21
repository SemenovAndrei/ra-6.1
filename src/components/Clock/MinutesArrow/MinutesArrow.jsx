import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Arrow = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  width: 75px;
  height: 4px;
  background-color: #000000;
  border-radius: 2px;
  transform-origin: left;

  transform: translateX(0) translateY(-50%) rotate(${(props) => props.minutes}deg);
`

function MinutesArrow() {
  const [minutes, setMinutes] = useState(moment().format('mm'))
  const [seconds, setSeconds] = useState(moment().format('ss'))

  useEffect(() => {
    setMinutes(() => moment().format('mm'))
    setSeconds(() => moment().format('ss'))

    const timeout = setTimeout(() => {
      setMinutes(() => moment().format('mm'))
      setSeconds(() => moment().format('ss'))
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [seconds, minutes])

  const minutesToDegree = (time) => time * 6 - 90

  return <Arrow minutes={minutesToDegree(minutes)}></Arrow>
}

export default MinutesArrow
