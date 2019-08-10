import React, {Component} from "react";
import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.0.0";
import "./assets/demo/demo.css";
import MainPage from "./components/HomePage/MainPage";
import "./components/Footer/Footer.css";

class App extends Component {
  state = {
    users: []
  };

  render() {
    return (
      <MainPage/>
    );
  }
}

export default App;
