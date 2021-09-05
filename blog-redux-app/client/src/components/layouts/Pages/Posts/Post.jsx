import React from 'react'
import { connect } from 'react-redux'
import Button from "../../../Utilities/Button";
import { Link, Redirect } from 'react-router-dom';

// MY ACTIONS
import { deletePostRequest } from '../../../../actions';

export const Post = (props) => {
    const { post } = props;

    // FUNCTIONS
    const deletePost = () => {
        props.deletePostRequest(post.id);
    };
    const editPost = () => {
        return <Redirect to="/create" />;
    }
    const LinkEdit = (<Link style={{"color" : "white"}} to={`/edit/${post.id}`}>Edit</Link>)
    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    { post.title }
                </div>
                <div className="meta">
                    { post.author }
                </div>
                <div className="description">
                   { post.body }
                </div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <Button type="yellow" content={LinkEdit} handleClick={editPost} />
                    <Button type="red" content="Delete" icon='trash' handleClick={deletePost} />
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    posts: state.posts
});

const mapDispatchToProps = {
    deletePostRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Post)
