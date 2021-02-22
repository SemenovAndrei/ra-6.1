import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ArrowSeconds = styled.div.attrs((props) => ({
  style: {
    transform: `translateX(0) translateY(-50%) rotate(${props.deg}deg)`,
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

const ArrowMinutes = styled(ArrowSeconds)`
  height: 4px;
  background-color: #000000;
  border-radius: 2px;
`

const ArrowsHours = styled(ArrowMinutes)`
  width: 50px;
`

const timeToDegree = (time) => time * 6 - 90

function Arrows(props) {
  const [time, setTime] = useState(new Date())

  const seconds = time.getSeconds() + time.getMilliseconds() / 1000
  const minutes = time.getMinutes() + time.getSeconds() / 60
  const hours = time.getUTCHours() + +props.gmt + minutes / 60

  useEffect(() => {
    const timeout = setTimeout(() => setTime(() => new Date()), 1000 / 60)
    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <div>
      <ArrowsHours deg={timeToDegree(hours) * 5}></ArrowsHours>
      <ArrowMinutes deg={timeToDegree(minutes)}></ArrowMinutes>
      <ArrowSeconds deg={timeToDegree(seconds)}></ArrowSeconds>
    </div>
  )
}

Arrows.defaultProps = {
  gmt: '3',
}

Arrows.propTypes = {
  gmt: PropTypes.string.isRequired,
}

export default Arrows
