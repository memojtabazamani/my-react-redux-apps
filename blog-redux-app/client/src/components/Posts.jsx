import React, { useEffect } from 'react'
import { connect } from 'react-redux';

// MY COMPONENTS
import Message from '../components/Utilities/Message';

// MY ACTIONS
import { fetchPostsRequest } from '../actions/index';

export const Posts = (props) => {
    useEffect(() => {
        props.fetchPostsRequest();
    }, []);

    const renderPsots = () => {
        if(props.errorPosts) {
            return (
                <>
                    <Message 
                    icon="warning" 
                    header="Error"
                    content={props.errorPosts}
                    type="red"
                    />
                </>
            )
        }
    }

    return (
        <div>
            {renderPsots()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.psots,
    errorPosts: state.errorFetchPosts
})

const mapDispatchToProps = {
    fetchPostsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
