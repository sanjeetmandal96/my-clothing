import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

const Header=({currentUser})=> {
    // console.log(currentUser);
    return (
        <div className="header">
            <Link className='logo-container' to="/">
                <Logo className='logo' />
            </Link>
        <div className='options'>
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?(
                <div className="option" onClick={()=>auth.signOut()}>
                    SIGN OUT
                </div>
                ) : (
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
                )
            }
        </div>
    </div>
    )
}


const mapStateToProps = state => {
    console.log(state)
    return{
    currentUser: state.user.currentUser
}}

export default connect(mapStateToProps)(Header);
