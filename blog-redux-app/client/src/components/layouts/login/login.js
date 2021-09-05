import React from "react"
import RouteContent from "./content"
import { connect } from 'react-redux';
import Message from "../../Utilities/Message";

const Login = props => {
    const {title,subTitle=""}=props
    const renderMessages = () => { // This Method using for rendering messsage
        console.log(props.message);
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
        <>
            <RouteContent/>
            {renderMessages()}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(Login);
