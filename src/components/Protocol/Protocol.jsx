import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
// import img from '../../img/pendemic-video.png'
import virus from '../../img/virus-2.png'
import virus1 from '../../img/virus-1.png'
import planet from '../../img/planet-1.png'
// import { BsPlayFill } from "react-icons/bs";
// import { BsWhatsapp } from "react-icons/bs";
import Slider from "react-slick";
// import teeth1 from '../../img/img/gif/1.png';
// import teeth2 from '../../img/img/gif/2.png';
// import teeth3 from '../../img/img/gif/3.png';
// import teeth4 from '../../img/img/gif/4.png';

const Protocol = ({ val, whatsNumber, sec4 ,slider}) => {
  // const [play, setPlay] = useState(0);

  // const handePlay = (p) => {
  //   setPlay(p);
  // };

  // const handleClose = () => {
  //   setPlay(0);
  // };

  // const handleKeyDown = (event) => {
  //   if (event.key === 'Escape') {
  //     setPlay(0);
  //   }
  // };
  // useEffect(() => {

  // }, [play]) 


  const slider1 = {
    dots: false,
    arrows: true,
    infinite: true,
    // centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  // const cases =
  //   [
  //     {
  //       id: 1,
  //       img: teeth1,
  //       alt: '111'
  //     },
  //     {
  //       id: 2,
  //       img: teeth2,
  //       alt: '222'
  //     },
  //     {
  //       id: 3,
  //       img: teeth3,
  //       alt: '333'
  //     },
  //     {
  //       id: 4,
  //       img: teeth4,
  //       alt: '444'
  //     }
  //   ] 

  return (
    <>
      <div className="app__protocol" >
        <Container>
          <Row className='app__protocol-grid gx-lg-5 gx-0 gy-lg-0 gy-5 special-reverse'>
            <Col lg={6} className={`app__protocol-left`} dir={val === '1' || val === '5' ? 'rtl' : 'ltr'} >
              <h2 className='special-reverce-heading-lg mb-3'>{sec4?.Title}</h2>
              <p className={`mb-1 text-center ${val === '1' || val === '5' ? 'text-lg-end' : 'text-lg-start'}`} style={{ fontSize: '14px' }}>{sec4?.body}</p>
              <div className="center caption-tab">
                {/* <a href={`${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} className="animated-button1 whats fix-whats2 w-btn w-btn-open" target="blank">
                  <span></span><span></span><span></span><span></span>
                  <div className="dt">
                    <div className="dtc">
                      <p>WhatsApp
                        <label>{val === '1' ? 'احصل على معلومات فورية' : val === '2' ? 'Get Immediate Info' : val === '3' ? 'Obtenez des informations immédiates' : val === '4' ? 'Получить немедленную информацию' : val === '5' ? 'Hemen Bilgi Alınz' : 'Get Immediate Info'}</label>

                      </p>
                    </div>
                    <div className="dtc">
                      <BsWhatsapp />
                    </div>
                  </div>
                </a> */}

                    <a href={`${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} className="animated-button1 whats fix-whats2 w-btn w-btn-open" target='_blank' rel="noreferrer">
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

                <img loading='lazy' className='virus-3' src={virus} alt="" />
              </div>
            </Col>
            <Col lg={6} className='app__protocol-right mx-auto'>
              <h2 className='special-reverce-heading-sm h2 mb-4 text-center' dir={val === '1' || val === '5' ? 'rtl' : 'ltr'}>{sec4?.Title}</h2>

              <div className="img-tab">
                <Slider {...slider1} className='text-center' dir='ltr'>
                  {slider.filter(el => el.sect === "4").map((item, i) => (
                    <img key={i} loading='lazy' src={`https://cureclinckapi.amlakturks.com/storage/app/sliders/` + item.FileURL} alt={item.FileURL} style={{ cursor: 'pointer' }} className='slider-single-high rounded-4' />
                  ))}
                </Slider>
              </div>
              <img loading='lazy' className='virus-1' src={virus} alt="virus-1" />
              <img loading='lazy' className='virus-2' src={virus1} alt="virus-2" />
            </Col>
          </Row>
        </Container>
        <img loading='lazy' className='left-plant-img' src={planet} alt="plant" />
      </div>

    </>
  )
}

export default Protocol