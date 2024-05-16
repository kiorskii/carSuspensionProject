import './App.css'
import './reset.css'
import MainScreen from './components/MainScreen/MainScreen'
import { SuspensionDataProvider } from './components/SuspensionContext/SuspensionContext'

function App() {

  return (
    <SuspensionDataProvider>
      <MainScreen />
    </SuspensionDataProvider>
  )
}

export default App
