import React from 'react';
import './custom-button.style.scss'

const CustomButton = ({children,onClick,isGoogleSignIn, ...otherProps}) =>(
    <button onClick={onClick} className={`${isGoogleSignIn? 'google-sign-in': ''} custom-button`}>
        {children}
    </button>
)

export default CustomButton;