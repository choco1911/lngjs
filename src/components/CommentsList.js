import React, {Component} from 'react'
import Comment from './Comment.js'
import toggleOpen from '../decorators/toggleOpen.js'


class CommentsList extends Component {
    // default props, so if props is undefined we can set default value
    // so now we can do one check. if array is empty
    static defaultProps = {
            comments: []
    }

    render () {
        const buttonText = this.props.isOpen ? 'Hide comments' : 'Show comments'
        return (
            <div>
                <button onClick={this.props.toggleOpen}>{buttonText}</button>
                {this.showComment()}
            </div>
        )
    }

    showComment() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
            </ul>
        )

    }
}

export default toggleOpen(CommentsList)
