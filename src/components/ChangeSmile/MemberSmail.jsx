import React from 'react';
import img1 from '../../img/implant.png'


const MemberSmail = ({ img, title, text, val, cond }) => {
  return (
    <>
        {cond ?
          <div className="smile rounded-4 shadow position-relative mx-auto overflow-hidden" style={{ border: '4px solid var(--mainColor)' , width: '90%'}}  dir={val === '1' || val ===  '5' ? 'rtl' : 'ltr'}>
            <img src={img !== null && img !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section5/${img}` : img1} className='w-100' style={{height: '240px'}} alt="member-img" />
            <div className="layer-smile rashed-mainBg h-100 position-absolute py-3 px-1">
              <h5 className='mb-4' style={{fontWeight: 600}}>
                <i className={`fas fa-cloud ${val === '1' || val ===  '5' ? 'ms-2' : 'me-2'}`}></i>
                {title !== null && title !== undefined ? title : 'Title'}
              </h5>
              <p>{text !== null && text !== undefined ? text : 'text'}</p>
            </div>
          </div>
        :
          <div className="col-lg-4 col-sm-6 col-11">
              <div className="smile rounded-4 shadow position-relative mx-auto overflow-hidden" style={{ border: '4px solid var(--mainColor)' , width: '90%'}}  dir={val === '1' || val ===  '5' ? 'rtl' : 'ltr'}>
                <img src={img !== null && img !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section5/${img}` : img1} className='w-100' style={{height: '240px'}} alt="member-img" />
                <div className="layer-smile rashed-mainBg h-100 position-absolute py-3 px-1">
                  <h5 className='mb-4' style={{fontWeight: 600}}>
                    <i className={`fas fa-cloud ${val === '1' || val ===  '5' ? 'ms-2' : 'me-2'}`}></i>
                    {title !== null && title !== undefined ? title : 'Title'}
                  </h5>
                  <p>{text !== null && text !== undefined ? text : 'text'}</p>
                </div>
              </div>
          </div>}
    </>
  )
}

export default MemberSmail
