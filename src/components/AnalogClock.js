import Clock from 'react-clock';
import Container from '../Container';
import React from 'react';

class AClock extends React.Component {

  state = {
  date: new Date(),
}

componentDidMount() {
  setInterval(
    () => this.setState({ date: new Date() }),
    1000
  );
}

render() {
  return (
    <div>
      <Container>
      <Clock
        value={this.state.date}
        size={280}
        />
        </Container>
    </div>
  );
}

}

export default AClock;
