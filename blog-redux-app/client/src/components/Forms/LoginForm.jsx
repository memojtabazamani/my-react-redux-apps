import React, {useEffect} from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from "./Input";

// MY COMPOENNTS
import { loginFormValidation } from './validations';

const Com = (props) => {
    useEffect(() => {
        console.log(props);
    }, [])
    return (
        <>
            <Formik
                initialValues={props.initialValues}
                onSubmit={(values) => {
                    props.handleMe(values);
                }}
                validationSchema={loginFormValidation()}
            >
                <Form className='ui form'>
                    <MyTextInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="...."
                        className='ui segment'
                    />

                    <MyTextInput
                        label="Password"
                        name="password"
                        type="text"
                        placeholder="..."
                        className="ui segment"
                    />

                    { props.submitButton }
                </Form>
            </Formik>
        </>
    )
};

Com.defaultProps = {
    initialValues: {
        username:"",
        password: ""
    },
    submitButton: <button className="ui green button" type="submit">Login</button>
};

export default Com;