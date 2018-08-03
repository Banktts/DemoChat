import firebase from 'firebase';


// Initialize Firebase
const config = {
    apiKey: "AIzaSyA954gxAHOWWUCuUfNttlclU3exED6XCDw",
    authDomain: "bcp-project-b373c.firebaseapp.com",
    databaseURL: "https://bcp-project-b373c.firebaseio.com",
    projectId: "bcp-project-b373c",
    storageBucket: "bcp-project-b373c.appspot.com",
    messagingSenderId: "306223092228"
};

firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();

