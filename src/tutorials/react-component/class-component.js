import React, { Component } from 'react';

/*
  import React from 'react'
  class ClassName extends React.Component {
    render () {
      ....
      return jsx
    }
  }

  or 

  import React, { Component } from 'react'
  class ClassName extends Component {
    render () {
      ....
      return jsx
    }
  }

*/
const style = {
  padding: '1em',
  textAlign: 'center',
  marginBottom: '10px',
  backgroundColor: '#f1f1f1',
};

export class ClassComponent1 extends React.Component {
  render() {
    return (
      <div style={style}>
        <h3>Hello React Class Component (1)</h3>
      </div>
    );
  }
}

export class ClassComponent2 extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={style}>
        <h3>{this.props.title}</h3>
        <p>{this.props.message}</p>
        {this.props.children}
      </div>
    );
  }
}
