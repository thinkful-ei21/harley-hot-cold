import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            clicked: '',
            feedback: 'Make your guess!',
            count: 0,
            guessList: [],
            answer: this.getRandomIntInclusive(0,100)
        }
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    generateAnswer(){
        const answer = this.getRandomIntInclusive(1,100);
        this.setState({
            answer
        });
    }

    setClicked(clicked){
        if(clicked === 'new'){
            this.resetState();
        } else {
            this.setState({clicked});
        }
        console.log(clicked);
    }

    resetState() {
        this.setState({
            clicked: '',
            feedback: 'Make your guess!',
            count: 0,
            guessList: [],
            answer: this.getRandomIntInclusive(0,100)
        });
    }

    updateState(guess) {
        let feedback;
        const distance = Math.abs(guess - this.state.answer);
        if (distance === 0) {
            feedback = 'You win!'
        } else if (distance < 25) {
            feedback = 'hot';
        } else {
            feedback = 'cold';
        }
        this.setState({
            ...this.state, 
            guessList:[...this.state.guessList, guess],
            feedback,
            count:this.state.count + 1
        })
    }

    addGuess(guess){
        const numGuess = parseInt(guess);
        console.log(numGuess);
        if (numGuess >= 1 && numGuess <= 100) {
            this.updateState(numGuess);
        }
    }

    render() {

        console.log(this.state);
        
        return (
            <div>
                <Header clicked={value => this.setClicked(value)} show={this.state.clicked === 'what' ? true : false}/>
                <GuessSection feedback={this.state.feedback} getGuess={value=>this.addGuess(value)}/>
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guessList} />
            </div>
        );
    }

}

