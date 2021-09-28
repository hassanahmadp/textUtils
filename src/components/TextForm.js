import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    setText(prev => prev.toUpperCase());
    props.showAlert("Converted to Upper Case", "success");
    document.title = "TextUtils | UpperCase";
  };

  const handleLowClick = () => {
    setText(prev => prev.toLowerCase());
    props.showAlert("Converted to Lower Case", "warning");
    document.title = "TextUtils | LowerCase";
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
    document.title = "TextUtils | CopyText";
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "danger");
    document.title = "TextUtils | ClearText";
  };
  const handleCapitalClick = () => {
    let newText = text
      .split(" ")
      .map(word => `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`)
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalized Case", "success");
    document.title = "TextUtils | CapCase";
  };

  const handleOnChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success m-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-1" onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button className="btn btn-success m-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary m-1" onClick={handleCapitalClick}>
          Convert to Capitalized
        </button>
      </div>
      <div className="container">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").filter(w => w !== "").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
