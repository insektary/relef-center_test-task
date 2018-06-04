import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import './App.less';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
            </div>
        );
    }
}

export default App;
