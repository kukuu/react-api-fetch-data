import React from 'react';
import ReactDom from 'react-dom';

class ContentFeed extends React.Component{
  constructor(props) {
    super(props);
    
    this.state = {
      'items':[];
  }
  
  componentDidMount {
    this.getItems();
  }

  getItems(){
    fetch('url')
    .then(results => results.json())
    .then(results => this.setState({
      'items': results
    }))
  }
}

render(){
  return(
    <ul>
      {this.state.items.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <p>{item.desription }</p>
          </div>
        )
      })}
    </ul>
  }
}
