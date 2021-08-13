import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {createPost} from '../../actions';

import CreatPost from './CreatePost';

const com =  (props) => {
    return (
        <>
           <CreatPost />
        </>
    )
}

export default connect(null, {
    createPost
})(com);