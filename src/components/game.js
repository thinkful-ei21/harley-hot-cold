import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            clicked: ''
        }
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
        console.log('state will be reset');
    }

    render() {
        
        return (
            <div>
                <Header clicked={value => this.setClicked(value)} show={this.state.clicked === 'what' ? true : false}/>
                <GuessSection feedback="Make your guess!" />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }

}

