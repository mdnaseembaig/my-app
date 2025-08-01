
import './App.css';
import Navbar from './componenet/Navbar';
import About from './componenet/About';
import TextFrom from './componenet/TextFrom';

function App() {
  return (
    <>
    {}
    <Navbar title="TextUtils" />
    <div
    className="container my-3">
     <TextFrom heading="Enter the text to Analyze"/>
     <About></About>
    </div>
    </>
  );
}

export default App;