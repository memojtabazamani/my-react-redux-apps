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
        props.fetchPost(id); // ==> Retrive This Post from server for show details!
    },[])
    // Handle Form Submit
    const onSubmitForm = (values) => {
        props.editPost(values, props.post.id); // ==> And here update my post
    }
    // Make Custom Submit Button
    const submitButton = <button className="ui orange button" type="submit">ویرایش و انتشار مجدد</button>
    return (
        <>
            <PostForm
                handleMe={onSubmitForm}
                submitButton={submitButton}
                initialValues={_.pick(props.post, "title", "description")}
            />
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.id] // ==> Get Own Of this post!
    }
}

export default connect(mapStateToProps, {
    editPost,
    fetchPost
})(Com);
