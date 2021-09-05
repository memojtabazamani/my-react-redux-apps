import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// MY COMPONENTS
import Header from '../Utilities/Header';
import Posts from '../PostsPage/Posts';
import CreatePostForm from "../PostsPage/CreatePostForm";
import { connect } from 'react-redux';
import Message from '../Utilities/Message';


const STYLES = {
    "marginTop": "50px",
};
const Layout = (props) => {

    // MY FUNCTION
    const renderMessages = () => { // This Method using for rendering messsage
        if (props.message) { // Check If Have Message?
            if (props.message.status === "success") { // Success Message
                return (
                    <>
                        <Message content={props.message.message} icon='info' type='blue' />
                    </>
                )
            } else if (props.message.status === "error") { // Error Messsage
                return (
                    <>
                        <Message content={props.message.message} icon='warning' type='red' />
                    </>
                )
            }
        }
        return (<></>)
    };

    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <div className="ui main text container" style={STYLES}>
                    <Switch>
                        <Route path='/' exact component={Posts} />
                        <Route path='/create' component={CreatePostForm} />
                    </Switch>
                    {renderMessages()}
                </div>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(Layout);