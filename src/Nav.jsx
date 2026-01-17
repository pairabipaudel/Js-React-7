import React,{useState} from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
const Nav = () => {
    const navigate=useNavigate();
    const [status,setStatus]=useState('Home')
  return (
    <div className='nav_fixed_container'>
      <div className='info'>
        <div className='profile_pic_container'>
              <button></button>
        </div>
        <div className='profile_info'>
            <p className='main_text'>Pairabi Paudel</p>
            <p className='text'>pairabipaudel</p>
        </div>
      </div>
      <div className='nav_containers'>
        <button style={{border:status==='Home'? '2px solid black': ''}} onClick={()=>{navigate('/'); setStatus('Home')}}>Home</button>
        <button style={{border:status==='Dashboard'? '2px solid black': ''}} onClick={()=>{navigate('/dashboard'); setStatus('Dashboard')}}>Dashboard</button>
        <button style={{border:status==='Projects'? '2px solid black': ''}} onClick={()=> {navigate('/projects'); setStatus('Projects')}}>Projects</button>
        <p></p>
      </div>
    </div>
  )
}

export default Nav
