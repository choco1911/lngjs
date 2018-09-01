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

        // use bind if toggleOpen is regular function
        // this.toggleOpen = this.toggleOpen.bind(this)
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        const section = isOpen ? <section> {article.text} </section> : null
        return ( <div>
                    <h3> {article.title} </h3>
                    <button onClick = {this.toggleOpen}></button>
                    {section}
                </div>
        )
    }
/*
    toggleOpen() {
            this.setState({
                    isOpen: !this.state.isOpen
            })
    }
*/
// is arrow function using Lexical Scope to find this - variable?
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
