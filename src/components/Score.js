
import React, { Component } from 'react';
import './score.css'

class Score extends Component {
    render() {
        const score = this.props.score
        let classname = ""
        if (score >= 80) {
            classname = "high-score"
        }
        else if (score > 50 && score < 80) {
            classname = "medium-score"
        }
        else {
            classname = "low-score"
        }
        return (<div className={classname}>{score}</div>)

    }
}

export default Score

