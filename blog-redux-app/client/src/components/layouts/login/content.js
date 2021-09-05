import React from "react"
import {Route, Switch} from "react-router-dom"
import Login from "../../pages/login/login";
import Message from "../../Utilities/Message";
import { connect } from 'react-redux';
import Posts from "../Pages/Posts/Posts";

const Content = props => {
    
    return (
        <Switch>
            <Route path="/login" component={Login} />
        </Switch>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(Content);
