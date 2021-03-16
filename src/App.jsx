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
import AuthHOC from './components/AuthHOC';


const App = () => {

    return(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/signup">
                        <AuthHOC>
                            <SignUp />
                        </AuthHOC>
                    </Route>
                    <Route path="/resetpassword">
                        <AuthHOC>
                            <ResetPassword />
                        </AuthHOC>
                    </Route>
                    <Route path="/signin">
                        <AuthHOC>
                            <SignIn />
                        </AuthHOC>
                    </Route>
                    <Route path="/requestjob">
                        <AuthHOC>
                            <RequestJob />
                        </AuthHOC>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
