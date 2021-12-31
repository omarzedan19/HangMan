import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters.js';
import Solution from './components/Solution.js';
import Score from './components/Score.js';
import EndGame from './components/EndGame'

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: true,
        F: false,
        G: false,
        H: false,
        I: false,
        J: false,
        K: false,
        L: false,
        M: false,
        N: false,
        O: false,
        P: false,
        Q: false,
        R: false,
        S: true,
        T: false,
        U: false,
        V: false,
        W: false,
        X: false,
        Y: true,
        Z: false
      },
      solution: { word: "BYTES", hint: "Your ideal mood when coding" },
      score: 100
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  getScore(exist) {
    let score = this.state.score
    if (exist) {
      if (score <= 95)
        this.setState({ score: score += 5 })
    }
    else{
      this.setState({ score: score -= 20 })
    }
  }

  checkAnswer = (letter) => {
    let word = [...this.state.solution.word]
    let exist = word.find(char => char === letter)
    this.getScore(exist)
  }

  selectLetter = (letter) => {
    let obj = { ...this.state.letterStatus }
    obj[letter] = true
    this.setState({ letterStatus: obj })
    this.checkAnswer(letter)
  }

  render() {
let letterStatus=this.state.letterStatus
    return (
      <div className="App" >
        <Score score={this.state.score} />
        <Solution solution={this.state.solution} letterStatus={letterStatus} />
        <Letters selectLetter={this.selectLetter} letterStatus={letterStatus} />
        <EndGame solution={this.state.solution.word} letterStatus={letterStatus} score={this.state.score}/>
      </div>
    );
  }
}

export default App;