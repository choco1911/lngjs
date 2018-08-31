import React from 'react';
import { render } from 'react-dom';


function HelloWorld() {
    return <h1> Hello World </h1>
}


render( <HelloWorld /> , document.getElementById('container'))

/*
<h1>Hello World</h1>

React.createElement(
    "h1",
    null,
    "Hello world"
);

 React.createElement("HelloWorld", null)

*/
