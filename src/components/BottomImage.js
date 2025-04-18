import React from 'react'
import './BottomImage.css'
import { Link } from 'react-router-dom'

export default function BottomImage() {
    
  return (
    <>
    <div className="xyz">
    <Link to="/signup">
        <button className='button'>Register Company</button>
      </Link>
    </div>
    </>
  )
}
