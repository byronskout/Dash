
import {SketchField, Tools} from 'react-sketch';
import React from 'react';
import Container from '../Container';
import './Sketch.css'

class SketchFieldDemo extends React.Component {

     render() {
        return (
          <Container>
            <SketchField width='400px'
                         height='400px'
                         tool={Tools.Pencil}
                         lineColor='black'
                         lineWidth={3}/>
                         Sketch
          </Container>
        )
     }
}

export default SketchFieldDemo;
