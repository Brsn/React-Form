import React from 'react';

export default class Form extends React.Component {
    state = {
            firstname: '',
            lastName: '',
            userName: '',
            email: '',
            phone: '',
            age: '',
            password: '',
            passwordRepeat: ''

  };

  change = e => {
 
    //puts it here
    this.setState({
      //grabs the name value
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    //console.log(this.state);
    this.setState({
        firstname: '',
        lastName: '',
        userName: '',
        email: '',
        phone: '',
        age: '',
        password: '',
        passwordRepeat: ''
     })
  };

 render() {
 return(
     <form>
         <input name="firstName" placeholder='First name' value={this.state.firstName} 
         onChange={e => this.change(e)}
         />
         <br />
         <input name="lastName" placeholder='Last Name' value={this.state.lastName} 
         onChange={e => this.change(e)}
         />
         <br />
         <input name="userName" placeholder='User Name' value={this.state.userName} 
         onChange={e => this.change(e)}
         />
         <br />
         <input name="email" placeholder='Email' value={this.state.email} 
         onChange={e => this.change(e)}
         />
         <br />
         <input name="phone" placeholder='Phone' value={this.state.phone} 
         onChange={e => this.change(e)}
         />
         <br />
         <input name="age" placeholder='Age' value={this.state.age} 
         onChange={e => this.change(e)}
         />
         <br />
         <input name="password" type='password' placeholder='password' value={this.state.password} 
         onChange={e => this.change(e)}
         />
         <br />
         <input name="passwordRepeat" type='password' placeholder='passwordRepeat' value={this.state.passwordRepeat} 
         onChange={e => this.change(e)}
         />
         <br />
         <button onClick={e => this.onSubmit(e)}>Submit</button>
     </form>
     );
  }
}
