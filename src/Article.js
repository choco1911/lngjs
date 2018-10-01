import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList.js'


export default class Article extends Component {
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

    constructor(props) {
        // constructor of parent class
        super(props) // what for to pass props into super ?
        // initial state of component
        this.state = {
            isOpen: false
        }

    }
    // Method
    render() {
        const {article} = this.props
        const {isOpen} = this.state
        return ( <div>
                    <h3> {article.title} </h3>
                    <button onClick = {this.toggleOpen}>
                        {isOpen ? 'Close' : 'Open'}
                    </button>
                    {this.getSection()}
                </div>
        )
    }
    // Method
    getSection() {
        if (!this.state.isOpen) {return null}
        const {article} = this.props
        return (<section>
                    {article.text}
                    <CommentsList comments={article.comments} />
                 </section>
             )
    }

    // Method
    // is arrow function using Lexical Scope to find this - variable?
    toggleOpen = (ev) => {
/* it didn't properly work in react (google why?!)
        ev.preventDefault()
        ev.stopPropagation()
*/
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
