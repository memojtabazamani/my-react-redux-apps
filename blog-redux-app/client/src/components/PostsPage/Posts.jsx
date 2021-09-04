import React, {useEffect} from 'react'
import {connect} from 'react-redux';

// MY COMPONENTS
import Message from '../../components/Utilities/Message';
import LoadingPost from '../../components/Utilities/LoadingPost';
// MY ACTIONS
import {fetchPostsRequest} from '../../actions/index';
import Post from './Post';

export const Posts = (props) => {
    useEffect(() => {
        props.fetchPostsRequest();
    }, []);

    const renderDeleteMessagePost = () => {
        if(props.deleteState.status === "success") {
            return (
                <>
                    <Message content="Your Post Has Ben Delete" icon='info' type='blue'/>
                </>
            )
        } else if(props.deleteState.status === "error") {
            return (
                <>
                    <Message content={props.deleteState.message} icon='warning' type='red'/>
                </>
            )
        } return (<></>)
    };
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
                            return (<Post post={post}/>)
                        })
                    }
                    {renderDeleteMessagePost()}
                </div>
            );
        }
        return ( // Show Loading If not have data!
            <>
                <LoadingPost/>
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
        deleteState: state.deletePostState
    }
};

const mapDispatchToProps = {
    fetchPostsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
