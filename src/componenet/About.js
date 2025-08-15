//import React, {useState} from 'react'

export default function About(props) {
  const myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    border: props.mode === 'dark' ? '1px solid white' : '1px solid #042743'
  }

  const accordionItemStyle = {
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black'
  }

  return (
    <div className="container" style={{...myStyle, padding: '20px'}}>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={accordionItemStyle}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button" 
              type="button" 
              style={accordionItemStyle}
              data-bs-toggle="collapse" 
              data-bs-target="#collapseOne" 
              aria-expanded="true" 
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={accordionItemStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count,
              character count or other text analysis.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={accordionItemStyle}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              style={accordionItemStyle} 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseTwo" 
              aria-expanded="false" 
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={accordionItemStyle}>
              TextUtils is a free character tool that provides instant character 
              count & word count statistics for a given text. TextUtils reports the number of words and characters.
              Thus it is suitable for writing text with word/character limits.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={accordionItemStyle}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              style={accordionItemStyle} 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapseThree" 
              aria-expanded="false" 
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={accordionItemStyle}>
              This word counter software works in any web browsers such as Chrome, 
              Firefox, Internet Explorer, Safari, Opera. It suits to count 
              characters in Facebook, blogs, Excel documents, PDF documents, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}