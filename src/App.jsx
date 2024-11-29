import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Movielist from './Pages/Movielist'
import Movieupdate from './Pages/Movieupdate'
import Header from './Components/Header'
import About from './Pages/About'
 
function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Routes>
             <Route exact path='/' element={<Home/>}></Route>
             <Route path='/movielist' element={<Movielist/>}></Route>
             <Route path='/movieupdate' element={<Movieupdate/>}></Route>
             <Route path='/about' element={<About/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App