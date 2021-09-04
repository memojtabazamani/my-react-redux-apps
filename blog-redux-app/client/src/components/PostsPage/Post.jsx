import React from 'react'
import { connect } from 'react-redux'

export const Post = ({title, author, body }) => {
    return (
        <div class="card">
            <div class="content">
                <div class="header">
                    { title }
                </div>
                <div class="meta">
                    { author }
                </div>
                <div class="description">
                   { body }
                </div>
            </div>
            <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui basic green button">Approve</div>
                    <div class="ui basic red button">Decline</div>
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
