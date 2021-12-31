import React, { Component } from 'react'

class EndGame extends Component {

    render() {
        let mess = ""
        let classname = ""
        let letterStatus = this.props.letterStatus
        let solution = [...this.props.solution]
        let score = this.props.score
        let result = solution.map(char => { return letterStatus[char] === true })
        let end = result.every(e => e === true)
        if (end) {
            mess = "Congratulations"
            classname = "high-score"
        }
        else {
            if (score <= 0)
                mess = "GAME OVER"
            classname = "low-score"
        }
        return (
            <div className={classname}>{mess}</div>
        )
    }
}

export default EndGame