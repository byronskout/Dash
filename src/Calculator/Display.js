import React from 'react';

const Display = props => {
  const { fade, display, input } = props.state;
  const displayClass = `display ${fade}`;
  const inputClass = `input-display ${fade}`;
  return (
    <div className="display-container">
      <div className={inputClass}>
        <p>{input}</p>
      </div>
      <div className={displayClass} id="display">
        {display.length > 10 ? Number(display).toExponential(6) : display}
      </div>
      <div
        className="calc-button clear-button"
        id="clear"
        onClick={props.onClick}
      >
        C
      </div>
    </div>
  );
};

export default Display
