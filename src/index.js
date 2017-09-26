import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Title= (props) => {
    return ( <h1>Welcome {props.name} !</h1> );
};

class Button extends React.Component {
    state = { count : 0 };

    // handleClick = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // };

    handleClick = () => {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }
        })
    };

    render() {
        return ( <button onClick={this.handleClick}>{this.state.count}</button> );
    }
}
  
ReactDOM.render(<Title name="John" />, root);
ReactDOM.render(<Button />, root);