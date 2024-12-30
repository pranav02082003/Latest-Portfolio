import React from 'react'
import '../Footer/Footer.css'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    
    <div>
      <p className='footer-para'>&copy; {year} <span className='yellow'>Pranav Dunna</span></p>
    </div>
  )
}
