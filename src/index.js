import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Stars = (props) => {
    const starsCount = props.starsCount;
    
    let stars = [];
    for(let starIdx=0 ; starIdx<starsCount ; starIdx++) {
        stars.push(<i key={starIdx} className='fa fa-star'>X</i>);
    }

    return (
        <div className="col-5">
            { stars }
        </div> 
    )
}

const Button = (props) => {
    let button;
    let setButton = () => {
        switch(props.isAnswerCorrect) {
            case true :
                button = <button onClick={() => props.onClick()}> V </button>
                break;
            case false:
                button = <button onClick={() => props.onClick()}> X </button>
                break;
            default:
                button = <button disabled={!props.isAnyNumberSelected} onClick={() => props.onClick()}> = </button>
                break;
        }
    }

    setButton();
    return (
        <div className="col-2">
            {button}
        </div>
    )
}

const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectedNumbers.map((number, i) =>  
                <span key={i} onClick={() => props.onClickNumbers(number)}>{number}</span>
            )}
        </div>
    )
}

const Numbers = (props) => {
    let getNumberClassName = (number) => {
        if(props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
        } else {
            if(props.usedNumbers.indexOf(number) >= 0) {
                return 'used';
            }
        }
    }

    let onClickNumberFunction = (number) => {
        if(props.selectedNumbers.indexOf(number) < 0) {
             props.onClickNumbers(number);
        }
    }

    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) => 
                    <span key={i} className={getNumberClassName(number)} onClick={() => onClickNumberFunction(number)}>{number}</span>
                )}
            </div>
        </div>
    )
}
Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class Game extends React.Component {
    getRandomStarsCount = () => {
        return 1 + Math.floor(Math.random()*9);
    };

    state = {
        selectedNumbers: [],
        usedNumbers: [],
        starsCount: this.getRandomStarsCount(),
        isAnswerCorrect: null
    };


    selectNumber = (selectedNumber) => {
        if(this.state.isAnswerCorrect === true) {
            return;
        }

        this.setState(prevState => ({
            isAnswerCorrect: null
        }));
        if(this.state.selectedNumbers.indexOf(selectedNumber)<0 && this.state.usedNumbers.indexOf(selectedNumber)<0) {
            this.setState(prevState => ({
                selectedNumbers: prevState.selectedNumbers.concat(selectedNumber)
            }));
        }
    };

    removeNumber = (removedNumber) => {
        if(this.state.isAnswerCorrect === true) {
            return;
        }

        this.setState(prevState => ({
            isAnswerCorrect: null,
            selectedNumbers: prevState.selectedNumbers.filter(number => number !== removedNumber)
        }));
    }; 

    checkAnswer = () => {
        if(this.state.isAnswerCorrect !== true) {
            let sumSelectedNumbers = 0;
            for(let idx=0 ; idx<this.state.selectedNumbers.length ; idx++) {
                sumSelectedNumbers += this.state.selectedNumbers[idx];
            }
            let isAnswerCorrectPrivate = this.state.starsCount === sumSelectedNumbers;
    
            this.setState(prevState => ({
                isAnswerCorrect: isAnswerCorrectPrivate
            }));
        } else {
            this.setState(prevState => ({
                isAnswerCorrect: null,
                usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
                selectedNumbers: [],
                starsCount: this.getRandomStarsCount()
            }));

            if(this.state.usedNumbers.length === Numbers.list.length) {
                alert("YOU WIN !!!!!!");
            }
        }
    };

    render() { 
        return(
            <div className="container">
                <h1>My Game</h1>
                <hr />
                <div className="row">
                    <Stars starsCount={this.state.starsCount} />
                    <Button isAnyNumberSelected={this.state.selectedNumbers.length > 0} onClick={this.checkAnswer} isAnswerCorrect={this.state.isAnswerCorrect} />
                    <Answer selectedNumbers={this.state.selectedNumbers} onClickNumbers={this.removeNumber} />
                    <hr />
                    <Numbers usedNumbers={this.state.usedNumbers} selectedNumbers={this.state.selectedNumbers} onClickNumbers={this.selectNumber} />
                </div>
            </div>
        )
    }
}
  
class App extends React.Component {
    render() {
        return(
            <div>
                <Game />
            </div>
        )
    }  
};

ReactDOM.render(<App />, root);