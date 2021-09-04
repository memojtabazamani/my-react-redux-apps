import React from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from "./Input";

// MY COMPOENNTS
import { InsertFormValidation } from './validations';

const com =  (props) => {
    return (
        <>
            <Formik
                initialValues={props.initialValues}
                onSubmit={(values) => {
                    props.handleMe(values);
                }}
                validationSchema={InsertFormValidation()}
            >
                <Form className='ui form'>
                    <MyTextInput
                        label="Enter The Title"
                        name="title"
                        type="text"
                        placeholder="...."
                        className='ui segment'
                    />

                    <MyTextInput
                        label="Enter Description"
                        name="description"
                        type="text"
                        placeholder="..."
                        className="ui segment"
                    />

                    <MyTextInput
                        label="Enter Author"
                        name="author"
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

com.defaultProps = {
    initialValues: {
        title:"",
        description: ""
    },
    submitButton: <button className="ui green button" type="submit">Submit Form</button>
};

export default com;