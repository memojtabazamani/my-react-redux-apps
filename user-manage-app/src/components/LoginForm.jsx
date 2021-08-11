import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='field'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="ui negative message">
                    <i className="close icon"></i>
                    <div className="header">
                        {meta.error}
                    </div>
                </div>
                ) : null}
            </div>
        );
    };

    // And now we can use these
    const SignupForm = () => {
        return (
            <>
            <h1>ورود به حساب</h1>
            <Formik
                initialValues={
                    { userName: "", email: "" }
                }
                validationSchema={Yup.object({
                    userName: Yup.string().required("Required"),
                    email: Yup.string().email("Your Email invalid!").required("Required"),
                })}
                onSubmit={(values) => {

                     alert(JSON.stringify(values, null, 2));

                 }}
                >
                <Form className='ui form'>
                    <MyTextInput
                        label="نام کاربری را وارد کنید"
                        name="userName"
                        type="text"
                        placeholder="نام کاربری را وارد کنید"
                    />
                    <MyTextInput
                        label="ایمیل خود را وارد کنید"
                        name="email"
                        type="text"
                        placeholder="ایمیل را وارد کنید"
                    />

                    <button className="ui green button" type="submit">ورود</button>
                </Form>

            </Formik>
            </>
    );
};

export default SignupForm;
