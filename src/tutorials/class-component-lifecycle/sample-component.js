import React, { Component } from 'react';

export default class SampleComponent extends Component {
  constructor() {
    console.log('(1. Mounting) constructor');
    super();

    this.state = {
      counter: 0,
      isMessageTooLong: false,
    };
  }

  incrementHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrementHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  /****************/
  static getDerivedStateFromProps(props, state) {
    console.log('(2. Mounting) (5. Updating) getDerivedStateFromProps');
    // console.log('props', props);
    // console.log('state', state);

    /*
      retrun null or new State
    */

    let counter = state.counter;
    if (state.counter > 10) counter = 10;
    else if (state.counter < -10) counter = -10;

    return {
      ...state,
      counter,
      isMessageTooLong: props.message.length > 100,
    };

    // return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('(6. Updating) shouldComponentUpdate');
    // console.log('nextProps', nextProps);
    // console.log('nextState', nextState);
    // console.log('this.props', this.props);
    // console.log('this.state', this.state);

    // return !nextState.isMessageTooLong
    // return nextState.counter !== this.state.counter ;

    return true;
  }
  render() {
    console.log('(3. Mounting) (7. Updating) render');
    return (
      <div>
        {this.state.isMessageTooLong ? (
          <p style={{ color: 'red', fontWeight: '900', fontStyle: 'italic' }}>
            Message is too long !!
          </p>
        ) : (
          <h3>{this.props.message}</h3>
        )}

        <button onClick={this.incrementHandler}>+</button>
        <button onClick={this.decrementHandler}>-</button>
        <p>Counter : {this.state.counter}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log('(4. Mounting) componentDidMount');
    this.setState({ counter: 3 });
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log('(8. Updating) getSnapshotBeforeUpdate');
    // console.log('prevProps = ', prevProps)
    // console.log('prevState = ', prevState)
    // console.log('props = ', this.props)
    // console.log('state = ', this.state)
    // return 'set value for snapshot or return null'

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(`(9. Updating) componentDidUpdate `);
    // console.log('prevProps = ', prevProps);
    // console.log('prevState = ', prevState);
    // console.log('this.props = ', this.props);
    // console.log('this.state = ', this.state);
    // console.log('snapshot = ', snapshot);
    if(this.state.counter !== prevState.counter)
      this.setState({...this.state, counter: 5})
  }
  componentWillUnmount() {
    console.log('(10. Unmounting) componentWillUnmount');
  }
}
