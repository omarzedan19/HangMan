import Line from './Line.js';
import Hint from './Hint.js';
import React, { Component } from 'react';
import Letter from './Letter.js';

class Solution extends Component {
    setLines() {
        let arr = []
        let num = 4
        let index = 0
        while (index < num) {

            arr[index] = <Line key={"line-" + index} />
            index++
        }
        return arr
    }

    render() {
        let count = 0;
        let letterStatus = this.props.letterStatus
        return (
            <div>
                {[...this.props.solution.word].map(l => (letterStatus[l]) ? <Letter key={l + count++} letter={l} /> : <Line key={l + count++} />)}
                <Hint hint={this.props.solution.hint} />
            </div>)
    }
}

export default Solution

