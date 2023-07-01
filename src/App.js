import './App.css';
import EventList from './pages/EventList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {useState,useEffect} from 'react'
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import EvenDetails from './pages/EvenDetails';
import About from './pages/About';
import Homepage from './pages/homepage';
import Footer from './components/Footer';
import Contactus from './pages/Contactus';
import EditProfile from './pages/editProfile';
import CreateEvent from './pages/createEvent';


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
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/createevent" element={<CreateEvent />} />
      </Routes>)}
      <Footer />
      <ToastContainer/>
  </>
  )
}

export default App;

