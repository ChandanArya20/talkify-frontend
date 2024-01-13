import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Status from './components/Status'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/status" element={<Status/>}/>
    </Routes>
    </>
  )
}

export default App
