import React, {Component} from 'react'
import Comment from './Comment.js'


export default class CommentsList extends Component {
    state = {
        isCOpen: false
    }

    render () {
        return (
            <div>
                <button onClick={this.toggleShow}>
                {this.state.isCOpen ? 'Hide comments' : 'Show comments'}
                </button>
                {this.showComment()}
            </div>
        )
    }

    showComment() {
        if (!this.state.isCOpen) {return null}
        const {comments} = this.props
        if (typeof comments === 'undefined') {return null}
        const commentElements = comments.map(item => <li key={item.id}><Comment comment={item} /></li> )
        return (
            <ul>
                {commentElements}
            </ul>
        )

    }

    toggleShow = () => {
        this.setState({
            isCOpen: !this.state.isCOpen
        })
    }

}
