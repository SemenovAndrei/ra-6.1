import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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

function SecondsArrow(props) {
  // console.log(props.seconds)
  return <Arrow seconds={props.seconds}></Arrow>
}

export default SecondsArrow
