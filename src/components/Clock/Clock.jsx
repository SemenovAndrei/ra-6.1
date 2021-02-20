import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/ru'
import ClockFace from './ClockFace/ClockFace'

moment.locale('ru')

const Circle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  padding: 50px;
  border: 5px solid #ff00bf;
  border-radius: 50%;
`

const HoursArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  border-bottom: 2px solid #0b43ac;
  transform-origin: 0 0;
  transform: translate(2.5px, -2.5px) rotate(${(props) => props.hours}deg);
`
const MinutesArrow = styled(HoursArrow)`
  width: 40px;
  border-bottom: 2px solid #36ff04;

  transform: translate(-2.5px, -2.5px) rotate(${(props) => props.minutes}deg);
`

const SecondsArrow = styled(HoursArrow)`
  width: 45px;
  border-bottom: 2px solid #f30101;

  transform: translate(-2.5px, -2.5px) rotate(${(props) => props.seconds}deg);
`

function Clock(props) {
  const [time, setTime] = useState({
    hours: moment().utcOffset(`gmt${props.gmt}`).format('hh'),
    minutes: moment().utcOffset(`gmt${props.gmt}`).format('mm'),
    seconds: moment().utcOffset(`gmt${props.gmt}`).format('ss'),
  })

  // useEffect(() => {
  //   setTime({
  //     hours: moment().utcOffset(`gmt${props.gmt}`).format('hh'),
  //     minutes: moment().utcOffset(`gmt${props.gmt}`).format('mm'),
  //     seconds: moment().utcOffset(`gmt${props.gmt}`).format('ss'),
  //   })

  //   const timeout = setTimeout(
  //     () =>
  //       setTime({
  //         hours: moment().utcOffset(`gmt${props.gmt}`).format('hh'),
  //         minutes: moment().utcOffset(`gmt${props.gmt}`).format('mm'),
  //         seconds: moment().utcOffset(`gmt${props.gmt}`).format('ss'),
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
    // <Circle>
    //   <HoursArrow hours={hoursToDegree(time.hours)} />
    //   <MinutesArrow minutes={minutesToDegree(time.minutes)} />
    //   <SecondsArrow seconds={minutesToDegree(time.seconds)} />
    // </Circle>
    <ClockFace />
  )
}

Clock.defaultProps = {
  gmt: '0',
}

Clock.propTypes = {
  gmt: PropTypes.string.isRequired,
}

export default Clock
