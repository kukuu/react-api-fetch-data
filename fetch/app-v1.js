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
        this.setState({person:data.results[0], loading: false })
        //console.log(data.results[0]);
    }

    render(){
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