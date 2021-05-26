import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCRa5j-gQBWYm9pYsrDISmaAtPDiCcUBc0",
  authDomain: "beatme-6f7ae.firebaseapp.com",
  projectId: "beatme-6f7ae",
  storageBucket: "beatme-6f7ae.appspot.com",
  messagingSenderId: "23599605852",
  appId: "1:23599605852:web:9b9a596b78761cfcb95e99",
  measurementId: "G-0GK2GWZ4WZ"
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;