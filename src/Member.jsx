import React from 'react';
import doctor1 from './img/doctor1.jpg';


export default function Member({img , title , text , val , cond}) {

    return (
        cond ?
            <div className="member rounded-4 shadow position-relative mx-auto" style={{border: '5px solid var(--secondColor)' , width: '90%' , cursor: 'pointer'}} dir={val === '1' ? 'rtl' : 'ltr'}>
                <img loading='lazy' src={img !== null && img !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/staff/${img}` : doctor1} className='rounded-4 w-100' style={{  height: '380px'}} alt="doctor" />
                {/* <div className="caption-member rashed-mainBg text-white px-2 pt-2 position-absolute bottom-0 start-0 end-0"> */}
                <div className="caption-member rashed-secondBg text-white px-2 pt-2 position-absolute bottom-0 start-0 end-0">
                    <h5>{title !== null && title !== undefined ? title : 'Name'}</h5>
                    <p>{text !== null && text !== undefined ? text : 'Desc'}</p>
                </div>
            </div>
            :
            <div className="col-lg-4 col-md-6 col-11">
                <div className="member rounded-4 shadow position-relative mx-auto" style={{border: '5px solid var(--secondColor)' , width: '90%' , cursor: 'pointer'}} dir={val === '1' ? 'rtl' : 'ltr'}>
                    <img loading='lazy' src={img !== null && img !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/staff/${img}` : doctor1} className='rounded-4 w-100' style={{  height: '380px'}} alt="doctor" />
                    {/* <div className="caption-member rashed-mainBg text-white px-2 pt-2 position-absolute bottom-0 start-0 end-0"> */}
                    <div className="caption-member rashed-secondBg text-white px-2 pt-2 position-absolute bottom-0 start-0 end-0">
                        <h5>{title !== null && title !== undefined ? title : 'Name'}</h5>
                        <p>{text !== null && text !== undefined ? text : 'Desc'}</p>
                    </div>
                </div>
            </div>

    )
}
