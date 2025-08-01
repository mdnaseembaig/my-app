import { useState } from 'react';
import './App.css';
import Navbar from './componenet/Navbar'; // ✅ Make sure spelling of 'componenet' matches folder name
import TextFrom from './componenet/TextFrom';
import Alert from './componenet/Alert';

function App() {
  const [mode, setMode] = useState('light'); // ✅ dark mode default
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode  ('dark');
      document.body.style.background = 'grey';
      showAlert("Dark mode has been Enable", "successed");
    }
    else{
      setMode ('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been Enable", "successed");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode}toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextFrom showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
