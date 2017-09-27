import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Title= (props) => {
    return ( <h1>=> {props.name}</h1> );
};

class ButtonAlone extends React.Component {
    state = { myCounter: 0 };
    
    // // SANS ETAT PRECEDENT
    // handleClick = () => {
    //     this.setState({ myCounter: this.state.myCounter+1 })
    // }

    // AVEC ETAT PRECEDENT
    handleClick = () => {
        this.setState((previousState) => {
            return { myCounter: previousState.myCounter+1 };
        })
    }

    render() {
        return(<button onClick={ this.handleClick } >Bouton non réutilisable => { this.state.myCounter }</button>)
    }
}

class Button extends React.Component {
    render() {
        return ( <button onClick={ () => this.props.onClickFunction(this.props.incrementBy)}>+ {this.props.incrementBy}</button> );
    }
}

const Result = (props) => {
    return (
        <div>Mon résultat => {props.result}</div>
    );
};

class App extends React.Component {
    state = { count : 0 };
    
    incrementCount = (incrementBy) => {
        this.setState((previousState) => ({
                count: previousState.count + incrementBy
            }));
        };

    render() {
        return (
            <div>
                <Title name="Bouton non réutilisable" />
                <ButtonAlone />

                <Title name="Bouton réutilisable" />
                <Button incrementBy={1} onClickFunction={this.incrementCount}  />
                <Button incrementBy={5} onClickFunction={this.incrementCount}  />
                <Button incrementBy={10} onClickFunction={this.incrementCount}  />
                <Button incrementBy={100} onClickFunction={this.incrementCount}  />
                <Result result={this.state.count} />
            </div>
        );
    };
}
  
// Test 1 => élément statique
// ReactDOM.render(<Title name="John" />, root);

// Test 2 => Bouton avec changement de statut
// ReactDOM.render(<Button />, root);

// Test 3 => Composant réutilisable
ReactDOM.render(<App />, root);
