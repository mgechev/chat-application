/// <reference path="../../typing/react.d.ts" />

import * as React from 'react';
import Example from './example';

class DemoProps {
    public name: string;
    public age: number;
}

class Demo extends React.Component<DemoProps, any> {
  private foo: number;
  constructor(props: DemoProps) {
    super(props);
    this.foo = 42;
  }
  render() {
    return (
      <div>Hello world!</div>
    );
  }
}

 React.render(
    <Example />,
    document.getElementById('example')
);