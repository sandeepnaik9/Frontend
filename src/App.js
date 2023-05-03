import './App.css';
import Home from "./pages/homepage";
import {useState,useEffect} from 'react'
import { Route,Routes } from 'react-router-dom';
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
      {deviceType==="Mobile"?(<h3>Website is not yet responsive kindly use laptop or pc</h3>):(<Routes>
        <Route path="/" element={<Home />} />
      </Routes>)}
  </>
  )
}

export default App;

