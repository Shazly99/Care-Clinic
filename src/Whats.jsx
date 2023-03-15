import React from 'react'
import whatsppp from './img/whatsapp.png'

export default function Whats({ whatsNumber }) {
  return (
    <>
        <div className="wha" style={{ position: 'fixed', zIndex: '9999999', top: '88%', left: '30px'  }}>
          <a href={`https://wa.me/${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} target='_blank' rel="noreferrer">
            <img loading='lazy' src={whatsppp} alt='whatsapp' className='whatsapp' />
          </a>
        </div>
    </>
  )
}
