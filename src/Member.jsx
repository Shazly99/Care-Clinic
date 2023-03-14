import React from 'react'

export default function Member({img , title , text , val}) {

    return (
                // <div className="member rounded-4 shadow position-relative mx-auto" style={{border: '5px solid var(--mainColor)' , width: '90%' , cursor: 'pointer'}} dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}>
                <div className="member rounded-4 shadow position-relative mx-auto" style={{border: '5px solid var(--secondColor)' , width: '90%' , cursor: 'pointer'}} dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}>
                    <img src={img} className='rounded-4 w-100' style={{  height: '380px'}} alt="doctor" />
                    {/* <div className="caption-member rashed-mainBg text-white px-2 pt-2 position-absolute bottom-0 start-0 end-0"> */}
                    <div className="caption-member rashed-secondBg text-white px-2 pt-2 position-absolute bottom-0 start-0 end-0">
                        <h5>{title}</h5>
                        <p>{text}</p>
                    </div>
                </div>
    )
}
