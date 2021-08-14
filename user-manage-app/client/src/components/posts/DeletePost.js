import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
import {deletePost, fetchPost} from '../../actions';
import Modal from '../utilities/Modal';

import history from '../utilities/history'; // ==> Use History For Redirect!

const Com =  (props) => {
    useEffect(() => {
        props.fetchPost(props.match.params.id);
    }, []);
    const deletePostEvent = () => {
        props.deletePost(props.match.params.id);
        history.push({ // Use This Method For Show Message When Redirect!!
            pathname: '/dashboard',
            state: {
                message: "پست شما از وبلاگ حذف شد",
                type: "warning"
            }
        });
    }

    const actions = (
        <div className="actions">
            <div className="ui red button" onClick={(e) => deletePostEvent() }>حذف</div>
            <div className="ui cancel button" onClick={(e) => history.push("/dashboard") }>بستن</div>
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
            onDismiss={(e) => history.push("/dashboard")}
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
