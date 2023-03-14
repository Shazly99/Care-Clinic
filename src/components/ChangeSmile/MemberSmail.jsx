import React from 'react'

const MemberSmail = ({ img, title, text, val }) => {
  return (
    <>
        {/* <div   className="member rounded-4 overflow-hidden shadow position-relative mx-auto" style={{ border: '5px solid var(--mainColor)' }} dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}  >
          <img src={img} className='w-100'  alt="doctor" />
          <div className="  caption-member rashed-mainBg text-white   position-absolute bottom-0 start-0 end-0  "  >
            <div className="depc__title  w-100">
              <i className="fas fa-cloud"></i>
              {title}
            </div>
            <p className="alany__edi d-none">
              {text}
            </p>
          </div>
        </div> */}
        <div className="smile rounded-4 shadow position-relative mx-auto overflow-hidden" style={{ border: '4px solid var(--mainColor)' , width: '90%'}}  dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}>
          <img src={img} className='w-100' style={{height: '240px'}} alt="member-img" />
          <div className="layer-smile rashed-mainBg h-100 position-absolute py-3 px-1">
            <h5 className='mb-4' style={{fontWeight: 600}}>
              <i className={`fas fa-cloud ${val === 'ar' || val ===  'ur' ? 'ms-2' : 'me-2'}`}></i>
              {title}
            </h5>
            <p>{text}</p>
          </div>
        </div>
    </>
  )
}

export default MemberSmail
