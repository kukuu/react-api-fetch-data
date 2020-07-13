import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address1:"",
    address2:"",
    telephone:"",
    skills:"",
    languages:"",
    biography:"",
    password: ""
  };




  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      address1:"",
      address2:"",
      telephone:"",
      skills:"",
      languages:"",
      biography:"",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      address1:"",
      address2:"",
      telephone:"",
      skills:"",
      languages:"",
      biography:"",
      password: ""
    });
  };

  render() {
    return (
    <div>
      <h1>The POP Workforce</h1>
      <form>
        <input style={{width:200}}
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br /><br />
        <input style={{width:200}} 
          name="lastName" required="required"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br /><br />
        <input  style={{width:200}} 
          name="username" 
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
        />
        <br /><br />
        <input style={{width:200, marginBottom:10}} 
          name="email" required="required" 
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br /><br />
        <input style={{width:200}} 
          name="address1" required="required"
          placeholder="Address 1"
          value={this.state.address1}
          onChange={e => this.change(e)}
        />
        <br /><br />
        <input style={{width:200}} 
          name="address2" 
          placeholder="Address 2"
          value={this.state.address2}
          onChange={e => this.change(e)}
        />
           <br /><br />
        <input style={{width:200}} 
          name="telephone"  required="required"
          placeholder="Telephone"
          value={this.state.telephone}
          onChange={e => this.change(e)}
        />
          <br /><br />
        <input style={{width:200}} 
          name="skills" 
          placeholder="Skills" required="required" 
          value={this.state.skills}
          onChange={e => this.change(e)}
        />
        <br /><br />
        <input style={{width:200}} 
          name="languages" 
          placeholder="Languages"
          value={this.state.languages}
          onChange={e => this.change(e)}
        />
        <br /><br />
        <textarea style={{width:200}} 
          name="biography" 
          placeholder="Biography"
          value={this.state.biography}
          onChange={e => this.change(e)}
        /><br /><br />
        <input style={{width:200}} 
          name="password"
          type="password" required="required" 
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
        />
        <br /><br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
      </div>
    );
  }
}
