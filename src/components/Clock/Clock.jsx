import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ClockFace from './ClockFace/ClockFace'
import Arrows from './Arrows/Arrows'

const ClockElement = styled.div`
  position: relative;
  margin: 30px;
`

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 5px;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
`
const Title = styled.h3`
  margin: 0;
  font-weight: bold;
`

function Clock(props) {
  const onDelete = (event) => {
    props.onDelete(event.target.id)
  }
  return (
    <ClockElement>
      <Title>{props.title}</Title>
      <ClockFace>
        <Arrows gmt={props.zone}></Arrows>
      </ClockFace>
      <Button id={props.id} onClick={onDelete}>
        X
      </Button>
    </ClockElement>
  )
}

Clock.defaultProps = {
  title: 'Москва',
  zone: '3',
  id: 'test',
}

Clock.propTypes = {
  title: PropTypes.string.isRequired,
  zone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Clock
