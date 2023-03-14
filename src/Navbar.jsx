import React from 'react';
import logo from './img/logo.png';


export default function Navbar({val , setVal , whatsNumber , massengerURL , phone , email}) {


  return (
        <nav className="navbar fixed-top bg-white shadow py-0" dir={val === 'ar' || val ===  'ur'? 'rtl' : 'ltr'}>
            <div className=" container-lg container-fluid d-flex justify-content-between align-items-center">
                <span className="navbar-brand me-0 ms-0"><img src={logo} style={{height: '65px'}} alt="logo" /></span>
                <div className="d-flex justify-content-between align-items-center special-div">
                  <ul className="list-unstyled d-flex justify-content-between align-items-center mb-0 px-0">
                      <li>
                        <a href={`tel://${phone}`} target='_blank' rel="noreferrer" style= {{color: '#3b5998',background:'#ecf0f8'}} >
                            <i className="fas fa-phone"  ></i> 
                        </a>
                      </li>
                      <li> 
                        <a href={`https://wa.me/${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} target='_blank' rel="noreferrer" style={{ color: '#25d366 ',background:' #25d3661f' }}
                                >
                          <i className="fab fa-whatsapp"></i> 
                        </a>
                      </li>
                      <li>
                        <a href={`https://m.me/${massengerURL}`} target='_blank' rel="noreferrer" style= {{color:' #0084ff',background:' #ecf5f8'}} >
                          <i className="fab fa-facebook-messenger"></i> 
                        </a>
                      </li>
                      <li>
                        <a href={`mailto:${email}`} target='_blank' rel="noreferrer" style={{ color:' #bc2a8d ',background:' #f8ecf4' }}>
                          <i className="far fa-envelope"></i> 
                        </a>
                      </li>
                  </ul>
                  <select value={val} onChange={(e) => {setVal(e.target.value)}} dir='ltr' className='form-select bg-select color-select fs-5' style={{width: '100px'}}>
                    <option value="ar">Arabic</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="ru">Russian</option>
                    <option value="ur">Turkish</option>
                  </select>
                </div>
                
            </div>
        </nav>
  )
}
