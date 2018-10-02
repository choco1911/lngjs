import React, {Component} from 'react'
import Article from './Article'


export default class ArticleList extends Component {
    state = {
        openArticleId: null,
        switchCommiter: false
    }
                // isOpen = {article.id === this.state.openArticleId && this.state.stArt}

    render() {
        const articleElements = this.props.articles.map(article => <li key={article.id}>
             {console.log('expr ---in render--- ', article.id === this.state.openArticleId )}
             {console.log('switcher ---in render--- ',  this.state.switchCommiter) }
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
        console.log('expr ---in function--- ', openArticleId === this.state.openArticleId )
        console.log('switcher ---in function--- ',  this.state.switchCommiter)

        /*
        if (openArticleId !== this.state.openArticleId) {
            this.setState({switchCommiter: true})
        } else {
            this.setState({switchCommiter: !this.state.switchCommiter})
        }
        */

        this.setState({ openArticleId,
            //switchCommiter: (openArticleId !== this.state.openArticleId ? true : !this.state.switchCommiter)
            switchCommiter: openArticleId !== this.state.openArticleId ? true : !this.state.switchCommiter
         })
    }
}
