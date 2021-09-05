import "./login.css";
import LoginForm from '../../Forms/LoginForm';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
// MY ACTIONS
import {setLogin, setLoginError} from '../../../actions';


const Com = (props) => {
    useEffect(() => {
        console.log();
    }, [])
    const handleForm = (values) => {
        const users = [ // Fake Users
            {
                "username": "mojtaba",
                "password": "zamani"
            }, {
                "username": "sarah",
                "password": "abdi"
            }
        ]

        let login = false;
        users.map((user) => { // Check Login
            if(user.username === values.username && user.password === values.password) {
                props.setLogin(); // Set Login State
                login = true;
            } 
        });
        if(login == false) {
            props.setLoginError();
        }

        
    }
    if(props.auth) {
        window.location.href="/";
        // return (
        //     <>
        //         <Redirect to={'/create'}/>
        //     </>
        // )
    }
    return (
        <div class="ui middle">
            <div class="column">
                <h2 class="ui teal image header">
                    <div class="content">
                        Log-in to your account
                    </div>
                </h2>
                <LoginForm handleMe={handleForm}/>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {
    setLogin, setLoginError
}

export default connect(mapStateToProps, mapDispatchToProps)(Com);