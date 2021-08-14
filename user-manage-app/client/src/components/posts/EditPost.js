import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as Yup from 'yup';

// Import My Actions
import {editPost, fetchPost} from '../../actions';

// Import My Component
import PostForm from './PostForm';
import _ from 'lodash';


const Com = (props) => {
    useEffect(() => {
        let id = props.match.params.id;
        props.fetchPost(id);
        console.log(props);
    },[])
    const onSubmitForm = (values) => {
        props.editPost(values, props.post.id); // ==> And here update my post
    }
    return (
        <>
            <PostForm

                handleMe={onSubmitForm}
                initialValues={_.pick(props.post, "title", "description")}
                />
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    editPost,
    fetchPost
})(Com);
