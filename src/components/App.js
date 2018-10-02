import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList.js'
//import ArticlesChart form './ArticleChart'


class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <ArticleList articles = {this.props.articles} />
                { /* <ArticlesChart articles = {this.props.articles} /> */ }
            </div>
        )
    }
}

export default App
