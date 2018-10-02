import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList.js'
//import toggleOpen from '../decorators/toggleOpen.js'


class Article extends Component {
    // simple version of propTypes
    /*
        static propTypes = {
                article: PropTypes.object.isRequired
        }
    */
    // more complex version
    static propTypes = {
           article: PropTypes.shape({
              id: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              text: PropTypes.string
           }).isRequired
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props
        return (
                <div ref={this.setContainerRef}>
                    <h3> {article.title} </h3>
                    <button onClick = {toggleOpen}>
                        {isOpen ? 'Close' : 'Open'}
                    </button>
                    {this.getSection()}
                </div>
        )
    }
    setContainerRef = ref => {
        this.container = ref
        console.log('---', ref)
    }
    // Method
    getSection() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
            <section>
                {article.text}
                <CommentsList comments={article.comments} />
            </section>
        )
    }

    // Method
    // is arrow function using Lexical Scope to find this - variable?
}

export default Article
