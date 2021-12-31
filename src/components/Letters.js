import Letter from './Letter.js';
import React, { Component } from 'react';


class Letters extends Component {
    render() {
       let letterStatus=this.props.letterStatus
        return (

            <div>
                <div>
                    Available letters
                </div>
                <span>
                {Object.keys(letterStatus).map((key) => (letterStatus[key]) ?<Letter className="selected" key={key} letter={key} />  : <Letter selectLetter={this.props.selectLetter} className="false" key={key} letter={key} />)}
                   
                </span>
            </div>
        );

    }
}

export default Letters

