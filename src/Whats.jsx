import React from 'react'
import whatsppp from './img/whatsapp.png'

export default function Whats() {
  return (
    <>
        <div className="wha" style={{ position: 'fixed', zIndex: '9999999', top: '88%', left: '30px'  }}>
          <a href="https://wa.me/" target='_blank' rel="noreferrer">
            <img src={whatsppp} alt='whatsapp' className='whatsapp' />
          </a>
        </div>
    </>
  )
}
