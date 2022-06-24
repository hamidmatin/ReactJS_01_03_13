import React, { Component } from 'react';

export default class StateAndEventsInCC extends Component {
  constructor() {
    super();
    this.state = {
      counterState : 0
    }
    this.clickHandlerNormalFunction = this.clickHandlerNormalFunction.bind(this)
  }
  counter = 0

  clickHandlerNormalFunction (e) {
    console.log('Event 3')
    console.log(e)
    console.log(this)
    console.log(`counter = ${this.counter}`)
  }

  clickHandlerArrowFunction = (e) => {
    console.log('Event 4')
    console.log(e)
    console.log(`counter = ${this.counter}`)
  }
  /*******************/

  incrementHandler = () => {
    // this.counter++
    // console.log(this.counter)
    // this.forceUpdate()

    // this.state.counterState++
    this.setState({counterState : this.state.counterState + 1})
  }
  decrementHandler = () => {
    // this.counter--
    // console.log(this.counter)
    // this.forceUpdate()
    this.setState({counterState : this.state.counterState - 1})
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log('Event 1');
            console.log(`counter = ${this.counter}`)
          }}
        >
          Event 1
        </button>
        <button
          onClick={(e) => {
            console.log('Event 2');
            console.log(e);
            console.log(`counter = ${this.counter}`)
          }}
        >
          Event 2 with event parameter
        </button>
        <button onClick={this.clickHandlerNormalFunction}>Event 3 with EventHandler Normal Function</button>
        <button onClick={this.clickHandlerArrowFunction}>Event 4 with EventHandler Arrow Function</button>
        <hr />
        <button onClick={this.incrementHandler}>+</button>
        <button onClick={this.decrementHandler}>-</button>
        <p>Counter: {this.counter} </p>
        <p>Counter State: {this.state.counterState} </p>
      </div>
    );
  }
}
