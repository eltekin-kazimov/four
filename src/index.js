import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store";
// import BrowserRouter from 'react';
import {BrowserRouter} from "react-router-dom";

export function createDOM () {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
        , document.getElementById('root'));

}

createDOM();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
