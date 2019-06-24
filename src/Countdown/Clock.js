import React from 'react';

class Clock extends React.Component {
  format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
    seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
    return minutes + ':' + seconds;
  }
  render () {
    const {time} = this.props;
    return (
      <div className="displayedTime">
        <h1>{this.format(time)}</h1>
      </div>
    )
  }
}

export default Clock;
