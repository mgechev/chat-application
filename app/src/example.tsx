/// <reference path="../../typing/react.d.ts" />

import * as React from 'react';

class Example extends React.Component<any, any> {
    private foo: number;
    constructor() {
        super();
        this.foo = 42;
    }
    render() {
        return (
            <div>This is an example class!</div>
    );
    }
}

export default Example;