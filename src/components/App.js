import React, {Component} from 'react';
import './styles/style.scss';
// routes
import Characters from './pages/Characters';
import Character from './pages/Character';
import Series from './pages/Series';
import SpecificSeries from './pages/SpecificSeries';
import Comics from './pages/Comics';
import Comic from './pages/Comic';
import Creators from './pages/Creators';
import Creator from './pages/Creator';
import Featured from './general/Featured';
import NotFound from './general/NotFound';
// misc
import Nav from './general/Nav';
import Footer from './general/Footer'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <main>
                    <Switch>
                        <Route exact path="/" component={Featured}></Route>
                        <Route exact path="/characters" component={Characters}></Route>
                        <Route exact path="/characters/:id" component={Character}></Route>
                        <Route exact path="/series" component={Series}></Route>
                        <Route exact path="/series/:id" component={SpecificSeries}></Route>
                        <Route exact path="/comics" component={Comics}></Route>
                        <Route exact path="/comics/:id" component={Comic}></Route>
                        <Route exact path="/creators" component={Creators}></Route>
                        <Route exact path="/creators/:id" component={Creator}></Route>
                        <Route exact path="/marvel-explore" component={() => <Redirect to="/" />}></Route>
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                    <Footer />
                </main>
            </Router>
        );
    };
};

export default App;