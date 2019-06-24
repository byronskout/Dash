import React from 'react';
import GenerateNum from './GenerateNum';
import Input from './Input';
import Container from '../Container';

class Memorizr extends React.Component {
	constructor() {
		super();
		this.compareUserInput = this.compareUserInput.bind(this);
		this.randomGenerate = this.randomGenerate.bind(this);
		this.resetState = this.resetState.bind(this);
		this.state = {
			question: btoa(this.randomGenerate(2)),
			level: {main: 1, sub: 1},
			wrong: 0
		}
	}
	resetState() {
		this.setState({
			question: btoa(this.randomGenerate(2)),
			level: {main: 1, sub: 1},
			wrong: 0,
		})
	}
	randomGenerate(digit) {
		let max = Math.pow(10, digit) - 1,
			min = Math.pow(10, digit - 1)

		return Math.floor(Math.random() * (max - min + 1)) + min
	}
	compareUserInput(userNumber) {
		let currQuestion = this.state.question,
			mainLevel = this.state.level.main,
			subLevel = this.state.level.sub,
			wrong = this.state.wrong,
			digit;

		if(userNumber === currQuestion) {
			if(subLevel < 3) {
				++subLevel;
			} else
			if(subLevel === 3) {
				++mainLevel;
				subLevel = 1;
			}
		} else {
			++wrong;
		}
		digit = mainLevel + 2;

		this.setState({
			question: btoa(this.randomGenerate(digit)),
			level: {main: mainLevel, sub: subLevel},
			wrong: wrong
		});
	}
	render() {
		return(
			<div className="main__app">
      <Container>
				<GenerateNum
					question={this.state.question}
					level={this.state.level}
					wrong={this.state.wrong}/>
				<Input
					compareUserInput={this.compareUserInput}
					wrong = {this.state.wrong}
					onReset = {this.resetState} />
          </Container>
			</div>
		)
	}
}

export default Memorizr;
