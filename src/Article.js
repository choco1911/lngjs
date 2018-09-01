import React, { Component } from 'react'

export default class Article extends Component {
    //  let's create state
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
        return <section> {article.text} </section>
    }

    // Method
    // is arrow function using Lexical Scope to find this - variable?
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
