import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {createPost, fetchPosts} from '../../actions';
import {Link} from 'react-router-dom';

const Com = (props) => {
    useEffect(() => {
        props.fetchPosts();
    }, []);
    const renderOptionButton = (post) => {
        return (
            <div className="extra content">
                <div className="ui two buttons">
                    <Link to={`/dashboard/posts/edit/${post.id}`} className="ui basic green button">ویرایش</Link>
                    <Link to={`/dashboard/posts/delete/${post.id}`} className="ui basic red button">حذف</Link>
                </div>
            </div>
        )
    };
    const renderList = () => {
        return props.posts.map(post => {
            if (post.userId === props.auth.hashId) {
                return (
                    <div className="card" key={post.id}>
                        <div className="content">
                            <div className="header">
                                {post.title}
                            </div>
                            <div className="description">
                                {post.description}
                            </div>
                        </div>
                        {renderOptionButton(post)}
                    </div>
                )
            }
        });
    };
    return (
        <>
            <div className="ui cards">
                {renderList()}
            </div>
            <div className="ui grid">
                <div className="sixteen wide column">
                    <Link to={`/dashboard/posts/create`} className="ui primary button">
                        <i className="pencil icon"></i>
                        اضافه کردن پست جدید
                    </Link>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts),
        auth: state.auth
    }
}

export default connect(mapStateToProps, {
    createPost,
    fetchPosts
})(Com);