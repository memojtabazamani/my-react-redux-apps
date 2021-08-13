import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {createPost} from '../../actions';

import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

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

const com =  (props) => {
    return (
        <>
            <Formik
                initialValues={
                    { title: "", description: ""  }
                }
                validationSchema={Yup.object({
                    title: Yup.string().required("عنوان پست باید درج شود")
                })}
                onSubmit={(values) => {
                    props.createPost(values);
                }}
            >
                <Form className='ui form'>
                    <MyTextInput
                        label="عنوان"
                        name="title"
                        type="text"
                        placeholder="...."
                        className='ui center aligned segment'
                    />

                    <MyTextInput
                        label="توضیحات"
                        name="description"
                        type="text"
                        placeholder="...."
                        className='ui center aligned segment'
                    />

                    <button className="ui green button" type="submit">تأیید اطلاعات</button>
                </Form>
            </Formik>
        </>
    )
}

const mapStateToProps = (state) => {
    return {posts: state.posts }
}

export default connect(mapStateToProps, {
    createPost
})(com);