import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
// import { BsWhatsapp } from "react-icons/bs";

// import img1 from '../../img/implant.png'
// import img2 from '../../img/orth.png'
// import img3 from '../../img/smile.png'
import MemberSmail from './MemberSmail';
import icons1 from '../../img/img/icons/1.png'
// import icons2 from '../../img/img/icons/2.png'
// import icons3 from '../../img/img/icons/3.png'
// import icons4 from '../../img/img/icons/4.png'
import logo from '../../img/logo.png'
import iso1 from '../../img/iso-1.png'
import iso2 from '../../img/iso-4.png'
import iso3 from '../../img/iso-3.png'
import partner1 from '../../img/img/armaera.png'
import partner2 from '../../img/img/parisaline.png'
import partner3 from '../../img/img/mastery.png'
import partner4 from '../../img/img/icdm.png'
import PhoneInput from 'react-phone-input-2';


const ChangeSmile = ({val , sec5 , sec6 , whatsNumber}) => {


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
 

  return (

    <>
      <div className="app__ChangeSmile" dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}>
        <Container >
          <div className="main-title-section text-center">
            <h2 className='rashed-secondColor'>{val === 'ar' ? 'نغير ابتسامتك ، أنت تغير حياتك' : val === 'us' ? 'We Change Your Smile, You Change Your Life' : val === 'fr' ? 'Nous changeons votre sourire, vous changez votre vie' : val === 'ru' ? 'Мы меняем твою улыбку, ты меняешь свою жизнь' : val === 'ur' ? 'Gülüşünü Değiştiriyoruz, Sen Hayatını Değiştiriyorsun' : 'We Change Your Smile, You Change Your Life'}</h2>
          </div>
          <Row className='app__ChangeSmile-img mt-5 gy-4' dir={val === 'ar' || val ===  'ur' ? 'rtl' : 'ltr'}>
            {Object.keys(sec5).length > 2 ?
              <Slider {...slider2}>
                {sec5.map((item, i) => (
                  <MemberSmail val={val} key={i} img={item.Image} title={item.Title} text={item.Body} cond={true} />
                ))}
              </Slider>
              :
              Object.keys(sec5).length > 0 ?
                <>
                  {sec5.map((item, i) => (
                    <MemberSmail val={val} key={i} img={item.Image} title={item.Title} text={item.Body} cond={false} />
                  ))}
                </>
                :
                null
            }

          </Row>

          {whatsNumber !== null && whatsNumber !== undefined ?
                <div className="send text-center mt-5"> 
                    {/* <button className="animated-button1 whats fix-whats2 w-btn w-btn-open" target='_blank' rel="noreferrer"> */}
                    <a href={`https://wa.me/${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} className="animated-button1 whats fix-whats2 w-btn w-btn-open rounded-2" target='_blank' rel="noreferrer">
                        <span></span><span></span><span></span><span></span>
                        <div className="dt">
                            <div className="dtc">
                                <p>WhatsApp
                                    <label>{val === 'ar' ? 'احصل على معلومات فورية' : val === 'us' ? 'Get Immediate Info' : val === 'fr' ? 'Obtenez des informations immédiates' : val === 'ru' ? 'Получить немедленную информацию' : val === 'ur' ? 'Hemen Bilgi Alınz' : 'Get Immediate Info'}</label>
                                </p>
                            </div>
                            <div className="dtc">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                        </div>
                    </a>
                </div>
                :
                null
          }

        </Container>
      </div>

      <div className="nums py-5" dir={val === 'ar' || val ===  'ur'   ? 'rtl' : 'ltr'}>

        <Container>

          {Object.keys(sec6).length > 3 ?
            <Slider {...slider3} className='text-center'>
              {sec6.map((item, i) => (
                <div key={i} className="numb text-white" style={{width: '90%'}}>
                  <img src={item.image !== null && item.image !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section6/${item.image}` : icons1} className='mx-auto' alt="icon-img" />
                  <h2>
                    {item.Body !== null && item.Body !== undefined ? item.Body : 'test'}
                    <span>+</span>
                  </h2>
                  <p style={{fontWeight: '500' , whiteSpace: 'nowrap'}}>{item.Title !== null && item.Title !== undefined ? item.Title : 'test'}</p>
                </div>
              ))}
            </Slider>
            :
              Object.keys(sec6).length > 2 ?
                <div className="row gy-4 ">
                  {sec6.map((item , i) => (
                    <div key={i} className="col-4">
                      <div className="numb text-white">
                        <img src={item.fileUrl !== null && item.fileUrl !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section6/${item.fileUrl}` : icons1} className='mx-auto' alt="icon-img" />
                        <h2>
                          {item.StringValue !== null && item.StringValue !== undefined ? item.StringValue : 'test'}
                          <span>+</span>
                        </h2>
                        <p style={{fontWeight: '500' , whiteSpace: 'nowrap'}}>{item.StringKey !== null && item.StringKey !== undefined ? item.StringKey : 'test'}</p>
                      </div>
                    </div>
                  ))}
                </div>
                :
                Object.keys(sec6).length > 0 ?
                <div className="row gy-4 ">
                  {sec6.map((item , i) => (
                    <div key={i} className="col-lg-4 col-6">
                      <div className="numb text-white">
                        <img src={item.fileUrl !== null && item.fileUrl !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section6/${item.fileUrl}` : icons1} className='mx-auto' alt="icon-img" />
                        <h2>
                          {item.StringValue !== null && item.StringValue !== undefined ? item.StringValue : 'test'}
                          <span>+</span>
                        </h2>
                        <p style={{fontWeight: '500' , whiteSpace: 'nowrap'}}>{item.StringKey !== null && item.StringKey !== undefined ? item.StringKey : 'test'}</p>
                      </div>
                    </div>
                  ))}
                </div>
                :
                null
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
              <p className='h6'>
                {val === 'ar' ? 'الطبيب الأكثر تأهيلا ومهارة ومهنية' : val === 'us' ? 'The most qualified, skillful and professional Doctor' : val === 'fr' ? 'Le médecin le plus qualifié, le plus habile et le plus professionnel' : val === 'ru' ? 'Самый квалифицированный, умелый и профессиональный врач' : val === 'ur' ? 'En nitelikli, yetenekli ve profesyonel Doktor' : 'The most qualified, skillful and professional Doctor'}
              </p>
            </div>
            <div className="visible-xs">
              {/* <button className="animated-button1 whats fix-whats3 btn w-btn-open"> */}
              <a href={`https://wa.me/${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} target='_blank' rel="noreferrer" className="animated-button1 whats fix-whats2 btn w-btn-open">
                <span></span><span></span><span></span><span></span>
                <div className="dt d-flex justify-content-center align-item-center flex-row"><div className="dtc">
                  <p>WhatsApp
                    <label>{val === 'ar' ? 'احصل على معلومات فورية' : val === 'us' ? 'Get Immediate Info' : val === 'fr' ? 'Obtenez des informations immédiates' : val === 'ru' ? 'Получить немедленную информацию' : val === 'ur' ? 'Hemen Bilgi Alınz' : 'Get Immediate Info'}</label>
                  </p>
                  </div><div className="dtc"><i className="fab fa-whatsapp">
                    </i>
                    </div>
                    </div>
                    </a>
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
                      <li><a href="tel://+90 542 258 88 39" target='_blank' rel="noreferrer" style= {{color: '#3b5998',background:'#ecf0f8'}} >
                              <i className="fas fa-phone"  ></i> </a>
                      </li>
                      <li> 
                        <a href="https://wa.me/905422588839?text=Hello%2C+Can+I+book+an+appointment%21"  target='_blank' rel="noreferrer" style={{ color: '#25d366 ',background:' #25d3661f' }}
                                >
                              <i className="fab fa-whatsapp"></i> </a>
                
                      </li>
                      <li><a href="https://m.me/DentSpaINT"  target='_blank' rel="noreferrer" style= {{color:' #0084ff',background:' #ecf5f8'}} >
                              <i className="fab fa-facebook-messenger"></i> </a>
                      </li>
                      <li><a href="mailto:info@dentspa.com.tr" style={{ color:' #bc2a8d ',background:' #f8ecf4' }}>
                              <i className="far fa-envelope"></i> </a>
                      </li>
                      <li><a href="https://www.google.com/maps/dir//Teşvikiye+Mahallesi,+DentSpa+Ağız+ve+Diş+Sağlığı+Polikliniği,+Şişli%2FIstanbul/"  target='_blank' rel="noreferrer" style={{ color:' #dc4b3e',background:' #b2f3fe'  }}>
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
                2023 - <span> Care Clinic  </span> © All Rights Reserved.
            </p>
        </div>
    </div>
    </>
  )
}

export default ChangeSmile