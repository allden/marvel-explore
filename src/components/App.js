import React, {Component} from 'react';
// routes
import Characters from './pages/Characters';
import Character from './pages/Character';
import Series from './pages/Series';
import Featured from './general/Featured';
// misc
import Nav from './general/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <main>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Featured}></Route>
                        <Route exact path="/characters" component={Characters}></Route>
                        <Route exact path="/character/:id" component={Character}></Route>
                        <Route exact path="/series" component={Series}></Route>
                    </Switch>
                </main>
            </Router>
        );
    };
};

export default App;