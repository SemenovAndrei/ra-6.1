import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/ru'
import ClockFace from './ClockFace/ClockFace'
import SecondsArrow from './SecondsArrow/SecondsArrow'
import MinutesArrow from './MinutesArrow/MinutesArrow'
import HoursArrow from './HoursArrow/HoursArrow'

moment.locale('ru')

function Clock(props) {
  const [time, setTime] = useState({
    hours: moment().utcOffset(`gmt${props.gmt}`).format('hh'),
    minutes: moment().format('mm'),
    seconds: moment().format('ss'),
  })

  // useEffect(() => {
  //   setTime({
  //     hours: moment().utcOffset(`gmt${props.gmt}`).format('hh'),
  //     minutes: moment().format('mm'),
  //     seconds: moment().format('ss'),
  //   })

  //   const timeout = setTimeout(
  //     () =>
  //       setTime({
  //         hours: moment().utcOffset(`gmt${props.gmt}`).format('hh'),
  //         minutes: moment().format('mm'),
  //         seconds: moment().format('ss'),
  //       }),
  //     1000
  //   )
  //   return () => {
  //     clearInterval(timeout)
  //   }
  // }, [props.gmt, time])

  const minutesToDegree = (time) => time * 6 - 90

  const hoursToDegree = (time) => minutesToDegree(time) * 5

  console.log(time)

  return (
    <ClockFace>
      <HoursArrow gmt="7" />
      <MinutesArrow />
      <SecondsArrow />
    </ClockFace>
  )
}

Clock.defaultProps = {
  gmt: '0',
}

Clock.propTypes = {
  gmt: PropTypes.string.isRequired,
}

export default Clock
