import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ChatDetails from './components/ChatDetails'
import NewGroup from './components/NewGroup'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/chat-details" element={<ChatDetails/>}/>
      <Route path="/new-group" element={<NewGroup/>}/>
    </Routes>
    </>
  )
}

export default App
