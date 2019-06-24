import AnalogClock, { Themes } from 'react-analog-clock';
import Container from '../Container';
import React from 'react';

class Analog extends React.Component {

render() {
  return (
    <div>
      <Container>
      <AnalogClock
        theme={Themes.navy}
        width={200}
        />
        </Container>
    </div>
  );
}

}

export default Analog;
