/// <reference path="../../typing/react.d.ts" />

import * as React from 'react';
import Dispatcher from './dispatcher/Dispatcher';

class Example extends React.Component<any, any> {
  private foo: number;

  constructor() {
    super();
    this.foo = 42;
  }

  render() {
    /// testing
    let d = new Dispatcher();
    d.register(() => {
      console.log('lorem dispatched');
    });

    return (
      <div>This is an example class!</div>
    );
  }
}

export default Example;