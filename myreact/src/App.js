import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/about";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
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

  const [theme, setTheme] = useState("dark");
  const [btnMode, setBtnMode] = useState("dark");
  const clickDark = () => {
    setTheme("dark");
    setMode("dark");
    setBtnMode("light");
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#272727";
    showAlert("Dark mode is enabled", "primary");
  };
  const clickLight = () => {
    setTheme("light");
    setMode("light");
    setBtnMode("dark");
    document.body.style.color = "black";
    document.body.style.backgroundColor = "White";
    showAlert("Light mode is enabled", "success");
  };
  const clickBlue = () => {
    setTheme("dark");
    setMode("blue");
    setBtnMode("light");
    document.body.style.color = "white";
    document.body.style.backgroundColor = "#240952";
    showAlert("Blue Theme enabled", "success");
  };
  const clickGreen = () => {
    setTheme("light");
    setMode("green");
    setBtnMode("dark");
    document.body.style.color = "White";
    document.body.style.backgroundColor = "#0D2818";
    showAlert("Green Theme enabled", "success");
  };

  return (
    // <Router>
      <>
        <Navbar
          title="Texticians"
          about="About Us"
          theme={theme}
          clickBlue={clickBlue}
          clickGreen={clickGreen}
          clickLight={clickLight}
          clickDark={clickDark}
          mode={mode}
          btnMode={btnMode}
        ></Navbar>
        <Alert alert={alert}></Alert>

        <div className="container">
          {/* <Routes>
            <Route exact path="/About" element={<About mode={mode}></About>} />

            <Route
              exact path="/"
              element={ */}
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  btnMode={btnMode}
                  clickDark={clickDark}
                  showAlert={showAlert}
                ></TextForm>
              {/* }
            />
          </Routes> */}
        </div>
      </>
    /* </Router> */
  );
}

export default App;
