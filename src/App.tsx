import { useState } from 'react'
import Header from './components/global/Header'
import Form from './components/Form'
import TaskGrid from './components/TaskGrid'

function App() {
  return (
    <>
      <Header />
      <Form />
      <TaskGrid />
    </>
  )
}

export default App
