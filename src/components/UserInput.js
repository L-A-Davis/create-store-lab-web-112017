import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

 handleChange = (e) => {
   this.setState({
     [e.target.name]: e.target.value
   })
 }

 handleSubmit = (e) => {
   e.preventDefault();
   this.props.store.dispatch({
     type: 'ADD_USER',
     user: this.state
   });
   this.setState({
       username: '',
       hometown: ' '
   })
 }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name="username" value={this.state.username}
          onChange={this.handleChange}></input>
          <input type='text' name="hometown" value={this.state.hometown}
          onChange={this.handleChange}></input>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
