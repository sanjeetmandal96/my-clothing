import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA7oOavobfI110tA8R12INEKEsAaAmdwfk",
    authDomain: "learningauthentication-46b7a.firebaseapp.com",
    projectId: "learningauthentication-46b7a",
    storageBucket: "learningauthentication-46b7a.appspot.com",
    messagingSenderId: "789761568919",
    appId: "1:789761568919:web:147aa0dfd5726779f5f9d2",
    measurementId: "G-P39132T7L5"
};

export const createUserProfileDocument =  async (userAuth, aditionalData) =>{
    if(!userAuth) return;
// console.log(firestore.doc('user/dye762652'));
const userRef =  firestore.doc(`users/${userAuth.uid}`);
const snapShot =  await userRef.get();
if(!snapShot.exists){
    const {displayName, email} =  userAuth;
    const createdAt = new Date();
    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...aditionalData
        })
    } catch (error) {
        console.log('error created user', error.message)
    }
}
return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {auth.signInWithPopup(provider);}

export default firebase;