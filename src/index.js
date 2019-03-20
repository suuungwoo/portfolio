import React from 'react';
import ReactDOM from 'react-dom';
import MoveTo from 'moveto';
import './styles/index.scss';
import Main from './components/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const moveTo = new MoveTo();
// 全てのページ内リンクをスムーススクロールに
Array.from(document.querySelectorAll('a[href^="#"]'), trigger => {
  return moveTo.registerTrigger(trigger);
});
