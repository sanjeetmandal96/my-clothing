import React, { Component } from 'react';
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils'
import GoogleLogin from 'react-google-login';
import {auth} from '../../firebase/firebase.utils';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''
        }
        
    }
    responseGoogle = (response) => {
        // console.log(this.props.currentUser)
        // auth.onAuthStateChanged(user=>{
        //     // console.log(user);
        //    this.setState({response})
        // })
        // console.log(response);
      }
    handleSubmit= async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '',password:''});
        } catch (error) {
            console.log(error);
        }
    }
    handleChange= event =>{
        const {value, name} =event.target;
        this.setState({[name]: value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>sign in with your email id and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name="email" 
                     type="email" 
                     label="email"
                     value={this.state.email}
                     handleChange={this.handleChange}
                     required 
                    />
                    <FormInput
                     name="password" 
                     type="password" 
                     label="password"
                     autoComplete="false"
                     value={this.state.password}
                     handleChange={this.handleChange} 
                     required
                    />
                    <div className='buttons'>
                    <CustomButton  type="submit">Sign In</CustomButton>
                    </div>
                    {/* <GoogleLogin
                        // clientId="32750910609-hfredaf0ovlkeq2dd9ckqs1o7ejff0fo.apps.googleusercontent.com"
                        render={renderProps => (
                        <button className="custom-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                        )}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /> */}
                </form>
               
                <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with google
                    </CustomButton>
            </div>
        );
    }
}

export default SignIn;