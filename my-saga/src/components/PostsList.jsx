/// CORE COMPONENTS
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Other Components
import { postsFetchRequested } from '../actions';
import Post from './Post';
import { FetchPosts } from './Loadings';
import DetailPost from './DetailPost';


const Com = (props) => {
    useEffect(() => {
        props.postsFetchRequested();
    }, [])

    // Render My Posts!
    const renderCards = () => {
        console.log(props.posts);
        return props.posts.map((post) => {
            return (
                <>
                    <Post post={post} key={post.id} />
                </>
            )
        })

    }
    if (props.isLoading) {
        return (
            <FetchPosts />
        )
    } else {
        return (
            <div style={{ "marginTop": "25px" }}>
                <div className="ui grid cards">
                    <DetailPost />
                </div>
                <div className="ui grid two cards" >
                    {renderCards()}
                </div>
            </div>

        )
    }
};

const mapStateToProps = (state) => ({
    posts: Object.values(state.posts),
    isLoading: state.isLoading
});
export default connect(
    mapStateToProps, {
    postsFetchRequested
},
)(Com);