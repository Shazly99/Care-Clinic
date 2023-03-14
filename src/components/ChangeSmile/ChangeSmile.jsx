import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import { BsWhatsapp } from "react-icons/bs";

import img1 from '../../img/implant.png'
import img2 from '../../img/orth.png'
import img3 from '../../img/smile.png'
import MemberSmail from './MemberSmail';
import icons1 from '../../img/img/icons/1.png'
import icons2 from '../../img/img/icons/2.png'
import icons3 from '../../img/img/icons/3.png'
import icons4 from '../../img/img/icons/4.png'
import logo from '../../img/logo.png'
import iso1 from '../../img/iso-1.png'
import iso2 from '../../img/iso-4.png'
import iso3 from '../../img/iso-3.png'
import partner1 from '../../img/img/armaera.png'
import partner2 from '../../img/img/parisaline.png'
import partner3 from '../../img/img/mastery.png'
import partner4 from '../../img/img/icdm.png'
import PhoneInput from 'react-phone-input-2';


const ChangeSmile = ({val}) => {

  const slider2 = {
    dots: true,
    arrows: false,
    infinite: true,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        }
      },
    ]
  };

  const Smiles =
    [
      {
        id: 1,
        img: img1,
        title: 'Clear Aligner & Invisalign',
        text: `Invisalign or Clear Alaigner is a series of clear teeth aligners that work to
        straighten the teeth over time without the hassle, pain, and no look of metal
        braces, it is the new innovation of orthodontics.`
      },
      {
        id: 2,
        img: img2,
        title: `Hollywood Smile`,
        text: `Hollywood smile combines cosmetic and/or restorative dentistry treatments to make
        you
        SMILE LIKE A SUPER STAR. Esthetic Dental Veneers can help to cover imperfections
        in
        your smile through a personalized treatment plan to fit your needs and desires.`
      },
      {
        id: 3,
        img: img3,
        title: `Dental Implants`,
        text: `Dental implants can be surgically placed into the jawbone to replace one or more
        missing teeth with a natural-looking, comfortable restoration. It is the ideal
        solution to replace your missed teeth.`
      },
      // {
      //   id: 4,
      //   img: img1,
      //   title: `Clear Aligner & Invisalign`,
      //   text: `Invisalign or Clear Alaigner is a series of clear teeth aligners that work to
      //   straighten the teeth over time without the hassle, pain, and no look of metal
      //   braces, it is the new innovation of orthodontics.`
      // },
      // {
      //   id: 5,
      //   img: img2,
      //   title: `Clear Aligner & Invisalign`,
      //   text: `Invisalign or Clear Alaigner is a series of clear teeth aligners that work to
      //   straighten the teeth over time without the hassle, pain, and no look of metal
      //   braces, it is the new innovation of orthodontics.`
      // },
      // {
      //   id: 6,
      //   img: img3,
      //   title: `Clear Aligner & Invisalign`,
      //   text: `Invisalign or Clear Alaigner is a series of clear teeth aligners that work to
      //   straighten the teeth over time without the hassle, pain, and no look of metal
      //   braces, it is the new innovation of orthodontics.`
      // },

    ]


    const slider3 = {
      dots: true,
      arrows: false,
      infinite: true,
      // centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        // {
        //   breakpoint: 570,
        //   settings: {
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   }
        // },
      ]
    };

    const numss =
    [
      {
        id: 1,
        number: '17',
        title: 'Dental Clinics',
        icon: icons1,
      },
      {
        id: 2,
        number: '50',
        title: 'Doctors Staff',
        icon: icons2,
      },
      {
        id: 3,
        number: '20',
        title: 'Years of Experience',
        icon: icons3,
      },
      {
        id: 4,
        number: '96',
        title: 'Satisfaction Rate',
        icon: icons4,
      },
    ]


  return (

    <>
      <div className="app__ChangeSmile" dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}>
        <Container >
          <div className="main-title-section text-center">
            <h2 className='rashed-secondColor'>We Change Your Smile, You Change Your Life</h2>
          </div>
          <Row className='app__ChangeSmile-img mt-5' dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}>
            {Object.keys(Smiles).length > 2 ?
              <Slider {...slider2}>
                {Smiles.map((item, i) => (
                  <MemberSmail val={val} key={i} img={item.img} title={item.title} text={item.text} />
                ))}
              </Slider>
              :
              <div className="col-lg-4 col-md-6 col-11">
                  <div className="smile rounded-4 shadow position-relative mx-auto overflow-hidden" style={{ border: '4px solid var(--mainColor)' , width: '90%'}}  dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}>
                    <img src={img1} className='w-100' style={{height: '240px'}} alt="member-img" />
                    <div className="layer-smile rashed-mainBg h-100 position-absolute py-3 px-1">
                      <h5 className='mb-4' style={{fontWeight: 600}}>
                        <i className={`fas fa-cloud ${val === 'ar' || val ===  'ur' ? 'ms-2' : 'me-2'}`}></i>
                        Clear Aligner & Invisalign
                      </h5>
                      <p>
                        Invisalign or Clear Alaigner is a series of clear teeth aligners that work to
                        straighten the teeth over time without the hassle, pain, and no look of metal
                        braces, it is the new innovation of orthodontics.
                      </p>
                    </div>
                  </div>
              </div>
            }

          </Row>
          <div className="center btn__animation" dir={val === 'ar' || val ===  'ur' || 'ur'? 'rtl' : 'ltr'}>
            <button className="animated-button1 whats fix-whats2 w-btn w-btn-open" target="blank">
              <span></span><span></span><span></span><span></span>
              <div className="dt">
                <div className="dtc">
                  <p>WhatsApp <label>Get Immediate Info</label>  </p>
                </div>
                <div className="dtc">
                  <BsWhatsapp />
                </div>
              </div>
            </button>
          </div>
        </Container>
      </div>

      <div className="nums py-5" dir={val === 'ar' || val ===  'ur'   ? 'rtl' : 'ltr'}>

        <Container>

          {Object.keys(numss).length > 3 ?
            <Slider {...slider3} className='text-center'>
              {numss.map((item, i) => (
                <div key={i} className="numb text-white">
                  <img src={item.icon} className='mx-auto' alt="icon-img" />
                  <h2>
                    {item.number}
                    <span>+</span>
                  </h2>
                  <p style={{fontWeight: '500' , whiteSpace: 'nowrap'}}>{item.title}</p>
                </div>
              ))}
            </Slider>
            :
            <div className="row gy-4 ">
              <div className=" col-md-3 col-6">
                <div className="numb text-white">
                  <img src={icons1} alt="icon-img" />
                  <h2>
                    17
                    <span>+</span>
                  </h2>
                  <p style={{fontWeight: '500' , whiteSpace: 'nowrap'}}>Dental Clinics</p>
                </div>
              </div>
              <div className=" col-md-3 col-6">
                <div className="numb text-white">
                  <img src={icons2} alt="icon-img" />
                  <h2>
                    50
                    <span>+</span>
                  </h2>
                  <p style={{fontWeight: '500' , whiteSpace: 'nowrap'}}>Doctors &amp; Staff</p>
                </div>
              </div>
              <div className=" col-md-3 col-6">
                <div className="numb text-white mt">
                  <img src={icons3} alt="icon-img" />
                  <h2>
                    20
                    <span>+</span>
                  </h2>
                  <p style={{fontWeight: '500' , whiteSpace: 'nowrap'}}>Years of Experience</p>
                </div>
              </div>
              <div className=" col-md-3  col-6">
                <div className="numb text-white mt">
                  <img src={icons4} alt="icon-img" />
                  <h2>
                    96
                    <span>+</span>
                  </h2>
                  <p style={{fontWeight: '500' , whiteSpace: 'nowrap'}}>Satisfaction Rate</p>
                </div>
              </div>
            </div>
          }
        </Container>
      </div>

      <div className="app__Partners " dir={val === 'ar' || val ===  'ur'? 'rtl' : 'ltr'}>
        <Container>
          <div className="main-title-section text-center mb-4">
            <h2 className='rashed-secondColor h1'>Our Partners</h2>
          </div>
          <Row>
            <Col xl={3} lg={3} md={4} className='col-6'>
              <div className="partimg">
                <img src={partner1} alt="part" className=" w-100" />
              </div>
            </Col>
            <Col xl={3} lg={3} md={4} className='col-6'>
              <div className="partimg">
                <img src={partner2} alt="part" className=" w-100" />
              </div>
            </Col>
            <Col xl={3} lg={3} md={4} className='col-6'>
              <div className="partimg">
                <img src={partner3} alt="part" className=" w-100" />
              </div>
            </Col>
            <Col xl={3} lg={3} md={4} className='col-6'>
              <div className="partimg">
                <img src={partner4} alt="part" className=" w-100" />
              </div>
            </Col>



          </Row>
        </Container>
      </div>
      <div className="app__typing py-2" dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}>
        <Container>
          <div className='grid'>
            <div className="content">
              <p className='h6'>   The most qualified, skillful and professional Doct

              </p>
            </div>
            <div className="visible-xs">
              {/* <button className="animated-button1 whats fix-whats3 btn w-btn-open"> */}
              <button className="animated-button1 whats fix-whats2 btn w-btn-open">
                <span></span><span></span><span></span><span></span>
                <div className="dt d-flex justify-content-center align-item-center flex-row"><div className="dtc">
                  <p>WhatsApp<label>Get Immediate Info</label></p>
                  </div><div className="dtc"><i className="fab fa-whatsapp">
                    </i>
                    </div>
                    </div>
                    </button>
                    </div>
          </div>
        </Container>
      </div>

      <div className="app__footer">
        <Container>
          <Row dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}>
            <Col xl={3} lg={3} md={5} sm={11}>
              <img src={logo} width={175} style={{height: '120px'}} alt="logo"  />
              <p className='mt-32'>At DentSpa® with the latest technology, and a great team of dentists and specialists, we are able to provide great, quality dental care to our patients.</p>
              <div className="iso__footer">
                <img src={iso1} alt="iso"  />
                <img src={iso2} alt="iso"  />
                <img src={iso3} alt="iso"  />
              </div>
            </Col>
            <Col xl={3} lg={3} md={5} sm={11}>
              <h4 className=' mb-3 rashed-secondColor'>Contact us</h4>
              <div className="mt-32">

                <p> <strong>Istanbul, Turkey</strong>
                  <br />

                  Teşvikiye Mah. Hakkı Yeten Cad.
                  Terrace Fulya Centre, 1 no: 11 K: M4             <br />
                  <br />
                  info@dentspa.com</p>
                  <ul className="list-unstyled list-inline social">
                      <li><a href="tel://+90 542 258 88 39" style= {{color: '#3b5998',background:'#ecf0f8'}} >
                              <i className="fas fa-phone"  ></i> </a>
                      </li>
                      <li> 
                        <a href="https://wa.me/905422588839?text=Hello%2C+Can+I+book+an+appointment%21" target="blank" style={{ color: '#25d366 ',background:' #25d3661f' }}
                                >
                              <i className="fab fa-whatsapp"></i> </a>
                
                      </li>
                      <li><a href="https://m.me/DentSpaINT" target="blank" style= {{color:' #0084ff',background:' #ecf5f8'}} >
                              <i className="fab fa-facebook-messenger"></i> </a>
                      </li>
                      <li><a href="mailto:info@dentspa.com.tr" style={{ color:' #bc2a8d ',background:' #f8ecf4' }}>
                              <i className="far fa-envelope"></i> </a>
                      </li>
                      <li><a href="https://www.google.com/maps/dir//Teşvikiye+Mahallesi,+DentSpa+Ağız+ve+Diş+Sağlığı+Polikliniği,+Şişli%2FIstanbul/" target="blank" style={{ color:' #dc4b3e',background:' #b2f3fe'  }}>
                              <i className="fas fa-map-marker-alt"></i> </a>
                      </li>
                  </ul>
              </div>
            </Col>
            <Col xl={3} lg={3} md={5} sm={11}>
              <h4 className=' mb-3 rashed-secondColor'>+90 850 255 8888</h4>
              <div className="mt-32">
                <p><strong>We speak five languages.</strong><br />
                  if you speak Turkish, English,
                  Russian, Arabic or French.
                  Our customer care team would
                  love to help you.
                </p>
              </div>
            </Col>
            {/* col-xl-3 col-lg-4 col-md-5 col-sm-6 col-8 */}
            <Col xl={3} lg={4} md={5} sm={9} className='col-11'>
              <h4 className=' mb-3 rashed-secondColor'>Send Message</h4>
              <form className='mt-32 bg-white text-center py-4 px-3 rounded-3' dir='ltr'>
                <input type="text" placeholder='Full Name' className='mx-auto form-control rashed-bgInput mb-3' required name="name" id="name" />
                <PhoneInput
                   country={val === 'ar' ? 'eg': val ===  'ur' ? 'tr' : val === 'en' ? 'us' : val === 'fr' ? 'fr' : val === 'ru' ? 'ru' : 'ae' }
              
                  // country={val === 'ar' || val ===  'ur' || 'ur'? 'eg' : val === 'en' ? 'us' : val === 'fr' ? 'fr' : 'ae'}
                  preferredCountries={['eg', 'sa', 'us', 'fr']}
                  enableSearch={true}
                  searchPlaceholder='phone number...'
                  inputclassName={`rashed-bgInput w-100 mx-auto form-control`}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    id: 'phone',
                    // autoFocus: true
                  }}

                />
                <textarea placeholder='Message' className='mx-auto form-control rashed-bgInput my-3' name='message' id='message'></textarea>
                <button type='submit' className='btn send__footer '>Send Message</button>
              </form>
            </Col>

          </Row>
        </Container>
      </div>
      <div className="copy">
        <div className="container">
            <p className="copyp roboto">
                2019 - <span>DentSpa  </span> © All Rights Reserved.
            </p>
        </div>
    </div>
    </>
  )
}

export default ChangeSmile