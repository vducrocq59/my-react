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

const Button = () => {
    return (
        <div className="col-2">
            <button> = </button>
        </div>
    )
}

const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectedNumbers.map((number, i) => 
                <span key={i}>{number}</span>
            )}
        </div>
    )
}

const Numbers = (props) => {
    let getNumberClassName = (number) => {
        if(props.selectedNumbers.indexOf(number) >= 0) {
            return 'selected';
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
Numbers.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class Game extends React.Component {
    state = {
        selectedNumbers: [],
        starsCount: 1 + Math.floor(Math.random()*9)
    };

    selectNumber = (selectedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(selectedNumber)
        }))
    }

    render() {
        return(
            <div className="container">
                <h1>My Game</h1>
                <hr />
                <div className="row">
                    <Stars starsCount={this.state.starsCount} />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers} />
                    <hr />
                    <Numbers selectedNumbers={this.state.selectedNumbers} onClickNumbers={this.selectNumber} />
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