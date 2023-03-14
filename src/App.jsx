import React, { useEffect, useState } from 'react';
import './App.scss';
import Navbar from './Navbar';
import Massenger from './Massenger';
import Whats from './Whats';
import Home from './Home';
import Protocol from './components/Protocol/Protocol';
import ChangeSmile from './components/ChangeSmile/ChangeSmile';
import axios from 'axios';



function App() {

  const [val, setVal] = useState('ar');
  const [globalData, setGlobalData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(false);
    await axios.post(`https://cureclinckapi.amlakturks.com/public/api/GetHomepage`, {
      Lang : val === 'ar' && '1' || val === 'ur' && '5' || val === 'us' && '2' || val === 'fr' && '3' || val === 'ru' && '4'
    })
    .then((res) =>{
      setGlobalData(res.data.data);
      setLoading(true);
    })
    .catch((err) => {
      console.log(err);
    })
  }



  useEffect(() => {
    getData();
  }, [val])
  



  return (
    <>
    {loading ?
          <div style={{ position: 'relative' }}>
        
            <Whats whatsNumber={globalData?.contactus?.whatsapp} />
            <Massenger massengerURL={globalData?.contactus?.Messenger} />
    
            <Navbar 
              val={val} setVal={setVal} 
              whatsNumber={globalData?.contactus?.whatsapp} 
              massengerURL={globalData?.contactus?.Messenger}
              phone={globalData?.contactus?.Phone}
              email={globalData?.contactus?.Email}
            />
    
            <Home val={val} sec2={globalData?.section2} staff={globalData?.staff} whatsNumber={globalData?.contactus?.whatsapp} />
    
            <div id="shazly">
              <Protocol val={val} />
              <ChangeSmile val={val} sec5={globalData?.section5} whatsNumber={globalData?.contactus?.whatsapp} sec6={globalData?.section6} />
            </div>
          </div>
          :
          <div id="ready">
              <i className="fa fa-spinner fa-4x fa-spin"></i>
          </div>
    }

    </>
  );
}

export default App;
