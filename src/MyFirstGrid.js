import GridLayout from 'react-grid-layout';
import React from 'react';
import Pick from './Pick'

export default class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2},
      {i: 'b', x: 1, y: 0, w: 3, h: 2},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={3} rowHeight={30} width={100}>
        <div key="a">{<Pick/>}</div>
        <div key="b">b</div>
        <div key="c">c</div>
      </GridLayout>
    )
  }
}
