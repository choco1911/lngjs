import React from 'react'
import { render } from 'react-dom'
import Article from './Article'
import {articles} from './fixtures'

// any expression on js include to {}
// except string

/*
const article = articles[0]
render( <Article article = {article} /> , document.getElementById('container'))
*/
// render( <Article article = {articles[0]} foo = 'bar' /> , document.getElementById('container'))

render( <Article article = {articles[0]} /> , document.getElementById('container'))
