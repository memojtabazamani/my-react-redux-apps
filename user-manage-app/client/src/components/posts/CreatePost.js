import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {createPost} from '../../actions';
import * as Yup from 'yup';

import PostForm from './PostForm';


const com = (props) => {
    const onSubmitForm = (values) => {
        props.createPost(values);
    }
    return (
        <>
            <PostForm handleMe={onSubmitForm}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {
    createPost
})(com);
