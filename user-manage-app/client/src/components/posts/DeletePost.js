import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {deletePost, fetchPost} from '../../actions';

import Modal from '../utilities/Modal';

const Com =  (props) => {
    useEffect(() => {
        props.fetchPost(props.match.params.id);
    }, []);
    const deletePostEvent = () => {
        props.deletePost(props.match.params.id);
    }

    const actions = (
        <div className="actions">
            <div className="ui red button" onClick={(e) => deletePostEvent() }>حذف</div>
            <div className="ui cancel button">بستن</div>
        </div>
    )


    const renderContent = () => {
        if(!props.post) {
            return "آیا شما برای حذف این پست مطمئن هستید؟";
        } else {
            return `آیا شما برای حذف این پست مطمئن هستید؟ [${props.post.title}] `;
        }
    }

    return (
        <>
        <Modal
            title="حذف پست"
            content={renderContent()}
            actions={actions}
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
    deletePost,
    fetchPost
})(Com);
