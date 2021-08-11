import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import Loader from '../utilities/loeader';

const SignUpForm = () => {
    const [hash, setHash] = useState("");
    const [loading, setLoading] = useState(false);

    // In Here Generate Hash
    const generateHash = () => {
        setLoading(true);
        setTimeout(() => {
            var jwt = require('jsonwebtoken');
            var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
            setHash(token); // ==> set hash 
            setLoading(false); // ==> set loading false for show hash
        }, 2000)
    }
    if(hash) {
        return (
            <div class="ui info message">
                <h5 class="ui header center aligned centert">
                    {hash}
                </h5>
                <ul class="list right aligned">
                    <li>شما میتوانید به طور موقت از این کد جهت انجام کارهای خود در سرویس های استفاده کنید</li>
                    <li>هرگز این کد را در اختیار کسی قرار ندهید!</li>
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

export default SignUpForm;
