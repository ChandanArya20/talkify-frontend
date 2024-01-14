import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Status from './components/Status'
import StatusViewer from './components/StatusViewer'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/status" element={<Status/>}/>
      <Route path="/stories" element={<StatusViewer/>}/>
    </Routes>
    </>
  )
}

export default App
