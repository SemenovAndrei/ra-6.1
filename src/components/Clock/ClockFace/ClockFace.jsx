import React from 'react'
import styled from 'styled-components'

const coordsX = (deg) => Math.cos((-90 + deg) * (Math.PI / 180)) * 85
const coordsY = (deg) => Math.sin((-90 + deg) * (Math.PI / 180)) * 85

const Circle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 210px;
  border: 5px solid #000000;
  border-radius: 50%;
`
const Center = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  z-index: 1000;
  background-color: #000;
  border-radius: 50%;
`

const SmallCenter = styled(Center)`
  width: 2px;
  height: 2px;
  background-color: #ff0000;
`

const Number = styled.div`
  position: absolute;
  left: calc(50% - 15px);
  top: calc(50% - 15px);
  width: 30px;
  height: 30px;
  font-weight: bold;
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
  return (
    <Circle>
      {numbers.map((o) => o)}
      <Center></Center>
      <SmallCenter></SmallCenter>
      {props.children}
    </Circle>
  )
}
