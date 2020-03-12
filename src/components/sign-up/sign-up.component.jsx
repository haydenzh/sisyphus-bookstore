import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      displayName:'',
      email:'',
      password:'',
      confirmPassword:''
    };
  }

  handleChange = event => {
    const { name,value } = event.target;
    this.setState({[name]:value});
  }


  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password,confirmPassword } = this.state;

    if(password !== confirmPassword){
      alert("Password don't match");
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email,password);
      this.setState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
      });

    } catch(error){
      console.error(error);
    }
  }

  render() {
    const { displayName,email,password,confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput 
            type="text" 
            name="displayName" 
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput 
            type="text" 
            name="email" 
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput 
            type="password" 
            name="password" 
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput 
            type="password" 
            name="confirmPassword" 
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;