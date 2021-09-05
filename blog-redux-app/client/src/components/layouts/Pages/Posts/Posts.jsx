import React, { useEffect } from 'react'
import { connect } from 'react-redux';

// MY COMPONENTS
import Message from '../../../Utilities/LoadingPost';
import LoadingPost from '../../../Utilities/LoadingPost';
// MY ACTIONS
import { fetchPostsRequest } from '../../../../actions';
import Post from './Post';

export const Posts = (props) => {
    useEffect(() => {
        props.fetchPostsRequest();
    }, []);

    
    
    const renderPsots = () => {
        if (props.errorPosts) {
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
        } else if (props.posts.length > 0) { // Check Must Be Have Data
            return (
                <div className="ui cards">
                    {
                        props.posts.map((post) => {
                            return (<Post post={post} />)
                        })
                    }
                </div>
            );
        }
        return ( // Show Loading If not have data!
            <>
                <LoadingPost />
            </>
        )
    };

    return (
        <div>
            {renderPsots()}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts),
        errorPosts: state.errorFetchPosts,
        message: state.message
    }
};

const mapDispatchToProps = {
    fetchPostsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
