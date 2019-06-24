import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";

//Widgets
import SketchFieldDemo from '../src/Sketch/Sketch';
import Imagecrop from './components/Imagecrop';

const ReactGridLayout = WidthProvider(RGL);

class StaticElementsLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        className="layout"
        rowHeight={30}
      >
        <div key="1" data-grid={{ x: 0, y: 3, w: 4, h: 11, static: true }}>
          <span className="text"><SketchFieldDemo/></span>
        </div>
        <div key="2" data-grid={{ x: 4, y: 3, w: 4, h: 11, static: true }}>
          <span className="text"><Imagecrop/></span>
        </div>

      </ReactGridLayout>
    );
  }
}

 export default StaticElementsLayout;
