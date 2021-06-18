import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBH_S5pmRwDG_giRy6ZFf24j1aFlU8yJcM",
    authDomain: "sugarme-64b1a.firebaseapp.com",
    projectId: "sugarme-64b1a",
    storageBucket: "sugarme-64b1a.appspot.com",
    messagingSenderId: "355948042438",
    appId: "1:355948042438:web:84d92938aeff16c02f1fc7",
    measurementId: "G-LEPSM6JVKE"
  };

  export const createUserProfileDocument=async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt=new Date();

        try{
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        }
        catch(error) {
            console.log('error in creating the user', error.message)
        }
    }

    return userRef;
     
  }


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
