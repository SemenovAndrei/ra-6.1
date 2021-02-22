import { nanoid } from 'nanoid'
import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Clock from './components/Clock/Clock'
import Form from './components/Form/Form'

const ClocksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function App() {
  const [form, setForm] = useState({
    name: '',
  })

  const [clocks, setClocks] = useState([])

  const addClock = () => {
    setClocks((prev) => [
      ...prev,
      {
        id: nanoid(),
        title: form.title,
        zone: form.zone,
      },
    ])

    setForm(() => ({
      name: '',
    }))
  }

  const change = (target) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const deleteClock = (id) => {
    setClocks(clocks.filter((o) => o.id !== id))
  }

  return (
    <div className="App">
      <Form onSubmit={addClock} onChange={change} {...form} />
      <ClocksContainer>
        {clocks.map((clock) => (
          <Clock {...clock} key={clock.id} id={clock.id} onDelete={deleteClock}></Clock>
        ))}
      </ClocksContainer>
    </div>
  )
}

export default App
