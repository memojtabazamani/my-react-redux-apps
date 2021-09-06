import React from 'react';
import {Redirect} from "react-router-dom";

function withAuth() {
    function hoc(InputComponent) {
        function WrapperComponent(props) {

            const {auth,userActions} = props;

            const isFreePage = () => {

                let href = window.location.href;

                return href.indexOf('/login') !== -1 ||
                    href.indexOf('/auto-login') !== -1 ||
                    href.indexOf('/mobileverify') !== -1 ||
                    href.indexOf('/register-success') !== -1 ||
                    href.indexOf('/suspend') !== -1 ||
                    href.indexOf('/retrieve-password-check') !== -1||
                    href.indexOf('/retrieve-mobileverify') !== -1||
                    href.indexOf('/change-password-success') !== -1||
                    href.indexOf('/change-password') !== -1||
                    href.indexOf('/register') !== -1;
            };


            const isUserLogin = () => {
                return true;
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
