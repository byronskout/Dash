import React from 'react';
import Clock from './Clock';
import Input from './Input';
import Button from './Button';
import Container from '../Container';
import './CountDown.css'

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1500,
      running: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.running !== prevState.running){
      switch(this.state.running) {
        case true:
          this.handleStart();
      }
    }
  }

  handleStart() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState(
        {count: newCount >= 0 ? newCount : 0}
      );
    }, 1000);
  }

  handleStop() {
    if(this.timer) {
      clearInterval(this.timer);
      this.setState(
        {running:false}
      );
    }
  }

  handleReset() {
    this.setState(
      {count: 0}
    );
  }

  handleCountdown(seconds) {
    this.setState({
      count: seconds,
      running: true
    })
  }

  render() {
    const {count} = this.state;
    return (
      <div className="container-count">
      <Container>
        <Clock time={count}/>
        <Input onSetCountdown={this.handleCountdown.bind(this)}/>
        <Button id="count-button" label="stop" onClickHandler={this.handleStop.bind(this)}/>
        <Button id="count-button" label="reset" onClickHandler={this.handleReset.bind(this)}/>
        </Container>
      </div>
    )
  }
}

export default CountDown;
