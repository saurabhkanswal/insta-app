import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDRtCGcFCd42AcIWQQiEg7JbwvaJcN7xTA",
    authDomain: "instaclone-b21d9.firebaseapp.com",
    projectId: "instaclone-b21d9",
    storageBucket: "instaclone-b21d9.appspot.com",
    messagingSenderId: "871213908600",
    appId: "1:871213908600:web:632e04438be2ba3dcda38d"
  };
  //const firebaseApp =  
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;