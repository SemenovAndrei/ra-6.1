import React from 'react'
import styled from 'styled-components'

const coordsX = (deg) => Math.cos((-90 + deg) * (Math.PI / 180)) * 85
const coordsY = (deg) => Math.sin((-90 + deg) * (Math.PI / 180)) * 85

const Circle = styled.div`
  position: relative;
  width: 210px;
  height: 210px;
  border: 5px solid #727272;
  border-radius: 50%;
`

const Number = styled.div`
  position: absolute;
  left: calc(50% - 15px);
  top: calc(50% - 15px);
  width: 30px;
  height: 30px;
  text-align: center;
  transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
`
const numbers = []

for (let i = 1; i <= 12; i++) {
  numbers.push(
    <Number key={i} x={coordsX(30 * i)} y={coordsY(30 * i)}>
      {i}
    </Number>
  )
}

export default function ClockFace(props) {
  console.log(numbers)

  return (
    <Circle>
      {numbers.map((o) => o)}
      {props.children}
    </Circle>
  )
}
