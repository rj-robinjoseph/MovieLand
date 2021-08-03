import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAzIuUhOsJzp23IbptpmFT2oS2K0L-_T2c",
    authDomain: "netflix-65bb7.firebaseapp.com",
    projectId: "netflix-65bb7",
    storageBucket: "netflix-65bb7.appspot.com",
    messagingSenderId: "783273287279",
    appId: "1:783273287279:web:53bbb768ff883576bc379a",
    measurementId: "G-0VD8SJ2D6R"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;