import * as React from 'react';
// import { Component } from 'react';

export interface Props {
  count: number;
}

export interface State {}

class Test extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.state = { :  };
  }
  render() {
    return <div></div>;
  }
}

export default Test;
