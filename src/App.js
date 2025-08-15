import { useState } from 'react';
import './App.css';
import Navbar from './componenet/Navbar'; // ✅ Make sure spelling of 'componenet' matches folder name
import TextFrom from './componenet/TextFrom';
import About from './componenet/About';
//import React, { useState } from 'react';
import Alert from './componenet/Alert';

import {
  BrowserRouter as Router, 
  Switch,
  Route,
} from "react-router-dom";


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
    if(mode === 'light') {
      setMode  ('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been Enable", "successed");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode';
      }, 2000);
    }
    else{
      setMode ('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been Enable", "successed");
       document.title = 'TextUtils - Dark Mode';
        setInterval(() => {
        document.title = 'Install TextUtils Now';
      }, 2000);
    }
  }
  return (
    <>
    {/*<Navbar title="Texttitle" aboutText="About TextUtils" ></Navbar>*/}
    <Router>
      <Navbar title="TextUtils" mode={mode}toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <Switch>
         
         {/* /users --> Component 1
          /users/home --> --> Component 2 */}
          <Route exact path="/about"> 
            <About mode={mode} />
          </Route>
          
          <Route exact path="/">
            <TextFrom showAlert={showAlert} heading="Try TextUtile- Word counter Character counter, Remove extra Spaces" mode={mode} />
          </Route>
        </Switch>
        </div>
        </Router>
      {/*<About></About>*/}
     
    
     
     </>
  );
}

export default App;
