import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import StaticElementsLayout from '../src/StaticElementsLayout';
import PerfectScrollbar from 'react-perfect-scrollbar'

//Widgets
import Pick from './components/Pick';
import DateTime from './components/DateTime';
import Weather from './components/Weather';
import List from './List/List';
import Calender from './components/Calendar';
import AClock from './components/AnalogClock';
import Chatbot from './chatbots/chatbot';
import Calculator from '../src/Calculator/Calculator';
import Youtube from '../src/Youtube/Youtube';
import CountDown from '../src/Countdown/CountDown';
import Map from './components/Map';
import NewsWidget from './News/NewsWidget/index';
import Memorizr from './Memorizr/Memorizr';
import Twitter from './Twitter';
import BasicPiano from './Piano/Piano';
import Player from './Player';

const ReactGridLayout = WidthProvider(RGL);
const originalLayout = getFromLS("layout") || [];

export default class LocalStorageLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    cols: 6,
    onLayoutChange: function() {}
  };

  constructor(props) {
    super(props);

    this.state = {
      layout: JSON.parse(JSON.stringify(originalLayout)),
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.resetLayout = this.resetLayout.bind(this);
  }

  resetLayout() {
    this.setState({
      layout: []
    });
  }

  onLayoutChange(layout) {
    saveToLS("layout", layout);
    this.setState({ layout });
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <div className="back">
      <div className="navv">
      </div>
        <button id="reset-button" onClick={this.resetLayout}>Reset Layout</button>
        <ReactGridLayout
          {...this.props}
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
        >
          <div key="1" data-grid={{ w: 2, h: 3, x: 4, y: 3 }}>
            <span className="text"><Pick/></span>
          </div>
          <div key="2" data-grid={{ w: 2, h: 3, x: 0, y: 3 }}>
            <span className="text"><DateTime/></span>
          </div>
          <div key="3" data-grid={{ w: 2, h: 3, x: 2, y: 0 }}>
            <span className="text"><Weather/></span>
          </div>
          <div key="4" data-grid={{ w: 2, h: 3, x: 4, y: 0 }}>
            <span className="text"><Calender/></span>
          </div>
          <div key="5" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>
            <span className="text"><AClock/></span>
          </div>
          <div key="6" data-grid={{ w: 2, h: 3, x: 0, y: 3 }}>
            <span className="text"><Calculator/></span>
          </div>
          <div key="7" data-grid={{ w: 2, h: 3, x: 2, y: 0 }}>
            <span className="text"><Twitter/></span>
          </div>
          <div key="8" data-grid={{ w: 2, h: 3, x: 4, y: 0 }}>
            <span className="text"><Chatbot/></span>
          </div>
          <div key="9" data-grid={{ w: 2, h: 4, x: 11, y: 0 }}>
          <span className="text"><Map/></span>
          </div>
          <div key="10" data-grid={{ w: 2, h: 4, x: 11, y: 0 }}>
          <span className="text"><Memorizr/></span>
          </div>
          <div key="11" data-grid={{ w: 2, h: 4, x: 11, y: 0 }}>
          <span className="text"></span>
          </div>
          <div key="12" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>
          <span className="text"><CountDown/></span>
          </div>
          <div key="13" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>
          <span className="text"><Youtube/></span>
          </div>
          <div key="14" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>
          <span className="text"><BasicPiano/></span>
          </div>
          <div key="15" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>
          <span className="text"><Player/></span>
          </div>
          <div key="16" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>
          <span className="text"><NewsWidget/></span>
          </div>
          <div>
          </div>
        </ReactGridLayout>
        <StaticElementsLayout>
        </StaticElementsLayout>
      </div>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-7")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-7",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
