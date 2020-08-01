import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
      
    };
  }

 handleSubmit = (event) =>{
  event.preventDefault()
  if(this.state.username && this.state.password){
    this.props.handleLogin(this.state)
  }
  
  
  
 }

 changeUser = (event) => {
   this.setState({
     username: event.target.value
   })
 }

 changePass = (event) => {
  this.setState({
    password: event.target.value
  })
}





  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.changeUser} value={this.state.username} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.changePass} value={this.state.password} name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
