import "./MainApp.css";
import React, {Component} from "react";
import {hot, setConfig} from "react-hot-loader";
import LoadableA from "./LoadableA";
import LoadableB from "./LoadableB";

setConfig({logLevel: "debug"});

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPanel: "A"
    };
    this._handleChange = this._handleChange.bind(this);
  }

  render() {
    return (
      <div className="my-main-app">
        <h3>{this.props.greeting}!</h3>
        <div>
          <input
            type="radio"
            id="sel_a"
            name="panel"
            value="A"
            checked={this.state.currentPanel === "A"}
            onChange={this._handleChange}
          />
          <label htmlFor="sel_a">Panel A</label>
        </div>
        <div>
          <input
            type="radio"
            id="sel_b"
            name="panel"
            value="B"
            checked={this.state.currentPanel === "B"}
            onChange={this._handleChange}
          />
          <label htmlFor="sel_b">Panel B</label>
        </div>
        <div>
          {this.state.currentPanel === "A" ? <LoadableA/> : <LoadableB/>}
        </div>
      </div>
    );
  }

  _handleChange(evt) {
    this.setState({
      currentPanel: evt.target.value
    });
  }
}

export default hot(module)(MainApp);
