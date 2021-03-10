import React from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";

const AuthHOC = (props) => {
    const { pathname } = props.history.location;
    if (pathname === '/signin' || pathname === '/resetpassword' || pathname === '/signup'){
        if (localStorage.getItem('accessToken')){
            return(<Redirect to='/requestjob'/>)
        }
    }
    if (!localStorage.getItem('accessToken') && (pathname !== '/signin' && pathname !== '/resetpassword' && pathname !== '/signup')){
        return(<Redirect to='/signin'/>)
    }

    return (props.children)
};

export default withRouter(AuthHOC);
