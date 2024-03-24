import React from 'react'
import './ToggleButton.css'
import { FaBarsStaggered } from "react-icons/fa6";

function ToggleButton({setOpen}) {
  return (
    <span  className='button' onClick={() =>setOpen(prev => !prev)}>
       <FaBarsStaggered/>
    </span>
  )
}

export default ToggleButton