import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import MemberSmail from './MemberSmail';
import icons1 from '../../img/img/icons/1.png'
import logo from '../../img/logo.png'
import iso1 from '../../img/iso-1.png'
import iso2 from '../../img/iso-4.png'
import iso3 from '../../img/iso-3.png'
// import partner1 from '../../img/img/armaera.png'
import PhoneInput from 'react-phone-input-2';


const ChangeSmile = ({ contactus, brand, val, sec5, sec6, whatsNumber }) => {


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
      <div className="app__ChangeSmile" dir={val === '1' ? 'rtl' : 'ltr'}>
        <Container >
          <div className="main-title-section text-center">
            <h2 className='rashed-secondColor'>{val === '1' ? 'نغير ابتسامتك ، أنت تغير حياتك' : val === 'us' ? 'We Change Your Smile, You Change Your Life' : val === 'fr' ? 'Nous changeons votre sourire, vous changez votre vie' : val === 'ru' ? 'Мы меняем твою улыбку, ты меняешь свою жизнь' : val === 'ur' ? 'Gülüşünü Değiştiriyoruz, Sen Hayatını Değiştiriyorsun' : 'We Change Your Smile, You Change Your Life'}</h2>
          </div>
          <Row className='app__ChangeSmile-img mt-5 gy-4 d-flex justify-content-center align-items-center' dir={val === '1' ? 'rtl' : 'ltr'}>
            {Object.keys(sec5).length > 2 ?
              <Slider {...slider2}>
                {sec5.map((item, i) => (
                  <MemberSmail val={val} key={i} img={item.image} title={item.Title} text={item.Body} cond={true} />
                ))}
              </Slider>
              :
              Object.keys(sec5).length > 0 ?
                <>
                  {sec5.map((item, i) => (
                    <MemberSmail val={val} key={i} img={item.image} title={item.Title} text={item.Body} cond={false} />
                  ))}
                </>
                :
                null
            }

          </Row>
          {whatsNumber !== null && whatsNumber !== undefined ?
            <div className="send text-center mt-5">
              {/* <button className="animated-button1 whats fix-whats2 w-btn w-btn-open" target='_blank' rel="noreferrer"> */}
              <a href={`${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} className="animated-button1 whats fix-whats2 w-btn w-btn-open rounded-2" target='_blank' rel="noreferrer">
                <span></span><span></span><span></span><span></span>
                <div className="dt">
                  <div className="dtc">
                    <p>WhatsApp
                      <label>{val === '1' ? 'احصل على معلومات فورية' : val === '2' ? 'Get Immediate Info' : val === '3' ? 'Obtenez des informations immédiates' : val === '4' ? 'Получить немедленную информацию' : val === '5' ? 'Hemen Bilgi Alınz' : 'Get Immediate Info'}</label>
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

      <div className="nums py-5" dir={val === '1' ? 'rtl' : 'ltr'}>
        <Container>

          {Object.keys(sec6).length > 3 ?
            <Slider {...slider3} className='text-center'>
              {sec6.map((item, i) => (
                <div key={i} className="numb text-white numb-slide">
                  <img loading='lazy' src={item.fileUrl !== null && item.fileUrl !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section6/${item.fileUrl}` : icons1} className='mx-auto' style={{height: '90px'}} alt="icon-img" />
                  <h2>
                    {item.StringValue !== null && item.StringValue !== undefined ? item.StringValue : ''}
                    <span>+</span>
                  </h2>
                  <p style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>{item.StringKey !== null && item.StringKey !== undefined ? item.StringKey : ''}</p>
                </div>
              ))}
            </Slider>
            :
            Object.keys(sec6).length === 3 ?
              <div className="row gy-4 gx-4 d-flex justify-content-center align-items-center">
                {sec6.map((item, i) => (
                  <div key={i} className="col-4">
                    <div className="numb text-white">
                      <img loading='lazy' src={item.fileUrl !== null && item.fileUrl !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section6/${item.fileUrl}` : icons1} className='mx-auto' style={{height: '90px'}} alt="icon-img" />
                      <h2>
                        {item.StringValue !== null && item.StringValue !== undefined ? item.StringValue : ''}
                        <span>+</span>
                      </h2>
                      <p style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>{item.StringKey !== null && item.StringKey !== undefined ? item.StringKey : ''}</p>
                    </div>
                  </div>
                ))}
              </div>
              :
              Object.keys(sec6).length > 0 ?
                <div className="row gy-4 gx-4 d-flex justify-content-center align-items-center">
                  {sec6.map((item, i) => (
                    <div key={i} className="col-lg-4 col-6">
                      <div className="numb text-white">
                        <img loading='lazy' src={item.fileUrl !== null && item.fileUrl !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section6/${item.fileUrl}` : icons1} className='mx-auto' style={{height: '90px'}} alt="icon-img" />
                        <h2>
                          {item.StringValue !== null && item.StringValue !== undefined ? item.StringValue : ''}
                          <span>+</span>
                        </h2>
                        <p style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>{item.StringKey !== null && item.StringKey !== undefined ? item.StringKey : ''}</p>
                      </div>
                    </div>
                  ))}
                </div>
                :
                null
          }
        </Container>
      </div>

      <div className="app__Partners " dir={val === '1' ? 'rtl' : 'ltr'}>
        <Container>
          <div className="main-title-section text-center mb-4">
            <h2 className='rashed-secondColor h1'>
              {val === '1' ? ' شركاؤنا      ' :
                val === '2' ? 'Our Partners  ' :
                  val === '3' ? 'Nos partenaires' :
                    val === '4' ? '    Наши партнеры  ' :
                      val === '5' ? 'Bizim ortaklarımız' : 'شركاؤنا'}

            </h2>
            <label></label>

          </div>
          <Row className="row gy-4 gx-4 d-flex justify-content-center align-items-center">

            {brand.map((item, i) => (
              <Col key={i} xl={3} lg={3} md={4} className='col-6'>
                <div className="partimg">
                  <img loading='lazy' src={`https://cureclinckapi.amlakturks.com/storage/app/brands/` + item.Image} alt="part" className=" w-100" style={{height: '110px'}} />
                </div>
              </Col>
            ))}

          </Row>
        </Container>
      </div>
      <div className="app__typing py-2" dir={val === '1' ? 'rtl' : 'ltr'}>
        <Container>
          <div className='grid'>
            <div className="content">
              <p className='h6'>
                {val === '1' ? 'الطبيب الأكثر تأهيلا ومهارة ومهنية' : val === '2' ? 'The most qualified, skillful and professional Doctor' : val === '3' ? 'Le médecin le plus qualifié, le plus habile et le plus professionnel' : val === '4' ? 'Самый квалифицированный, умелый и профессиональный врач' : val === '5' ? 'En nitelikli, yetenekli ve profesyonel Doktor' : 'The most qualified, skillful and professional Doctor'}
              </p>
            </div>
            <div className="visible-xs">
              {/* <button className="animated-button1 whats fix-whats3 btn w-btn-open"> */}
              <a href={`${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} target='_blank' rel="noreferrer" className="animated-button1 whats fix-whats2 btn w-btn-open">
                <span></span><span></span><span></span><span></span>
                <div className="dt d-flex justify-content-center align-item-center flex-row"><div className="dtc">
                  <p>WhatsApp
                    <label>{val === '1' ? 'احصل على معلومات فورية' : val === '2' ? 'Get Immediate Info' : val === '3' ? 'Obtenez des informations immédiates' : val === '4' ? 'Получить немедленную информацию' : val === '5' ? 'Hemen Bilgi Alınz' : 'Get Immediate Info'}</label>
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
          <Row dir={val === '1' ? 'rtl' : 'ltr'}>
            <Col xl={3} lg={3} md={5} sm={11}>
              <img loading='lazy' src={logo} width={175} style={{ height: '120px' }} alt="logo" />
              <p className='mt-32'>{contactus?.footerText}</p>
              <div className="iso__footer">
                <img loading='lazy' src={iso1} alt="iso" />
                <img loading='lazy' src={iso2} alt="iso" />
                <img loading='lazy' src={iso3} alt="iso" />
              </div>
            </Col>
            <Col xl={3} lg={3} md={5} sm={11}>
              <h4 className=' mb-3 rashed-secondColor'>
                
              {val === '1' ? ' اتصل بنا      ' :
                val === '2' ? ' Contact us  ' :
                  val === '3' ? 'Contactez-nous' :
                    val === '4' ? '     Связаться с нами    ' :
                      val === '5' ? 'Bize Ulaşın  ' : ' اتصل بنا'}
               </h4>
              <div className="mt-32">

                <p> <strong>{contactus?.Citycountry}</strong>
                  <br />
                  {contactus?.address}
                  <br />
                  <br />{contactus?.Email}</p>
                <ul className="list-unstyled list-inline social">
                  <li><a href={`tel://+${contactus?.Phone}`} target='_blank' rel="noreferrer" style={{ color: '#3b5998', background: '#ecf0f8' }} >
                    <i className="fas fa-phone"  ></i> </a>
                  </li>
                  <li>
                    <a href={`${contactus?.whatsapp}?text=Hello%2C+Can+I+book+an+appointment%21`} target='_blank' rel="noreferrer" style={{ color: '#25d366 ', background: ' #25d3661f' }}
                    >
                      <i className="fab fa-whatsapp"></i> </a>

                  </li>
                  <li><a href={`${contactus?.Messenger}/DentSpaINT`} target='_blank' rel="noreferrer" style={{ color: ' #0084ff', background: ' #ecf5f8' }} >
                    <i className="fab fa-facebook-messenger"></i> </a>
                  </li>
                  <li><a href="mailto:info@dentspa.com.tr" style={{ color: ' #bc2a8d ', background: ' #f8ecf4' }}>
                    <i className="far fa-envelope"></i> </a>
                  </li>
                  
                  <li>
                    <a href={`https://www.google.com/maps/dir//${Number(contactus?.Lat)},${Number(contactus?.Longit)}/@${Number(contactus?.Lat)},${Number(contactus?.Longit)},16z`} target='_blank' rel="noreferrer" style={{ color: ' #dc4b3e', background: ' #b2f3fe' }}>
                      <i className="fas fa-map-marker-alt"></i> 
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={3} lg={3} md={5} sm={11}>
              <h4 className=' mb-3 rashed-secondColor'>{contactus?.Phone}</h4>
              <div className="mt-32">
                <p><strong> {contactus?.footerHead}</strong><br />
                  {contactus?.footerBody}
                </p>
              </div>
            </Col>
            <Col xl={3} lg={4} md={5} sm={9} className='col-11'>
              <h4 className=' mb-3 rashed-secondColor'>

              {val === '1' ? ' إرسال رساله      ' :
                val === '2' ? 'Send Message  ' :
                  val === '3' ? 'Envoyer le message' :
                    val === '4' ? 'Отправить сообщение' :
                      val === '5' ? 'Mesaj gönder' : 'شركاؤنا'}
 
              </h4>
              <form className='mt-32 bg-white text-center py-4 px-3 rounded-3' dir='ltr'>
                <input type="text" placeholder='Full Name' className='mx-auto form-control rashed-bgInput mb-3' required name="name" id="name" />
                <PhoneInput
                  country={val === '1' ? 'eg' : val === '5' ? 'tr' : val === '2' ? 'us' : val === '3' ? 'fr' : val === '4' ? 'ru' : 'ae'}

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
                <button type='submit' className='btn send__footer '>
                {val === '1' ? ' إرسال رساله      ' :
                val === '2' ? 'Send Message  ' :
                  val === '3' ? 'Envoyer le message' :
                    val === '4' ? 'Отправить сообщение' :
                      val === '5' ? 'Mesaj gönder' : 'شركاؤنا'}
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="copy">
        <div className="container">
          <p className="copyp roboto">
            2023 - <span> Cure Clinic  </span> © All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default ChangeSmile