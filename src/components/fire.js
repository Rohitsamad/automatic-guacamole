import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBLnf_UXsBkzvu1Aiyi19ICT8OQqt9jq8Y",
  authDomain: "fir-beat-e64cf.firebaseapp.com",
  projectId: "fir-beat-e64cf",
  storageBucket: "fir-beat-e64cf.appspot.com",
  messagingSenderId: "805670270966",
  appId: "1:805670270966:web:c43cd2f0ae28d6c03039d7"
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;