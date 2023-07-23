// import Alert from './component/Alert'
import './App.css';
import React, {useState} from 'react'; 
import Navbar from './component/Navbar';
import { TextForm } from './component/TextForm';
import AboutUs from './component/AboutUs';
import Alert from './component/Alert';


function App() {
  const [mode , setMode] = useState("light")  // default background color of navbar
 
  // alert message as alert function 
  const  [message , setMessage] = useState(null);
  const showMessage = (message , type)  => {
    setMessage({
      message:message,
      type:type
    }) 
     
     setTimeout( ()=>{
        setMessage(null)
     }, 3000)

     
  }

  const toggleMode = () => {
      if(mode == 'light'){    // light is a boostrap class so we are passing here it as string literals
        setMode("dark");    // dark also class of boostrap 
        document.body.style.backgroundColor = '#042743';
        showMessage("Dark mode has been enabled" , "success");
      }
      else
      {
        setMode("light");
        document.body.style.backgroundColor = 'white';
        showMessage("Light  mode has been enabled" , "success");
      }


  } 

  return (
    <>
     <Navbar title="NanduChopade"  mode={mode}  toggleMode={toggleMode} />
     <Alert  message={message} />
     <TextForm showMessage={showMessage} mode={mode}  />
     <AboutUs/>
    </>
  );
}

export default App;
