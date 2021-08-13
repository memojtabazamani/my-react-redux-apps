import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {createPost} from '../../actions';

const com =  (props) => {
    return (
        <>
            Delete Post
        </>
    )
}

export default connect(null, {
    createPost
})(com);