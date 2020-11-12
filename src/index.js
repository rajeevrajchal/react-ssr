import 'babel-polyfill'
import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import clientStore  from './store'
import {renderRoutes} from "react-router-config";
import Routes from "../routes/Routes";

const app = (
    <Provider store={clientStore}>
        <BrowserRouter>
            <div>{ renderRoutes(Routes) }</div>
        </BrowserRouter>
    </Provider>
)
ReactDom.render(app, document.getElementById("root"))
