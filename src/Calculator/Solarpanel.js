import React from 'react';

const SolarPanel = props => {
  return (
    <div
      className="solar-panel"
      id="solar-panel"
      onMouseOver={props.mouseOver}
      onMouseOut={props.mouseOff}
    >
      <div className="solar-panel-line" />
      <div className="solar-panel-line" />
      <div className="solar-panel-line" />
      <div className="solar-panel-line" />
      <div className="solar-panel-line" />
    </div>
  );
};

export default SolarPanel
