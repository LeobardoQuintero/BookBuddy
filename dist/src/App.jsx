import { useState } from 'react'
import bookLogo from './assets/books.png'
import { Home, Login, Register} from './pages'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import SingleBook from './pages/SingleBook'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
        <div>
          <Navbar token={token}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken}/> }/>
        <Route path="/Register" element={<Register/>} />
        <Route path='/book/:id' element={<SingleBook/>} />
      </Routes>
    </div>

    </>
  )
}

export default App
