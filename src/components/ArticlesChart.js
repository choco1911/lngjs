import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ArticlesChart extends Component {
        static propTypes = {

        }

        componentDidMount() {
            //d3 works with this.refs.chart
        }
        compoenntWillReceiveProps(nextProps) {
                //update chart for new articles
        }

        render() {
            return (
                // old type -  ref assign to string
                <div ref = 'container'/>
            )
        }

        componentWillUnmount() {
            // do some cleanup
        }
}

export default ArticlesChart
