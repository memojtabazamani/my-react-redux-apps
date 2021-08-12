import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {loginUser} from '../../actions';

import Message from '../utilities/Message';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='field'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="ui negative message">
                    <div className="header">
                        {meta.error}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

// And now we can use these
const LoginForm = (props) => {
    const [login, setLogin] = useState(true);
    const message = (
        <ul class="list">
            <li>
                کد توکن شما منقضی شده
                ، لطفا به بخش ثبت نام رفته و کد توکن جدید دریافت کنید
            </li>
            <li>توکن نادرست وارد میکنید</li>
            <li>اتصال اینترنت خود را بررسی کنید</li>
        </ul>
    )
    return (
        <>
        <h2 class="ui center aligned icon header">
            <i class="circular key icon"></i>
            کاربر گرامی، جهت ورود به حساب، توکن خود را در باکس زیر قرار بدهید
        </h2>

        <Formik
            initialValues={
                { hashId: "",  }
            }
            validationSchema={Yup.object({
                hashId: Yup.string().required("لطفا هش را وارد کنید"),
            })}
            onSubmit={(values) => {

                // IN HERE DO NEDD OPERATIONS!

                // Check equal hash!
                if(window.localStorage.getItem("hashToken") == values.hashId) {
                    setLogin(true);
                    props.loginUser(values.hashId); // ==> dispatch action !
                } else {
                    setLogin(false);
                }

            }}
            >
            <Form className='ui form'>
                <MyTextInput
                    name="hashId"
                    type="text"
                    placeholder="...."
                    className='ui center aligned segment'
                    />

                {
                    login == false && <Message header="خطا در هنگام ورود به سیستم، ممکن است علت وجود خطا یکی از موارد زیر باشد" content={message}/>
                }
            <button className="ui green button" type="submit">صحت کد و ورود به حساب</button>
        </Form>
    </Formik>

    </>
);
};

export default connect(null, {
    loginUser
})(LoginForm);
