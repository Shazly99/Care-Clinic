import React from 'react';
import Slider from "react-slick";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import img111 from './img/img/slider.png';
import img1 from './img/img/img1.png';
// import teeth1 from './img/img/gif/1.png';
// import teeth2 from './img/img/gif/2.png';
// import teeth3 from './img/img/gif/3.png';
// import teeth4 from './img/img/gif/4.png';
import Member from './Member';

export default function Home({ sec3, slider, sec1, val, sec2, staff, whatsNumber }) {

  const {FileURL} = slider?.find(el => el.sect === "5");

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
      <header className='py-5' style={{ backgroundImage: `url(https://cureclinckapi.amlakturks.com/storage/app/sliders/${FileURL}` }} dir={val === '1' || val === '5' ? 'rtl' : 'ltr'}>
        <div className="container h-100">
          <div className="row gy-4 column__sm-reverse gx-md-5 gx-0 d-flex justify-content-center align-items-center mt-5 pt-5">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-8">
              <form className='form bg-white text-center py-4 px-3 rounded-3' dir='ltr'>
                <h4 className='fw-bold mb-3 rashed-secondColor'>Diagnosis And Cost In Minutes</h4>
                <input type="text" placeholder='Full Name' className='mx-auto form-control rashed-bgInput mb-3' required name="name" id="name" />
                <PhoneInput
                  country={val === '1' ? 'eg' : val === '5' ? 'tr' : val === '2' ? 'us' : val === '3' ? 'fr' : val === '4' ? 'ru' : 'ae'}

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
                <p className='mb-0'> {sec1?.SmallOne}</p>
                <h2>{sec1?.BigOne} <strong className='rashed-secondColor'>{sec1?.ColorOne}</strong> </h2>
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
                    <img loading='lazy' src={item.FilePath !== null && item.FilePath !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section2/${item?.FilePath}` : img1} className='w-75' style={{ height: '180px' }} alt="doctor" />
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
                      <img loading='lazy' src={el.FilePath !== null && el.FilePath !== undefined ? `https://cureclinckapi.amlakturks.com/storage/app/section2/${el?.FilePath}` : img1} className='w-75' style={{ height: '180px' }} alt="doctor" />
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
              <button className="nav-link active" id="pills-beforeafter-tab" data-bs-toggle="pill" data-bs-target="#pills-beforeafter" type="button" role="tab" aria-controls="pills-beforeafter" aria-selected="true">
                {val === '1' ? 'قبل بعد' : val === '2' ? 'Before & After' : val === '3' ? 'Avant après' : val === '4' ? 'До после' : val === '5' ? 'Önce sonra' : 'قبل و بعد'}

              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-place-tab" data-bs-toggle="pill" data-bs-target="#pills-place" type="button" role="tab" aria-controls="pills-place" aria-selected="false">
                {val === '1' ? '  مكانك الفاخر' : val === '2' ? ' Your Luxury Place' : val === '3' ? 'Votre lieu de luxe' : val === '4' ? 'Ваше роскошное место  ' : val === '5' ? 'Ваше роскошное место  ' : '  مكانك الفاخرو  '}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-patients-tab" data-bs-toggle="pill" data-bs-target="#pills-patients" type="button" role="tab" aria-controls="pills-patients" aria-selected="false">
              {val === '1' ? 'مرضانا السعداء' : val === '2' ? ' Our Happy Patients' : val === '3' ? 'Nos patients heureux' : val === '4' ? ' Наши счастливые пациенты  ' : val === '5' ? 'Mutlu Hastalarımız' : 'مرضانا السعداء'}
                
                </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-beforeafter" role="tabpanel" aria-labelledby="pills-beforeafter-tab" tabIndex="0">

              <div className="row gy-5 column__sm-reverse gx-md-4 gx-0 gy-4 d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-11">
                  <div className="caption-tab text-white">
                    <h2 className='fw-bold mb-2 special-reverce-heading-lg'> {sec3?.PTitle}</h2>
                    <p className='mb-2'>  {sec3?.Pbody}</p>
                    <a href={`https://wa.me/${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} className="animated-button1 whats fix-whats2 w-btn w-btn-open" target='_blank' rel="noreferrer">
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
                </div>
                <div className="col-md-6 col-11">
                  <h2 className='special-reverce-heading-sm h1 mb-4 text-white' dir={val === '1' || val === '5' ? 'rtl' : 'ltr'}>{sec3?.PTitle}</h2>
                  <div className="img-tab">
                    <Slider {...slider1} className='text-center' dir='ltr'>
                      {slider.filter(el => el.sect === "1").map((item, i) => (
                        <img key={i} loading='lazy' src={`https://cureclinckapi.amlakturks.com/storage/app/sliders/` + item.FileURL} alt={item.FileURL} style={{ cursor: 'pointer' }} className='slider-single-high rounded-4' />
                      ))}
                    </Slider>
                    {/* <img loading='lazy' src={teeth} className='w-100 rounded-4' alt="patient" /> */}
                  </div>
                </div>
              </div>

            </div>
            <div className="tab-pane fade" id="pills-place" role="tabpanel" aria-labelledby="pills-place-tab" tabIndex="0">

              <div className="row gy-5 column__sm-reverse gx-md-4 gx-0 gy-4 d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-11">
                  <div className="caption-tab text-white">
                    <h2 className='fw-bold mb-2 special-reverce-heading-lg'>{sec3?.LTitle} </h2>
                    <p className='mb-2'>{sec3?.LBody}</p>
                    <a href={`https://wa.me/${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} className="animated-button1 whats fix-whats2 w-btn w-btn-open" target='_blank' rel="noreferrer">
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
                </div>
                {/* <div className="col-md-6 col-11">
                  <div  className='app__protocol-right'>
                    <div className='video-wrapper' style={{ position: 'relative', boxShadow: '0 25px 80px rgb(0 0 0 / 20%)' }}>

                      <img loading='lazy' src={video} alt=""  className='w-100' />

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
                  <h2 className='special-reverce-heading-sm h1 mb-4 text-white' dir={val === '1' || val === '5' ? 'rtl' : 'ltr'}>{sec3?.LTitle}</h2>
                  <div className="img-tab">
                    <Slider {...slider1} className='text-center' dir='ltr'>
                      {slider.filter(el => el.sect === "2").map((item, i) => (
                        <img key={i} loading='lazy' src={`https://cureclinckapi.amlakturks.com/storage/app/sliders/` + item.FileURL} alt={item.FileURL} style={{ cursor: 'pointer' }} className='slider-single-high rounded-4' />
                      ))}
                    </Slider>
                    {/* <img loading='lazy' src={teeth} className='w-100 rounded-4' alt="patient" /> */}
                  </div>
                </div>
              </div>

            </div>
            <div className="tab-pane fade" id="pills-patients" role="tabpanel" aria-labelledby="pills-patients-tab" tabIndex="0">

              <div className="row gy-5 column__sm-reverse gx-md-4 gx-0 gy-4 d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-11">
                  <div className="caption-tab text-white">
                    <h2 className='fw-bold mb-2 special-reverce-heading-lg'>{sec3?.BATitle}</h2>
                    <p className='mb-2'> {sec3?.BABody}</p>
                    <a href={`https://wa.me/${whatsNumber}?text=Hello%2C+Can+I+book+an+appointment%21`} className="animated-button1 whats fix-whats2 w-btn w-btn-open" target='_blank' rel="noreferrer">
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
                </div>
                {/* <div className="col-md-6 col-11">
                  <div  className='app__protocol-right'>
                    <div className='video-wrapper' style={{ position: 'relative', boxShadow: '0 25px 80px rgb(0 0 0 / 20%)' }}>

                      <img loading='lazy' src={patient} alt=""  className='w-100' />

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
                  <h2 className='special-reverce-heading-sm h1 mb-4 text-white' dir={val === '1' || val === '5' ? 'rtl' : 'ltr'}>{sec3?.BATitle}</h2>
                  <div className="img-tab">
                    <Slider {...slider1} className='text-center' dir='ltr'>
                      {slider.filter(el => el.sect === "3").map((item, i) => (
                        <img key={i} loading='lazy' src={`https://cureclinckapi.amlakturks.com/storage/app/sliders/` + item.FileURL} alt={item.FileURL} style={{ cursor: 'pointer' }} className='slider-single-high rounded-4' />
                      ))}
                    </Slider>
                    {/* <img loading='lazy' src={teeth} className='w-100 rounded-4' alt="patient" /> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section id='rashed2' className='py-5' dir={val === '1' || val ===  '5' ? 'rtl' : 'ltr'}>
        <div className="container">
          <div className="main-title-section text-center mb-3">
            <h2 className='rashed-secondColor mb-4 h1'>{val === '1' ? 'صانعـي ابتسامتـك' : val === '2' ? 'Your Smile Creators' : val === '3' ? 'Vos créateurs de sourire' : val === '4' ? 'Создатели вашей улыбки' : val === '5' ? 'Gülüş Yaratıcılarınız' : 'Your Smile Creators'}</h2>
            <p className='mb-0 text-muted'>{val === '1' ? 'تعرف على أطبائنا الخبراء' : val === '2' ? 'Meet Our Expert Doctors' : val === '3' ? 'Rencontrez nos médecins experts' : val === '4' ? 'Познакомьтесь с нашими врачами-экспертами' : val === '5' ? 'Uzman Doktorlarımızla Tanışın' : 'Meet Our Expert Doctors'}</p>
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
              <div className="row gy-4 gx-md-4 d-flex justify-content-center align-items-center">
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
