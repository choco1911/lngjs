import React, {Component} from 'react'
import Comment from './Comment.js'


export default class CommentsList extends Component {
    state = {
        isCOpen: false
    }

    render () {
        const buttonText = this.state.isCOpen ? 'Hide comments' : 'Show comments'
        return (
            <div>
                <button onClick={this.toggleShow}>{buttonText}</button>
                {this.showComment()}
            </div>
        )
    }

    showComment() {
        if (!this.state.isCOpen) return null

        const {comments} = this.props
        //if (typeof comments === 'undefined') {return null}
        if (!comments || !comments.length) return <p>No comments yet</p>
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)}
            </ul>
        )

    }

    toggleShow = () => {
        this.setState({
            isCOpen: !this.state.isCOpen
        })
    }

}