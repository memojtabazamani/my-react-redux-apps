import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {createPost} from '../../actions';
import * as Yup from 'yup';

import PostForm from './PostForm';
import history from '../utilities/history';

const com = (props) => {
    const onSubmitForm = (values) => {
        props.createPost(values);

        history.push({ // Use This Method For Show Message When Redirect!!
            pathname: '/dashboard',
            state: {
                message: "پست شما با موفقیت در وبلاگ انتشار یافت",
                type: "success"
            }
        });

    }
    // Make Custom Form Button
    const submitButton = <button className="ui blue button" type="submit">انتشار پست</button>

    return (
        <>
        <PostForm
            submitButton={submitButton}
            handleMe={onSubmitForm}/>
        </>
)
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {
    createPost
})(com);
