import React from 'react';

export default class FetchRandomUser extends Component {
    state = {
        loading: true,
        person: null
    }

    async componentDidMount(){

        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = response.json();//payload
        //this.setState({person:data.results[0], loading: false })
        this.setState({person:null, loading: false })//where API does not load
        //console.log(data.results[0]);
    }

    render(){

        //Adding conditions
        if(this.state.loading){
            return <div>Loading......</div>
        }

        if(!this.state.person){
            return <div>Didn't get a person!</div>
        }
        
        //No need for else statement. Return statement acts as implicit else
        //+ - = - , encapsulating all combinations from the state
        return ( 
            <div>
                { this.state.loading || !this.state.person ? (
                    <div>loading....</div>
                ) : (
                    <div>
                        <div>{ this.state.person.name.title }</div>
                        <div>{ this.state.person.name.first }</div>
                        <div>{ this.state.person.name.last }</div>
                        <img src={ this.state. person.picture.large } />
                    </div>
                )}
            </div>
        )
    }
}
