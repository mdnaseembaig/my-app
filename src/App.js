import { useState } from 'react';
import './App.css';
import Navbar from './componenet/Navbar'; // ✅ Make sure spelling of 'componenet' matches folder name
import TextFrom from './componenet/TextFrom';

function App() {
  const [mode, setMode] = useState('light'); // ✅ dark mode default

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode  ('dark');
      document.body.style.background = 'grey';
    }
    else{
      setMode ('light');
      document.body.style.background = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode}toggleMode={toggleMode} />
      <div className="container my-3">
        <TextFrom heading="Enter the text to Analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
