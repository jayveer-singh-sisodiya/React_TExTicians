import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "new text"; wrong way to change the text
  // setText = "new text"; correct way to change the text

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Has Beeen Changed to UpperCase", "primary");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Has Beeen Changed to lowerCase", "primary");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Has Beeen Cleared", "primary");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Has Beeen Copied to ClipBoard", "primary");
  };
  const handleSpeakClick = () => {
    let msgText = new SpeechSynthesisUtterance();
    msgText.text = text;
    window.speechSynthesis.speak(msgText);
  };

  const handeleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="conatiner">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handeleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark"
                  ? "#252525"
                  : props.mode === "light"
                  ? "white"
                  : props.mode === "blue"
                  ? "#3e6680"
                  : props.mode === "green"
                  ? "#2d4d3a"
                  :"white",
              color:
                props.mode === "dark"
                  ? "white"
                  : props.mode === "light"
                  ? "black"
                  : props.mode === "blue"
                  ? "white"
                  : props.mode === "green"
                  ? "white"
                  : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear All Text
        </button>
        <button
          type="submit"
          className="btn btn-warning mx-1 my-1"
          onClick={handleSpeakClick}
        >
          <i class="fa-solid fa-volume-low"></i> Speak
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          <i class="fa-solid fa-copy"></i>
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          Words: {text.split(" ").length} and Characters: {text.length}
          <p className="my-1">
            Speaking time: {0.041 * text.split(" ").length}/wpm
          </p>
          <p> Reading time: {0.008 * text.split(" ").length}/wpm</p>
          <h2>Preview</h2>
          <p>{text.lenght > 0 ? text : "your text will be previewed here"}</p>
        </p>
      </div>
    </>
  );
}
