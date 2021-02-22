import React from 'react'
import styled from 'styled-components'
import checkValid from './checkValid'
import PropTypes from 'prop-types'

const FormElement = styled.form`
  width: 500px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
`

const Input = styled.input`
  display: block;
  height: 32px;
  margin-top: 10px;
  padding: 5px;
`
const Button = styled.button`
  height: 32px;
  padding: 5px;
  cursor: pointer;
`

function Form(props) {
  const onSubmit = (event) => {
    event.preventDefault()
    if (checkValid(event.target[0]) || checkValid(event.target[1])) {
      return
    }
    props.onSubmit()
  }

  const onChange = (event) => {
    if (event.target.name === 'zone' && /\D/.test(event.target.value)) {
      return
    }
    props.onChange(event.target)
  }

  return (
    <FormElement onSubmit={onSubmit}>
      <label>
        Название
        <Input name="title" onChange={onChange} value={props.title || props.name} />
      </label>
      <label>
        Временная зона
        <Input name="zone" onChange={onChange} value={props.zone || props.name} />
      </label>
      <Button>Добавить</Button>
    </FormElement>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  zone: PropTypes.string,
}

export default Form
