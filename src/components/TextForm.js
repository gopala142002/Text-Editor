import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleLoClick=()=>{
      let newText=text.toLocaleLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick=()=>{
      setText("");
      props.showAlert("Text Cleared","success");
    }
    const handleCopyClick=()=>{
        let newText=document.getElementById("myBox");
        newText.select();
        newText.setSelectionRange(0,9999);
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to ClipBoard","success");
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
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'#042743'}} value={text} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{getnumWords(text)} words and {text.length} characters </p>  
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box to preview it here."}</p>
      </div>
    </> 
  )
}