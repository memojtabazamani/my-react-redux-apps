import React from 'react'
import { connect } from 'react-redux'
import Button from "../Utilities/Button";

export const Post = ({ post }) => {
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
                    <Button type="yellow" content="Edit" />
                    <Button type="red" content="Delete" icon='trash' />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
