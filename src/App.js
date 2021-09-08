import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Alert from "./components/Alert";
import Themes from "./components/Themes";
// import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether the dark mode is enabled or not
  // const [text, setText] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleDarkMode = () => {
    setMode("dark");
    document.body.style.backgroundColor = "#333333";
  };

  const toggleYellowMode = () => {
    setMode("warning");
    document.body.style.backgroundColor = "#ffe31f";
  };

  const toggleLightMode = () => {
    setMode("light");
    document.body.style.backgroundColor = "white";
  };
  //  <Navbar title="TextUtils" />;
  //  <Navbar />
  return (
    // <Router>
    <div className="app">
      <Navbar
        title="TextUtils"
        abtText="About Us"
        mode={mode}
        // toggleMode={toggleMode}
        // text={text}
      />
      <Alert alert={alert} />
      <div className="themes">
        <Themes
          color="light"
          className="themeBtns lightTheme"
          mode={mode}
          toggleMode={toggleLightMode}
        />
        <Themes
          className="themeBtns yellowTheme"
          color="warning"
          mode={mode}
          toggleMode={toggleYellowMode}
        />
        <Themes
          className="themeBtns darkTheme"
          color="dark"
          mode={mode}
          toggleMode={toggleDarkMode}
        />
      </div>
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

        {/* <Route exact path="/"> */}
        <Form
          showAlert={showAlert}
          heading="Enter the text to analyze:"
          mode={mode}
          // toggleMode={toggleMode}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
    </div>
    // </Router>
  );
}

export default App;
