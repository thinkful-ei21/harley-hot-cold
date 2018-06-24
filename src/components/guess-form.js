import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onSubmit(event) {
        event.preventDefault();
        const text = this.textInput.value.trim();
        this.props.getGuess(text);
        this.textInput.value='';
    }

    render() {
        return (
            <form onSubmit={e=>this.onSubmit(e)}>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required 
                    ref={input=> this.textInput = input}/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }

};

