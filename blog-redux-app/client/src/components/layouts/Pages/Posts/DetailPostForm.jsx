import React, { useEffect } from 'react'
import { connect } from 'react-redux'

// MY ACTIONS
import {
    fetchPostRequest
} from '../../../../actions';
import LoadingDetail from '../../../Utilities/LoadingDetail';

export const DetailPostForm = (props) => {
    const { post } = props;
    useEffect(() => {
        props.fetchPostRequest(props.match.params.id);
        console.log(post);
    }, []);
    if (post) {
        return (
            <div className="ui grid cards">
                <div class="card column wide">
                    <div class="content">
                        <div class="header">
                            {post.title}
                        </div>
                        <div class="meta">
                            {post.author}
                        </div>
                        <div class="description">
                            {post.body}
                        </div>
                    </div>
                </div>
            </div>
        )
    } return (
        <>
            <LoadingDetail />
        </>
    )

}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post[ownProps.match.params.id]// Return State
    }
};


const mapDispatchToProps = {
    fetchPostRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPostForm)
