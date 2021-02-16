import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignUp from './components/SignUp/SigunUp';
import './App.css'


const App = () => {

    return(
        <Router>
            <Switch>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/">
                    5005
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
