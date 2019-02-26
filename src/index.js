import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const notes = [{content: 'test', id: 1}, {content: 'test', id: 2}, {content: 'test', id: 3}]
const note = notes[0]
console.log(note)
ReactDOM.render(<App notes={notes} note={note}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
