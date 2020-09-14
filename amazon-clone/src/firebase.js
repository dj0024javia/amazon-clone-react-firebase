import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmFSrXGohMWY_EemN95DqQBkobFh6hYwQ",
    authDomain: "clone-18a46.firebaseapp.com",
    databaseURL: "https://clone-18a46.firebaseio.com",
    projectId: "clone-18a46",
    storageBucket: "clone-18a46.appspot.com",
    messagingSenderId: "791463185286",
    appId: "1:791463185286:web:0be637947673f153e03a07",
    measurementId: "G-XC09CVN05L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
