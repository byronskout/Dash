import React from 'react';

class Input extends React.Component {
	constructor() {
		super();
		this.handleUserInput = this.handleUserInput.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}
	handleUserInput(e) {
		e.preventDefault();
		let userNumber = btoa(this.userNumber.value);
		this.userNumber.value = "";
		this.props.compareUserInput(userNumber);
	}
	handleReset() {
		this.props.onReset();
	}
	render() {
		let layout;
		if(this.props.wrong < 3) {
			layout = <div className="app__input">
						<form onSubmit={this.handleUserInput}>
							Number is:
							<input
								pattern="[0-9]+"
								type="text"
								ref={ (ref) => this.userNumber = ref }
								required
								autoFocus />
							<br/>
							<br/>
						</form>
						<button id="game-button" onClick={this.handleReset}>Start</button>
					</div>
		} else {
			layout = <div className="app__end">
						<div class="app__notify">Shmack!</div><br/><br/><button onClick={this.handleReset}>Restart</button>
					</div>;
		}

		return(layout)
	}
}

export default Input
