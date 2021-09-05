import React, {useEffect} from 'react';
import { Formik, Form } from 'formik';
import MyTextInput from "./Input";

// MY COMPOENNTS
import { InsertFormValidation } from './validations';

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
                        name="body"
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

Com.defaultProps = {
    initialValues: {
        title:"",
        body: ""
    },
    submitButton: <button className="ui green button" type="submit">Submit Form</button>
};

export default Com;