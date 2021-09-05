import React from "react"
import {Route, Switch} from "react-router-dom"
import Login from "../../pages/login/login";

const Content = props => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
        </Switch>
    )
}

export default Content
