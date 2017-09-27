import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

let data = [
    { 
        name:"Paul O’Shannessy", 
        company:"facebook", 
        avatarUrl:"https://avatars1.githubusercontent.com/u/8445?v=4" 
    },
    { 
        name:"Paul O’Shannessy", 
        company:"facebook", 
        avatarUrl:"https://avatars1.githubusercontent.com/u/8445?v=4" 
    }
];

const CardList = (props) => {
    return (
        <div>
            { props.guys.map(guy => <Card {...guy} />) }
        </div>
    );
}
  
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <CardList />
//             </div>
//         );
//     }
// }

ReactDOM.render(<CardList guys={data} />, root);