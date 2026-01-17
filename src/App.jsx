import React from 'react'
import './App.css'
import Home from './Home'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Projects from './Projects'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className='full_container'>
      <div className="left_side_container">
        <Nav/>
      </div>
      <div className='remaining_container'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      </div>
      
    </div>
  )
}

export default App
