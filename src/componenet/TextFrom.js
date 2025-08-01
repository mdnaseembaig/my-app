import React, { useState } from 'react';

export default function TextFrom(props) {

  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "Success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "Success");
  };

  const handleClearText = () => {
    setText('');
    props.showAlert("Text Cleared!", "Success");
  };

  const handleCopy = () => {
    const textBox = document.getElementById("mybox");
    textBox.select();
    textBox.setSelectionRange(0, 9999); // ✅ correct spelling
    navigator.clipboard.writeText(textBox.value);
    props.showAlert("Copied to Clipboard!", "Success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText} disabled={text.length === 0}>Clear</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} disabled={text.length === 0}>Copy</button>

        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
          <p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
      </div>
    </>
  );
}
