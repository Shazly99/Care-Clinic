import React from 'react'
import messanger from './img/messenger.png'

export default function Massenger() {
  return (
    <>
        <div className="wha" style={{ position: 'fixed', zIndex: '9999999', top: '88%', right: '30px'    }}>
          <a href="https://m.me/" target='_blank' rel="noreferrer">
            <img src={messanger} alt='messanger' className='whatsapp'/>
          </a>
        </div>
    </>
  )
}
