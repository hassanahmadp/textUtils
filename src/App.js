import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    // <Router>
    <>
      <Navbar title="TextUtils" />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about">
            <About />
          </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analize below" />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
    </>
    // </Router>
  );
}

export default App;
