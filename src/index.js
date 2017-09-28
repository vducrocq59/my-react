import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Stars = () => {
    const starsCount = 1 + Math.floor(Math.random()*9);
    
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

const Answer = () => {
    return (
        <div className="col-5">..ANSWER..</div>
    )
}

const Numbers = () => {
    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) => 
                    <span key={i}>{number}</span>
                )}
            </div>
        </div>
    )
}
Numbers.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class Game extends React.Component {
    render() {
        return(
            <div className="container">
                <h1>My Game</h1>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer />
                    <Numbers />
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