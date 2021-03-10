import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SignUp from './components/Pages/SignUpSignIn/SignUp/SigunUp';
import './App.css'
import ResetPassword from './components/Pages/SignUpSignIn/ResetPassword/ResetPassword';
import SignIn from './components/Pages/SignUpSignIn/SignIn/SignIn';
import RequestJob from './components/Pages/RequestJob/RequestJob';
import { Provider } from 'react-redux'
import store from '../src/redux/store'


const App = () => {

    return(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/resetpassword">
                        <ResetPassword />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/requestjob">
                        <RequestJob />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
