import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import Loader from '../utilities/loeader';

import {registerUser, logOutUser, fetchTokenUser} from '../../actions';
import { connect } from 'react-redux';

const SignUpForm = (props) => {
    const [loading, setLoading] = useState(false);
    useEffect(()=> {
        props.fetchTokenUser();
    }, []);

    // In Here Generate Hash
    const generateHash = () => {
        setLoading(true);
        setTimeout(() => {
            var jwt = require('jsonwebtoken');
            var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
            props.registerUser(token) // ==> set hash

            // Save this hash id in local storage.
            window.localStorage.setItem('hashToken', token);
            setLoading(false); // ==> set loading false for show hash
        }, 2000)
    }
    const deleteToken = () => {
        window.localStorage.removeItem('hashToken'); // ==> Delete Token
        props.logOutUser(); // ==> remove hash and logout
    }
    if(props.hashId) {
        return (
            <div className="ui info message">
                <h5 className="ui header center aligned centert">
                    {props.hashId}
                </h5>
                <ul className="list right aligned">
                    <li>شما میتوانید به طور موقت از این کد جهت انجام کارهای خود در سرویس های استفاده کنید</li>
                    <li>هرگز این کد را در اختیار کسی قرار ندهید!</li>
                    <li className='ui red' style={{"color": "red"}} onClick={(e) => deleteToken()}>توجه : در صورتی که میخواهید این توکن را منقضی کنید اینجارا کلیک کنید، توجه داشته باشید منقضی کردن توکن به معنای حذف تمامیه اطلاعات شما میباشد پس دقت کنید</li>
                </ul>
            </div>
        )
    }
    if(loading) {
        return (
            <Loader />
        )
    }

    return (
        <div className='ui'>
            <h4>
                کاربر گرامی جهت ثبت اکانت جدید، روی دکمه زیر کلیک کنید تا یک عدد هش شده جدید دریافت کنید
            </h4>
            <div className="ui animated fade button green" onClick={(e) => generateHash()}>
                <div className="visible content">شاید کمی زمان ببرد، شکیبا باشید!</div>
                <div className="hidden content" >
                    دریافت هش
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        hashId: state.auth.hashId
    }
}

export default connect(mapStateToProps, {
    registerUser,
    logOutUser,
    fetchTokenUser
})(SignUpForm);
