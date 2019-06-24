import Calendar from 'react-calendar';
import Container from '../Container';
import React from 'react';

class Calender extends React.Component {

  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <Container>
    <Calendar
    onChange={this.onChange}
    value={this.state.date} />
    </Container>
   )
  }
}

export default Calender
