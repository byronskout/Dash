import React from 'react';

class Input extends React.Component {

  onSubmit(event) {
    event.preventDefault();
    const strSeconds = this.refs.seconds.value;
    if(strSeconds.match(/[0-9]/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit.bind(this)}>
        <input id="timing" type="text" ref="seconds" placeholder="Enter time in seconds"/>
        <input type="submit" value="Start"></input>
      </form>
    )
  }
}

export default Input;
