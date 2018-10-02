import React, {Component} from 'react'
import Article from './Article'


export default class ArticleList extends Component {
    state = {
        openArticleId: null,
        switchCommiter: false
    }

    render() {
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === this.state.openArticleId && this.state.switchCommiter}
                toggleOpen = {this.toggleOpenArticle(article.id)}
            />
        </li> )

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = (openArticleId) => ev => {
        this.setState({ openArticleId,
            switchCommiter: openArticleId !== this.state.openArticleId ? true : !this.state.switchCommiter
         })
    }
}
