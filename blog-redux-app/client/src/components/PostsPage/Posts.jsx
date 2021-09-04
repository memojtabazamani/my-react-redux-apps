import React, { useEffect } from 'react'
import { connect } from 'react-redux';

// MY COMPONENTS
import Message from '../../components/Utilities/Message';

// MY ACTIONS
import { fetchPostsRequest } from '../../actions/index';
import Post from './Post';

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
        } else if(props.posts) {
            return (
                <div className="ui cards">
                    {
                        props.posts.map((post) => {
                            <Post post={post} />
                        })
                    }
                </div>
            );
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
