import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 95px;
  border-bottom: 2px solid #f83333;
  transform-origin: 0 0;

  transform: translate(0, 0) rotate(${(props) => props.seconds}deg);
`

function SecondsArrow() {
  const [seconds, setSeconds] = useState(moment().format('ss'))

  useEffect(() => {
    setSeconds(() => moment().format('ss'))

    const timeout = setTimeout(() => setSeconds(() => moment().format('ss')), 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [seconds])

  console.log(seconds)

  const minutesToDegree = (time) => time * 6 - 90

  return <Arrow seconds={minutesToDegree(seconds)}></Arrow>
}

export default SecondsArrow
