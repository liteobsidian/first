import * as serviceWorker from './serviceWorker'
import './index.css';
import React from "react";
import ReactDOM from 'react-dom';
import AppWithRouter from "./App";

    ReactDOM.render(
        <AppWithRouter/>
        , document.getElementById('root'));

serviceWorker.unregister();