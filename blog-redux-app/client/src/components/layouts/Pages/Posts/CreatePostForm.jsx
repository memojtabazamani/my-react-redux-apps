import BlogForm from '../../../Forms/BlogForm';
import { connect } from 'react-redux';

// MY ACTIONS
import {createPostRequest, fetchPostsRequest} from '../../../../actions';

const Com = (props) => {
    const submitForm = (values) => {
        props.createPostRequest(values);
    };
    return (
        <BlogForm
            handleMe={submitForm}
        />
    )
};

const mapStateToProps = (state) => {
    return {  }
};


const mapDispatchToProps = {
    createPostRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Com);