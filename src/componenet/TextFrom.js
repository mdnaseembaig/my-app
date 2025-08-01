import React, {useState} from 'react'

export default function TextFrom(props) {

    const handleUpClick = ()=>{
        //console.log("Uppercase Was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "Succes");
    }

     const handleLoClick = ()=>{
       // console.log("Lowercase Was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase!", "Succes");
     }

     

     const handleCleartext = ()=>{
       // console.log("Clearcase Was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Remove to ClearText!", "Succes");
        
        
     }


    const handleOnChange = (event)=>{
        //console.log("on Change");
        setText(event.target.value)
        
    }

   const handleCopy = () => {
    console.log("I am Copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRang(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "Success");

   }

   
    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText = "new text"; // Correct way to change the state
  return (
    <>
    <div className="container" style={{Color: props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} 
  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
     Color: props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="8"></textarea>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase </button>
  <button className="btn btn-primary mx-3" onClick={handleCleartext}>Cleartext </button>
  <button className="btn btn-primary mx-3" onClick={handleCopy}>copy Text</button>
  
</div>
<div className="container my-3" style={{Color: props.mode === 'dark' ? 'white' : 'black'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} charaters</p>
<p>{0.008 * text.split(" ").length}Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
</div>
</div>
</>
  )
}
