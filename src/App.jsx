import { useState } from 'react'

import './App.css'
import './reset.css'
import MainScreen from './components/MainScreen/MainScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainScreen />
  )
}

export default App
