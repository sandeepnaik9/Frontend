import './App.css';
import EventList from './pages/EventList';

import {useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import EvenDetails from './pages/EvenDetails';
import Homepage from './pages/HomePage';
import About from './pages/About';
import Footer from './components/Footer';
import Contactus from './pages/Contactus';
function App() {
  const [deviceType, setDeviceType] = useState("")

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }
  }, []);
  return (<>    
      <Navbar />
      {deviceType==="Mobile"?(<h3>Website is not yet responsive kindly use laptop or pc</h3>):(<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:id" element={<EvenDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />

      </Routes>)}
      <Footer />
  </>
  )
}

export default App;

