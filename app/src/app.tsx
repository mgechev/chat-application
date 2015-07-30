/// <reference path="../../typing/react.d.ts" />

import * as React from 'react';
import Example from './example';

class DemoProps {
    public name: string;
    public age: number;
}

class App extends React.Component<DemoProps, any> {
  constructor(props: DemoProps) {
    super(props);
    this.state = {};
    this.state.hidden = true;
  }

  open() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    var classNames:string = 'box';
    if (this.state.hidden === true) {
        classNames = 'box hidden';
    }

    return (
      <div>
        <button onClick={this.open.bind(this)}>Click Me!!</button>
        <div className={classNames}>
        </div>
      </div>
    );
  }
}

 React.render(
    <App age={25} name="Nikola" />,
    document.getElementById('example')
);