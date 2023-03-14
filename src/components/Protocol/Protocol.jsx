import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import img from '../../img/pendemic-video.png'
import virus from '../../img/virus-2.png'
import virus1 from '../../img/virus-1.png'
import planet from '../../img/planet-1.png'
import { BsPlayFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Slider from "react-slick";
import teeth1 from '../../img/img/gif/1.png';
import teeth2 from '../../img/img/gif/2.png';
import teeth3 from '../../img/img/gif/3.png';
import teeth4 from '../../img/img/gif/4.png';

const Protocol = ({ val }) => {
  const [play, setPlay] = useState(0);
  // const [modal, setmodal] = useState(false);

  const handePlay = (p) => {
    setPlay(p);
    // setmodal(false)
  };

  const handleClose = () => {
    setPlay(0);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setPlay(0);
    }
  };
  useEffect(() => {

  }, [play])



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
  const cases =
    [
      {
        id: 1,
        img: teeth1,
        alt: '111'
      },
      {
        id: 2,
        img: teeth2,
        alt: '222'
      },
      {
        id: 3,
        img: teeth3,
        alt: '333'
      },
      {
        id: 4,
        img: teeth4,
        alt: '444'
      }
    ]





  return (
    <>
      <div className="app__protocol" >
        <Container>
          <Row className='app__protocol-grid gx-lg-5 gx-0 gy-lg-0 gy-5 special-reverse'>
            <Col lg={6} className='app__protocol-left' dir={val === 'ar' || val === 'ur' ? 'rtl' : 'ltr'} >
              <h2 className='special-reverce-heading-lg mb-3'>Pandemic Distancing Protocol</h2>
              <p style={{fontSize: '14px'}}>To prevent any emergence of any potential transmission of any virus, we are using advanced equipment to sterilize every corner of our clinic; anticipated consumable resources needs (e.g. masks; gloves; hand hygiene products ;..) have been estimated. Your well-being matters to us, we expect the same consideration from you.</p>
              <div className="center">
                {/* <button className="animated-button1 whats fix-whats3 w-btn w-btn-open" target="blank"> */}
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
                <img className='virus-3' src={virus} alt="" />
              </div>
            </Col>
            <Col lg={6} className='app__protocol-right mx-auto'>
              <h2 className='special-reverce-heading-sm h1 mb-4' dir={val === 'ar' || val === 'ur' ? 'rtl' : 'ltr'}>Pandemic Distancing Protocol</h2>
              {/* <div className='video-wrapper' style={{ position: 'relative', boxShadow: '0 25px 80px rgb(0 0 0 / 20%)' }}>

                <img src={img} alt="video-wrapper" className='w-100' />

                <div className="play" onClick={() => handePlay(1)} data-bs-toggle="modal" data-bs-target="#exampleModal10">
                  <BsPlayFill size={29} color={'#fff'} />
                </div>

                <div
                  className="modal modal-fullscreen hide   fade"
                  id="exampleModal10"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  data-bs-backdrop="static"
                  onClick={handleClose}
                  onKeyDown={handleKeyDown}
                  role="button"

                >
                  <div className="modal-dialog modal-fullscreen ">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => handePlay(0)}></button>
                      </div>
                      <div className="modal-body ">
                    <iframe src={`https://www.youtube.com/embed/SwXT0Z_Ivck?autoplay=${play}&showinfo=0&rel=0`} title='video-3' allow="autoplay" width="90%" height="80%" className=''></iframe> 
                      </div>
                    </div>
                  </div>
                </div>

              </div> */}
              <div className="img-tab">
                <Slider {...slider1} className='text-center' dir='ltr'>
                  {cases.map((item, i) => (
                    <img key={i} src={item.img} alt={item.alt} style={{ minHeight: '250px', maxHeight: '300px', cursor: 'pointer' }} className=' rounded-4' />
                  ))}
                </Slider>
              </div>
              <img className='virus-1' src={virus} alt="virus-1" />
              <img className='virus-2' src={virus1} alt="virus-2" />
            </Col>
          </Row>
        </Container>
        <img className='left-plant-img' src={planet} alt="plant" />
      </div>

    </>
  )
}

export default Protocol