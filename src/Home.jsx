import React from 'react';
import Slider from "react-slick";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import img111 from './img/img/slider.png';
import img1 from './img/img/img1.png';
import teeth1 from './img/img/gif/1.png';
import teeth2 from './img/img/gif/2.png';
import teeth3 from './img/img/gif/3.png';
import teeth4 from './img/img/gif/4.png';
import Member from './Member';

export default function Home({ sec1, val, sec2, staff, whatsNumber }) {

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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  return (
    <>
      <header className='py-5' style={{ backgroundImage: `url(${img111}` }} dir={val === '1' || val === '5' ? 'rtl' : 'ltr'}>
        <div className="container h-100">
          <div className="row gy-4 column__sm-reverse gx-md-5 gx-0 d-flex justify-content-center align-items-center mt-5 pt-5">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-8">
              <form className='form bg-white text-center py-4 px-3 rounded-3' dir='ltr'>
                <h4 className='fw-bold mb-3 rashed-secondColor'>Diagnosis And Cost In Minutes</h4>
                <input type="text" placeholder='Full Name' className='mx-auto form-control rashed-bgInput mb-3' required name="name" id="name" />
                <PhoneInput
                  country={val === 'ar' ? 'eg' : val === 'ur' ? 'tr' : val === 'en' ? 'us' : val === 'fr' ? 'fr' : val === 'ru' ? 'ru' : 'ae'}
                  preferredCountries={['eg', 'sa', 'us', 'fr']}
                  enableSearch={true}
                  searchPlaceholder='phone number...'
                  inputclassName={`w-100 mx-auto form-control`}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    id: 'phone',
                    // autoFocus: true
                  }}
                  inputStyle={{ width: '100%' }}
                />
                <textarea placeholder='Message' className='mx-auto form-control rashed-bgInput my-3' name='message' id='message'></textarea>
                <button type='submit' className='btn rashed-mainBtn'>Send Message</button>
              </form>
            </div>
            <div className="col-md-7 col-11">
              <div className="caption text-white">
                <p> {sec1?.SmallOne}</p>
                <h1>{sec1?.BigOne}
                  {/* <strong className='rashed-mainColor'> Luxury Place</strong> */}
                  <strong className='rashed-secondColor'>{sec1?.ColorOne}</strong>
                </h1>
                <p className='mb-1'> {sec1?.SmallFirst} </p>
                <p className='mb-0'>{sec1?.SmallSec}</p>
                <div className="visible-xs">
                  {/* <button className="animated-button1 whats fix-whats3 btn w-btn-open"> */}
                  <a href={`https://wa.me/${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} className="animated-button1 whats fix-whats2 btn w-btn-open">
                    <span></span><span></span><span></span><span></span>
                    <div className="dt d-flex justify-content-center align-item-center flex-row">
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
                {/* <button className='btn rashed-mainBtn rashed-mainColor mt-3 py-2 px-4'>Send Message</button> */}

              </div>
            </div>
          </div>
        </div>
      </header>


      <section id='rashed' className='py-5 rashed-mainBg second-sec' dir={val === '1' || val === '5' ? 'rtl' : 'ltr'}>
        <div className="container">
          {Object.keys(sec2).length > 2 ?
            <div className="special-sec py-2 px-3 rounded-3 bg-white">
              <Slider {...slider2}>
                {sec2.map((item, i) => (
                  <div key={i} className="feature">
                    <img src={item.FilePath !== null && item.FilePath !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section2/${item?.FilePath}` : img1} className='w-75' style={{ height: '180px' }} alt="doctor" />
                    <h6 className='mb-2'>{item.Title !== null && item.Title !== undefined ? item.Title : 'Title'}</h6>
                    <p className='text-muted' style={{ fontSize: '14px', width: '75%' }}>{item.Body !== null && item.Body !== undefined ? item.Body : 'Body'}</p>
                  </div>
                ))}
              </Slider>
            </div>
            :
            Object.keys(sec2).length > 0 ?
              <div className="row gx-0 d-flex justify-content-center align-items-center bg-white rounded-3 shadow px-3 py-2 special-sec">
                {sec2.map((el, i) => (
                  <div key={i} className="col-md-4 col-11">
                    <div className="feature">
                      <img src={el.FilePath !== null && el.FilePath !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section2/${el?.FilePath}` : img1} className='w-75' style={{ height: '180px' }} alt="doctor" />
                      <h6 className='mb-2'>{el.Title !== null && el.Title !== undefined ? el.Title : 'Title'}</h6>
                      <p className='text-muted' style={{ fontSize: '14px', width: '75%' }}>{el.Body !== null && el.Body !== undefined ? el.Body : 'Body'}</p>
                    </div>
                  </div>
                ))}
              </div>
              :
              null
          }

          <ul className="nav nav-pills justify-content-center mb-5" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-beforeafter-tab" data-bs-toggle="pill" data-bs-target="#pills-beforeafter" type="button" role="tab" aria-controls="pills-beforeafter" aria-selected="true">Before & After</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-place-tab" data-bs-toggle="pill" data-bs-target="#pills-place" type="button" role="tab" aria-controls="pills-place" aria-selected="false">Your Luxury Place</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-patients-tab" data-bs-toggle="pill" data-bs-target="#pills-patients" type="button" role="tab" aria-controls="pills-patients" aria-selected="false">Our Happy Patients</button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-beforeafter" role="tabpanel" aria-labelledby="pills-beforeafter-tab" tabIndex="0">

              <div className="row gy-5 column__sm-reverse gx-md-4 gx-0 gy-4 d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-11">
                  <div className="caption-tab text-white">
                    <h2 className='fw-bold mb-2'>Before & After Photos</h2>
                    <p className='mb-2'>Some images for successful cases for our patients.</p>
                    <button className="animated-button1 whats fix-whats2 w-btn w-btn-open" target='_blank' rel="noreferrer">
                      <span></span><span></span><span></span><span></span>
                      <div className="dt">
                        <div className="dtc">
                          <p>WhatsApp
                            <label>Get Immediate Info</label>
                          </p>
                        </div>
                        <div className="dtc">
                          <i className="fab fa-whatsapp"></i>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-11">
                  <div className="img-tab">
                    <Slider {...slider1} className='text-center' dir='ltr'>
                      {cases.map((item, i) => (
                        <img key={i} src={item.img} alt={item.alt} style={{ minHeight: '250px', maxHeight: '300px', cursor: 'pointer' }} className='rounded-4' />
                      ))}
                    </Slider>
                    {/* <img src={teeth} className='w-100 rounded-4' alt="patient" /> */}
                  </div>
                </div>
              </div>

            </div>
            <div className="tab-pane fade" id="pills-place" role="tabpanel" aria-labelledby="pills-place-tab" tabIndex="0">

              <div className="row gy-5 column__sm-reverse gx-md-4 gx-0 gy-4 d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-11">
                  <div className="caption-tab text-white">
                    <h2 className='fw-bold mb-2'>Innovation, Care, Experience</h2>
                    <p className='mb-2'>Our clinic is located in one of the most populous and well-known locations in Istanbul in Şişli - Fulya. Highly-educated Turkish qualified doctors and friendly team</p>
                    <p className='mb-2'>Dentists and staff speak more than 3 different languages Our priority is giving high-quality and efficient dental care.</p>
                    <button className="animated-button1 whats fix-whats2 w-btn w-btn-open" target='_blank' rel="noreferrer">
                      <span></span><span></span><span></span><span></span>
                      <div className="dt">
                        <div className="dtc">
                          <p>WhatsApp
                            <label>Get Immediate Info</label>
                          </p>
                        </div>
                        <div className="dtc">
                          <i className="fab fa-whatsapp"></i>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                {/* <div className="col-md-6 col-11">
                  <div  className='app__protocol-right'>
                    <div className='video-wrapper' style={{ position: 'relative', boxShadow: '0 25px 80px rgb(0 0 0 / 20%)' }}>

                      <img src={video} alt=""  className='w-100' />

                      <div className="play" onClick={() => handePlay(1)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <BsPlayFill size={29} color={'#fff'} />
                      </div>

                      <div
                        className="modal modal-fullscreen hide   fade"
                        id="exampleModal"
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
                              <iframe src={`https://www.youtube.com/embed/SwXT0Z_Ivck?autoplay=${play}&showinfo=0&rel=0`} title='video-1' allow="autoplay" width="90%" height="80%"></iframe>
                            </div>
                          </div>
                        </div> 
                      </div>

                    </div> 
                  </div>
                </div> */}
                <div className="col-md-6 col-11">
                  <div className="img-tab">
                    <Slider {...slider1} className='text-center' dir='ltr'>
                      {cases.map((item, i) => (
                        <img key={i} src={item.img} alt={item.alt} style={{ minHeight: '250px', maxHeight: '300px', cursor: 'pointer' }} className='rounded-4' />
                      ))}
                    </Slider>
                    {/* <img src={teeth} className='w-100 rounded-4' alt="patient" /> */}
                  </div>
                </div>
              </div>

            </div>
            <div className="tab-pane fade" id="pills-patients" role="tabpanel" aria-labelledby="pills-patients-tab" tabIndex="0">

              <div className="row gy-5 column__sm-reverse gx-md-4 gx-0 gy-4 d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-11">
                  <div className="caption-tab text-white">
                    <h2 className='fw-bold mb-2'>Our Happy Patients</h2>
                    <p className='mb-2'>One of our happy patients is explaining her good experience at DentSpa® , enjoy watching and be the next one :)</p>
                    <button className="animated-button1 whats fix-whats2 w-btn w-btn-open" target='_blank' rel="noreferrer">
                      <span></span><span></span><span></span><span></span>
                      <div className="dt">
                        <div className="dtc">
                          <p>WhatsApp
                            <label>Get Immediate Info</label>
                          </p>
                        </div>
                        <div className="dtc">
                          <i className="fab fa-whatsapp"></i>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                {/* <div className="col-md-6 col-11">
                  <div  className='app__protocol-right'>
                    <div className='video-wrapper' style={{ position: 'relative', boxShadow: '0 25px 80px rgb(0 0 0 / 20%)' }}>

                      <img src={patient} alt=""  className='w-100' />

                      <div className="play" onClick={() => handePlay(1)} data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        <BsPlayFill size={29} color={'#fff'} />
                      </div>

                      <div
                        className="modal modal-fullscreen hide   fade"
                        id="exampleModal1"
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
                              <iframe src={`https://www.youtube.com/embed/puDOY8Clo2c?autoplay=${play}&showinfo=0&rel=0`} title='video-2' allow="autoplay" width="90%" height="80%"></iframe>
                            </div>
                          </div>
                        </div> 
                      </div>

                    </div> 
                  </div>
                </div> */}
                <div className="col-md-6 col-11">
                  <div className="img-tab">
                    <Slider {...slider1} className='text-center' dir='ltr'>
                      {cases.map((item, i) => (
                        <img key={i} src={item.img} alt={item.alt} style={{ minHeight: '250px', maxHeight: '300px', cursor: 'pointer' }} className='rounded-4' />
                      ))}
                    </Slider>
                    {/* <img src={teeth} className='w-100 rounded-4' alt="patient" /> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section id='rashed2' className='py-5'>
        <div className="container">
          <div className="main-title-section text-center mb-3">
            <h2 className='rashed-secondColor mb-4 h1'>{val === 'ar' ? 'صانعـي ابتسامتـك' : val === 'us' ? 'Your Smile Creators' : val === 'fr' ? 'Vos créateurs de sourire' : val === 'ru' ? 'Создатели вашей улыбки' : val === 'ur' ? 'Gülüş Yaratıcılarınız' : 'Your Smile Creators'}</h2>
            <p className='mb-0 text-muted'>{val === 'ar' ? 'تعرف على أطبائنا الخبراء' : val === 'us' ? 'Meet Our Expert Doctors' : val === 'fr' ? 'Rencontrez nos médecins experts' : val === 'ru' ? 'Познакомьтесь с нашими врачами-экспертами' : val === 'ur' ? 'Uzman Doktorlarımızla Tanışın' : 'Meet Our Expert Doctors'}</p>
          </div>
          {Object.keys(staff).length > 2 ?
            <div className="members">
              <Slider {...slider2}>
                {staff.map((item, i) => (
                  <Member key={i} img={item.Image} title={item.Name} text={item.Desc} val={val} cond={true} />
                ))}
              </Slider>
            </div>
            :
            Object.keys(staff).length > 0 ?
              <div className="row gy-4 gx-md-4 d-flex justify-content-center justify-content-md-start align-items-center">
                {staff.map((item, i) => (
                  <Member key={i} img={item.Image} title={item.Name} text={item.Desc} val={val} cond={false} />
                ))}
              </div>
              :
              null
          }

          {whatsNumber !== null && whatsNumber !== undefined ?
            <div className="send text-center mt-5">
              {/* <button className="animated-button1 whats fix-whats2 w-btn w-btn-open" target='_blank' rel="noreferrer"> */}
              <a href={`https://wa.me/${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} className="animated-button1 whats fix-whats3 w-btn w-btn-open rounded-2" target='_blank' rel="noreferrer">
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
        </div>
      </section>
    </>
  )
}
