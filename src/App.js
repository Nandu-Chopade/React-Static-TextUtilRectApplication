// import Alert from './component/Alert'
import './App.css';
import React, {useState} from 'react'; 
import Navbar from './Navbar';
import { TextForm } from './TextForm';
import AboutUs from './AboutUs';


function App() {
  const [mode , setMode] = useState("light")  // default background color of navbar
  const toggleMode = () => {
      if(mode == 'light'){
        setMode("dark");
        // showAlert("Dark mode has been enabled" , "success");
      }
      else
      {
        setMode("light");
        // showAlert("Light  mode has been enabled" , "success");
      }
  } 

  return (
    <>
     <Navbar title="NanduChopade"  mode={mode}  toggleMode={toggleMode} />
     <TextForm/>
     {/* <AboutUs/> */}
    </>
  );
}

export default App;
