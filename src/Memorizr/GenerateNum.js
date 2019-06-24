import React from 'react';

class GenerateNum extends React.Component {
	componentDidUpdate() {
		let time, digit;
		digit = this.props.level.main + 2;
		time = 100 * Math.min(digit, 5) + 400 * Math.max(digit-5, 0);

		let number = document.getElementById('number');
		setTimeout(function() {
				number.innerHTML = number.innerHTML.replace(/\w/gi, '&#183;');
			}, time);

	}
	componentDidMount() {
		let number = document.getElementById('number');
		setTimeout(function() {
			number.innerHTML = number.innerHTML.replace(/\w|\W/gi, '&#183;');
		}, 1200);
	}
	render() {
		return(
			<div className="app__gen-number">
				<div className="app__info">
				<p>Brain Training</p>
					<p className="app__level">Level: {this.props.level.main} - {this.props.level.sub}</p>
					<p className="app__wrong">Wrong: {this.props.wrong}/3</p>
				</div>
				<p className="app__divider">**********************</p>
				<p className="app__number" id="number">{(this.props.wrong < 3) ? atob(this.props.question) : '????'}</p>
				<p className="app__divider">**********************</p>
			</div>
		)
	}
}


export default GenerateNum;
