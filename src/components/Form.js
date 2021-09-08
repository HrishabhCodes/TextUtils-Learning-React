import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("Enter text here");

  let wordCounter = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i + 1) === " " || i + 1 === text.length - 1) {
      wordCounter++;
    }
  }
  // console.log(wordCounter);

  const handleUpClick = () => {
    // console.log("UpperCase was clicked!!" + text);
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  //   text = "New Text"; Wrong way to change the state
  //   setText("New Text"); Correct way to change the state
  return (
    <>
      <div className="container">
        <h3 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          {" "}
          {props.heading}
        </h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
      </div>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h3 className="my-3">Your Text Summary</h3>
        <hr />
        <p>
          {wordCounter} words, {text.length} characters
        </p>
        <p>{0.008 * wordCounter} minutes</p>
      </div>
    </>
  );
}
