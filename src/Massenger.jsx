import React from 'react'
import messanger from './img/messenger.png'

export default function Massenger({ massengerURL }) {
  return (
    <>
        <div className="wha" style={{ position: 'fixed', zIndex: '9999999', top: '88%', right: '30px'    }}>
          <a href={`${massengerURL}`} target='_blank' rel="noreferrer">
            <img loading='lazy' src={messanger} alt='messanger' className='whatsapp'/>
          </a>
        </div>
    </>
  )
}
