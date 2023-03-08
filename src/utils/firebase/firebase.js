import { initializeApp } from 'firebase/app';

import {
    getAuth,
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyA8mpYVtLzKVUouijzV5BeOksLI7nLUepM',
    authDomain: 'reenbit-18403.firebaseapp.com',
    projectId: 'reenbit-18403',
    storageBucket: 'reenbit-18403.appspot.com',
    messagingSenderId: '435676545664',
    appId: '1:435676545664:web:38ffc2405fc55c531a9c65',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
