import React from 'react'
import Article from './Article'


export default function ArticleList({articles}) {
    const articleElements = articles.map(item => <li key={item.id}><Article article={item} /></li> )
    return (
        <ul>
            {articleElements}
        </ul>
    )
}
