import BlogForm from '../Forms/BlogForm';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import _ from 'lodash';

// CCOMPONENTS
import LoadingPost from '../Utilities/LoadingPost';

// MY ACTIONS
import {
    updatePostRequest,
    fetchPostRequest
} from '../../actions';

const Com = (props) => {
    // INIT 
    useEffect(() => {
        props.fetchPostRequest(props.match.params.id);
    }, [])
    const submitForm = (values) => {
        props.updatePostRequest(values,props.match.params.id );
        console.log(props.post);
    };
    if (props.post) {
        return (
            <BlogForm
                initialValues={_.pick(props.post, "title", "body")}
                handleMe={submitForm}
            />
        )
    } return (
        <>
            <LoadingPost />
        </>
    )

};

const mapStateToProps = (state, ownProps) => {
    return {
        post: Object.values(state.post)[0]
    }
};


const mapDispatchToProps = {
    fetchPostRequest,
    updatePostRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Com);