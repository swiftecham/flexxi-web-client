import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignUp from './components/SignUpSignIn/SignUp/SigunUp';
import './App.css'
import ResetPassword from './components/SignUpSignIn/ResetPassword/ResetPassword';


const App = () => {

    return(
        <Router>
            <Switch>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/resetpassword">
                    <ResetPassword />
                </Route>
                <Route path="/">
                    5005
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
