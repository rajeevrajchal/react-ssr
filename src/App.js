import React from 'react';
import {Helmet} from "react-helmet";
import logo from "./assets/images/logo.svg";

import Routes from "../routes/Routes";

const App = () => {
    return (
        <div className={'App'}>
            <Helmet>
                <meta charSet="utf-8" />
                <title> React SSR </title>
            </Helmet>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Welcome to React in the Server</h2>
            </div>
            <p className="App-intro">Isn't this cool?</p>
            <button className="btn primary" onClick={() => console.log(' button pressed successfully ')} >
                press my
            </button>
            <Routes/>
        </div>
    );
};

export default App;
