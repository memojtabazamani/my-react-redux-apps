import React from 'react';
import {Redirect} from "react-router-dom";

function withAuth() {
    function hoc(InputComponent) {
        function WrapperComponent(props) {

            const {auth,userActions} = props;

            const isFreePage = () => {
                let pathname = window.location.pathname;
                // return pathname === Routes.Login.path || pathname === Routes.Signup.path
            };

            const isUserLogin = () => {
                //return true;
                return isFreePage() || (
                    auth.authToken?.code /*&&
                    auth.authToken?.expires &&
                    auth.authToken?.expires>Math.floor(Date.now() / 1000)*/
                )
            };


            if (isUserLogin()) {
                return <InputComponent {...props} />
            } else {
                return <Redirect to="/login"/>
            }

        }

        return WrapperComponent;
    }

    return hoc;
}


export default withAuth;
