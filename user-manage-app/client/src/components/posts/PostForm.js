import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const renderErrorInput = (meta) => { // ==> Render Error
    return (
        <>
            {
                meta.touched && meta.error ? (
                    <div className="ui negative message">
                        <div className="header">
                            {meta.error}
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='field'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} />
            {renderErrorInput(meta)}
        </div>
    );
};

const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='field'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea {...field} {...props} />
            {renderErrorInput(meta)}
        </div>
    );
};

const com =  (props) => {
    return (
        <>
            <Formik
                initialValues={props.initialValues}
                validationSchema={Yup.object({
                    title: Yup.string().required("عنوان پست باید درج شود"),
                })}
                onSubmit={(values) => {
                    props.handleMe(values);
                }}
            >
                <Form className='ui form'>
                    <MyTextInput
                        label="عنوان"
                        name="title"
                        type="text"
                        placeholder="...."
                        className='ui segment'
                    />

                    <MyTextArea
                        label="توضیحات"
                        name="description"
                        placeholder="...."
                        className='ui'
                    />

                    { props.submitButton }
                </Form>
            </Formik>
        </>
    )
}

com.defaultProps = {
    initialValues: {
        title:"",
        description: ""
    },
    submitButton: <button className="ui green button" type="submit">تأیید اطلاعات</button>
}

export default com;
