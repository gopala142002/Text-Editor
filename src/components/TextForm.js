import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toLocaleUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleLoClick=()=>{
      let newText=text.toLocaleLowerCase();
      setText(newText);
    }
    const getnumWords=(text)=>{
      let arr=text.split(" ");
      let t=arr.length;
      if(arr[t-1]==="")
        return t-1;
      return t;
    }
    const[text,setText]=useState('');
  return (
    <>
      <div className="container">
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      </div>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{getnumWords(text)} words and {text.length} characters </p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
      </div>
      <h2>Preview</h2>
      <p>{text}</p>
    </> 
  )
}