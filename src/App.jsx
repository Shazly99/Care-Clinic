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
        
            <Whats />
            <Massenger />
    
            <Navbar val={val} setVal={setVal} />
    
            <Home val={val} />
    
            <div id="shazly">
              <Protocol val={val} />
              <ChangeSmile val={val} />
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
