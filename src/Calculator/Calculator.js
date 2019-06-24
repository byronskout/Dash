import React, { Component } from "react";
import Display from './Display';
import NumberPad from './Numberpad';
import './Calculator.css';
import Container from '../Container';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
      input: "",
      fade: ""
    };

    this.handleSolarMouseOn = this.handleSolarMouseOn.bind(this);
    this.handleSolarMouseOff = this.handleSolarMouseOff.bind(this);
    this.handleNumberInput = this.handleNumberInput.bind(this);
    this.handleOperatorInput = this.handleOperatorInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
    this.setInput = this.setInput.bind(this);
  }

  handleSolarMouseOn() {
    this.setState({
      fade: "faded"
    });
  }

  handleSolarMouseOff() {
    this.setState({
      fade: ""
    });
  }

  setDisplay(val) {
    const decimalRegex = /\./;
    const hasDecimal = decimalRegex.test(this.state.display);
    const operatorRegex = /[+ \- * / ]$/;
    const endsInOperator = operatorRegex.test(this.state.input);
    if (endsInOperator || this.state.display === "0") {
      return val;
    }
    if (val !== "." || !hasDecimal) {
      return this.state.display + val;
    }
    return this.state.display;
  }

  setInput(val) {
    const { input } = this.state;
    const decimalRegex = /\./;
    const hasDecimal = decimalRegex.test(this.state.display);
    const operatorRegex = /[+ \- * / ]$/;
    const endsInOperator = operatorRegex.test(input);

    if (input === "") {
      return val;
    } else if (val !== "." || !hasDecimal || endsInOperator) {
      return input + val;
    } else {
      return input;
    }
  }

  handleNumberInput(val) {
    this.setState({
      display: this.setDisplay(val),
      input: this.setInput(val)
    });
  }

  handleOperatorInput(val) {
    const { input } = this.state;
    const operatorRegex = /[+ \- * /]$/;
    const numRegex = /[\d]/;
    const previousCharIsNum = numRegex.test(input);
    const endsInOperator = operatorRegex.test(input);
    function evil(fn) {
      return new Function(`return ${fn}`)();
    }

    if (val === "=") {
      if (!endsInOperator) {
        this.setState({
          input: (Math.round(evil(input) * 1000000) / 1000000).toString(),
          display: (Math.round(evil(input) * 1000000) / 1000000).toString()
        });
      } else if (previousCharIsNum) {
        this.setState({
          input: (
            Math.round(evil(input.slice(0, -1)) * 1000000) / 1000000
          ).toString(),
          display: (
            Math.round(evil(input.slice(0, -1)) * 1000000) / 1000000
          ).toString()
        });
      } else {
        this.setState({ input: "", display: "0" });
      }
    } else if (endsInOperator) {
      this.setState({ input: input.slice(0, -1).concat(val) });
    } else {
      this.setState({ input: input + val });
    }
  }

  handleClear() {
    this.setState({
      display: "0",
      input: ""
    });
  }

  render() {
    return (
      <div className="App">
      <Container>
        <div className="calculator">
          <Display state={this.state} onClick={this.handleClear} />
          <NumberPad
            state={this.state}
            handleNumberInput={e => this.handleNumberInput(e)}
            handleOperatorInput={e => this.handleOperatorInput(e)}
          />
        </div>
        </Container>
      </div>
    );
  }
}

export default Calculator;
