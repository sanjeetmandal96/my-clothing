import {React, useState} from 'react';
import './login-page.style.scss'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/fontawesome-svg-core'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faKey} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
function  LoginPage (){
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [remember, setRemember]= useState(false);
    const [error, setError]=useState(false)
    const [errorMsg, setErrorMsg]= useState('');
   const handleSubmit=()=> { console.log("kuch bhi");
       if(username==="sanjeet" && password==="qwerty123")
            console.log("login sucessfull");
          else{
               setError({prevError: true})
               setErrorMsg({prevErrorMsg: "username or password is incorrect"})
          }
   };
    return (
        <div className="login_page">
        <div className="container">
	<div className="d-flex justify-content-center h-100" style={{
        height:'100vh',
        alignItems: 'center',
        
    }} >
		<div className="card">
			<div className="card-header">
				<h3 style={{opacity:1}}>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                    <span><FontAwesomeIcon icon={faGoogle} /></span>
                    <span><FontAwesomeIcon icon={faTwitter} /></span>
				</div>
			</div>

			<div className="card-body">
               {error && <alert variant="danger">{errorMsg}</alert>}
				<form>
					<div className="input-group form-group ">
						<div className="input-group-prepend">
							<span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
						</div>
						<input
                         type="text"
                         className="form-control" 
                         placeholder="username" 
                         value={username}
                         onChange={e=> setUsername(e.target.value)}
                         />
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
						</div>
						<input
                         type="password" 
                         className="form-control" 
                         placeholder="password" 
                         value={password}
                         onChange={e=>setPassword(e.target.value)}
                         />
					</div>
					<div className="row align-items-center remember" style={{opacity:1}}>
                        <input
                         type="checkbox"
                         value={remember}
                         onChange={()=>setRemember(remember=>!remember)}
                         />Remember me
					</div>
					<div className="form-group login_button">
						<input
                         type="submit" 
                         value="Login" 
                         className="btn float-right login_btn" 
                         onClick={handleSubmit}
                         />
					</div>
				</form>
			</div>
			<div className="card-footer" >
				<div className="d-flex justify-content-center links" >
					Don't have an account?<NavLink className="footer_content" to="#">Sign Up</NavLink>
				</div>
				<div className="d-flex justify-content-center">
                    <NavLink className="footer_content" to="#">Forgot your password?</NavLink>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    );
}

export default LoginPage;