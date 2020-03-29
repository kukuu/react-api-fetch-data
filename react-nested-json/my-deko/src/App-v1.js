import React, {Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    }

  }
  componentDidMount() {
    //http://interview.dekopay.com.s3.eu-west-2.amazonaws.com/merchants/A1201.json
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json
      })
      
    })
  }
  
  render() {

    var { isLoaded, items } = this.state //deconstruct

    if(!isLoaded){
      return <div>Loading......</div>
    }
    else {
      return (
        <div className = "App">
          data  has been loaded
        </div>
      );
    }
  }
  
}

export default App;