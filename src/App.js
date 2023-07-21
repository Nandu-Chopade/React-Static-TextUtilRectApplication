// import Alert from './component/Alert'
import './App.css';
import React, {useState} from 'react'; 
import Navbar from './Navbar';
import { TextForm } from './TextForm';
import AboutUs from './AboutUs';


function App() {
  const [mode , setMode] = useState("light")  // default background color of navbar
  const toggleMode = () => {
      if(mode == 'light'){    // light is a boostrap class so we are passing here it as string literals
        setMode("dark");    // dark also class of boostrap 
        document.body.style.backgroundColor = '#042743';
        // showAlert("Dark mode has been enabled" , "success");
      }
      else
      {
        setMode("light");
        document.body.style.backgroundColor = 'white';
        // showAlert("Light  mode has been enabled" , "success");
      }
  } 

  return (
    <>
     <Navbar title="NanduChopade"  mode={mode}  toggleMode={toggleMode} />
     <TextForm  mode={mode} />
     {/* <AboutUs/> */}
    </>
  );
}

export default App;
