import React, { Component } from 'react';
import SampleComponent from './sample-component';

export default class ClassComponentLifecycle extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Class Component Lifecycle',
      display: null,
      isVisible: false,
    };
  }

  toggleShowDisplayHandler = () => {
    this.setState({ display: this.state.display ? null : 'none' });
  };

  toggleShowHandler = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  changeMessageHandler = () => {
    this.setState({ message: this.state.message + ', Added new message' });
  };
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <button onClick={this.toggleShowDisplayHandler}>Toggle Show Sample (display)</button>
        <button onClick={this.toggleShowHandler}>Toggle Show Sample</button>
        <button onClick={this.changeMessageHandler}>Change Message</button>
        <button
          onClick={() => {
            console.clear();
          }}
        >
          Clear Console
        </button>
        <div style={{ display: this.state.display }}>
          {/* راه استاندارد */}
          {/* {this.state.isVisible ? <SampleComponent message={this.state.message} /> : null} */}

          {/* راه حرفه ای */}
          {this.state.isVisible && <SampleComponent message={this.state.message} />}
        </div>
      </div>
    );
  }
}
