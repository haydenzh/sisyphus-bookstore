import React from 'react';

import FormInut from '../../components/form-input/form-input.component';

import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { auth,signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email:'',
      password:''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email,password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email,password);
      this.setState({
        email:'',
        password:''});
    } catch(error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const { value,name } = event.target;
    this.setState({ [name]:value });
  }

  handleClick = () => {
    signInWithGoogle();
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInut name="email" type="email" label="Email" value={this.state.email} handleChange={this.handleChange} required/>
          
          <FormInut name="password" type="password" label="Password" value={this.state.password} handleChange={this.handleChange} required />
          <div className="buttons">
            <CustomButton type="submit" onSubmit={this.handleSubmit}>SIGN IN</CustomButton>
            <CustomButton className="primary-btn" onClick={this.handleClick}>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;