import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import LoginPage from './pages/xyz/login-page.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component{

unsubscribeFromauth = null;

componentDidMount(){
  const {setCurrentUser} = this.props;
  this.unsubscribeFromauth = auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
            //  console.log(this.state);
        });
      }
      setCurrentUser({ userAuth});
  })
  
}

componentWillUnmount(){
  this.unsubscribeFromauth();
}
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
 
}

const mapsDispatchToProps = dispatch =>({
setCurrentUser : user => dispatch(setCurrentUser(user))
})



export default connect(null,mapsDispatchToProps)(App);
