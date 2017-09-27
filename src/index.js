import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img width="75" alt=":'(" src={props.avatarUrl} />
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}} className="info">{props.name}</div>
                <div style={{fontSize: '1em'}} className="info">{props.company}</div>
            </div>
        </div>
    ) ;
}

const CardList = (props) => {
    return (
        <div>
            { props.guys.map(guy => <Card {...guy} />) }
        </div>
    );
}
  
class Form extends React.Component {
    state = { username : '' }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`search for '${this.state.username}'`);
        axios.get(`https://api.github.com/users/${this.state.username}`).then(response => {
            console.log(`response for '${this.state.username}' is =>`);
            console.log(response);
            let data = response.data;
            this.props.onSubmit({
                key: data.id,
                name: data.name,
                company: data.company,
                avatarUrl: data.avatar_url
            });

            this.setState({username: ""});
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} placeholder="Github Username" required></input>
                <button type="submit">Add</button>
            </form>
        );
    }
}

class App extends React.Component {
    state = {
        cards: []
    };

    addCard = (card) => {
        console.log("Add this card =>");
        console.log(card);
        this.setState(prevState => ({
            cards: prevState.cards.concat(card)
        }));
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addCard} />
                <CardList guys={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />, root);