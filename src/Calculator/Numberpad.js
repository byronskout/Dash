import React from 'react';

const NumberPad = props => {
  const { handleNumberInput, handleOperatorInput } = props;
  return (
    <div className="number-pad">
      <div
        className="calc-button number-button"
        id="seven"
        onClick={() => handleNumberInput("7")}
      >
        7
      </div>
      <div
        className="calc-button number-button"
        id="eight"
        onClick={() => handleNumberInput("8")}
      >
        8
      </div>
      <div
        className="calc-button number-button"
        id="nine"
        onClick={() => handleNumberInput("9")}
      >
        9
      </div>
      <div
        className="calc-button number-button"
        id="four"
        onClick={() => handleNumberInput("4")}
      >
        4
      </div>
      <div
        className="calc-button number-button"
        id="five"
        onClick={() => handleNumberInput("5")}
      >
        5
      </div>
      <div
        className="calc-button number-button"
        id="six"
        onClick={() => handleNumberInput("6")}
      >
        6
      </div>
      <div
        className="calc-button number-button"
        id="one"
        onClick={() => handleNumberInput("1")}
      >
        1
      </div>
      <div
        className="calc-button number-button"
        id="two"
        onClick={() => handleNumberInput("2")}
      >
        2
      </div>
      <div
        className="calc-button number-button"
        id="three"
        onClick={() => handleNumberInput("3")}
      >
        3
      </div>
      <div
        className="calc-button number-button"
        id="zero"
        onClick={() => handleNumberInput("0")}
      >
        0
      </div>
      <div
        className="calc-button number-button"
        id="decimal"
        onClick={() => handleNumberInput(".")}
      >
        .
      </div>
      <div
        className="calc-button operator-button"
        id="add"
        onClick={() => handleOperatorInput("+")}
      >
        +
      </div>
      <div
        className="calc-button operator-button"
        id="subtract"
        onClick={() => handleOperatorInput("-")}
      >
        -
      </div>
      <div
        className="calc-button operator-button"
        id="multiply"
        onClick={() => handleOperatorInput("*")}
      >
        *
      </div>
      <div
        className="calc-button operator-button"
        id="divide"
        onClick={() => handleOperatorInput("/")}
      >
        /
      </div>
      <div
        className="calc-button operator-button"
        id="equals"
        onClick={() => handleOperatorInput("=")}
      >
        =
      </div>
    </div>
  );
};

export default NumberPad;
