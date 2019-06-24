import React from 'react';
import { ChromePicker } from 'react-color';
import Container from '../Container';

class Pick extends React.Component {

  render() {
    return (
      <Container>
    <ChromePicker width="300px" />
    </Container>
   )
  }
}

export default Pick
