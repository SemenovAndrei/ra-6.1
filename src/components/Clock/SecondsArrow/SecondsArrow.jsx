import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

// const coordsX = (deg) => Math.cos((-90 + deg) * (Math.PI / 180)) * 75 + 150
// const coordsY = (deg) => Math.sin((-90 + deg) * (Math.PI / 180)) * 75 + 75

const Arrow = styled.div.attrs((props) => ({
  style: {
    transform: `translateX(0) translateY(-50%) rotate(${props.seconds}deg)`,
  },
}))`
  position: absolute;
  left: 50%;
  top: 50%;

  width: 75px;
  height: 2px;
  background-color: red;
  border-radius: 1px;
  transform-origin: left;
`

function SecondsArrow() {
  const [seconds, setSeconds] = useState(
    new Date().getSeconds() + new Date().getMilliseconds() / 1000
  )

  const minutesToDegree = (time) => time * 6 - 90

  useEffect(() => {
    // setSeconds(() => new Date().getSeconds() + new Date().getMilliseconds() / 1000)

    const timeout = setTimeout(
      () =>
        setSeconds(() => new Date().getSeconds() + new Date().getMilliseconds() / 1000),
      1000 / 60
    )
    return () => {
      clearTimeout(timeout)
    }
  })

  return <Arrow seconds={minutesToDegree(seconds)}></Arrow>
}

export default SecondsArrow
