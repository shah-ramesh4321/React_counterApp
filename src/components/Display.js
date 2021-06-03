import React from "react";
import { Button } from "./Button";
import "./Display.css";

export class Display extends React.Component {
  constructor() {
    super();
    this.title = null;
    this.count = 0;
    this.state = {
      countVal: this.count,
    };
  }

  increment() {
    this.count++;
    this.setState({
      countVal: this.count,
    });
  }
  decrement() {
    if (this.count > 0) {
      this.count--;
      this.setState({
        countVal: this.count,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Count is : {this.state.countVal}</h2>
        <span
          onClick={() => {
            this.increment();
          }}
        >
          <Button title={"Plus"} />
        </span>

        <span
          onClick={() => {
            this.decrement();
          }}
        >
          <Button title={"Minus"} />
        </span>
      </div>
    );
  }
}
