import React, {useState} from 'react'

export default function TextFrom(props) {

    const handleUpClick = ()=>{
        //console.log("Uppercase Was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

     const handleLoClick = ()=>{
       // console.log("Lowercase Was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
     }

     

     const handleCleartext = ()=>{
       // console.log("Clearcase Was clicked" + text);
        let newText = ''();
        setText(newText)
     }


    const handleOnChange = (event)=>{
        //console.log("on Change");
        setText(event.target.value);
    }

    const handleCopy = () => {
      console.log("I am copy");
      var text = document.getElementById("mybox");
      text.select();
      text.setSelectionRang(0,9999);
      navigator.clipboard.writeText(text.value);

    }

    const handleExtraSpace = () => {
      let newText = text.split (/[]+/);
      setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter text here2');
    // text = "new text"; // Wrong way to change the state
    // setText = "new text"; // Correct way to change the state
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase </button>
  <button className="btn btn-primary mx-2" onClick={handleCleartext}> Cleartext </button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy Text </button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpace}> Remove Extra  Space </button>
</div>
<div className="container my-2">
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} charaters</p>
<p>{0.008 * text.split(" ").length}Minutes read</p>
<h2>Preview</h2>
<p>{text}</p>
</div>
</div>
</>
  )
}

