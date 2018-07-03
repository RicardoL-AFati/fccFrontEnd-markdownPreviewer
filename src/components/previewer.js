import React, { Component } from 'react';

export default class Previewer extends Component {
  constructor(props) {
    super(props);

    this.state = { value: ''};
  }

  render() {
    return (
      <textarea id='editor'
        value={this.state.value}
        onChange={event => this.setState({ value: event.target.value})} />
    );
  }
}