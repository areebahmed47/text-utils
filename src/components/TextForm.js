import React , {useState} from "react";


export default function TextForm(props) {
    const [text , setText] = useState("");

  const handleUpClick = ()=>{
    let  newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Case" , "success")
  }

  
  const handleLowClick = ()=>{
    let  newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted To Lower Case" , "success")
  }
  const handleClearClick = ()=>{
    let  newText = "";
    setText(newText);
    props.showAlert("Clear Text" , "success")
  }

  const handleCopyText = ()=>{
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copy to clipboard" , "success")
  }


  const handleRemoveSpaces = () => {
    let newText = text.split(/\s+/).join(' ').trim();
    setText(newText);
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleReverseText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text Reversed", "success");
  };



  const handleReplaceWord = () => {
    let wordToReplace = prompt("Enter the word to replace:");
    let replacementWord = prompt("Enter the replacement word:");
    if (wordToReplace !== null && replacementWord !== null) {
      let newText = text.split(wordToReplace).join(replacementWord);
      setText(newText);
      props.showAlert("Word Replaced", "success");
    }
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  return (
    <>
      <div className="container" style={{color: props.mode === "dark"? "white":"black"}}>
      <h3 className="mb-3">{props.heading}</h3>
        <div className="mb-3">

          <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"? "#282a33":"white", color: props.mode === "dark"? "white":"black" }} id="myBox" rows="8"></textarea>
        </div>
       <div className="container">
        <button  disabled={text.length===0} className="btn  btn-primary mx-1 my-1"onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-1 my-1" onClick={handleLowClick} >Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-1 my-1" onClick={handleCopyText} >Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseText}>Reverse Text</button>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleReplaceWord}>Replace Word</button>
       </div>
      </div>
      <div className="container my-3"style={{color: props.mode === "dark"? "white":"black"}}  >
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview here"}</p>

      </div>
    </>
  );
}
