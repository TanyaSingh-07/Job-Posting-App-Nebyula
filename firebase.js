import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCoKn-8ObXJ5EGgqUizahYQ3RmiCcLV3PY",
  authDomain: "job-posting-app-nbyula-master.firebaseapp.com",
  databaseURL: "https://job-posting-app-nbyula-master-default-rtdb.firebaseio.com",
  projectId: "job-posting-app-nbyula-master",
  storageBucket: "job-posting-app-nbyula-master.appspot.com",
  messagingSenderId: "317456476670",
  appId: "1:317456476670:web:a751ea09402976945638af",
  measurementId: "G-D599WHKTET"
};

  const firebase=app.initializeApp(firebaseConfig);
  const firestore=firebase.firestore();
  const auth=firebase.auth();

  export {firebase, firestore, app, auth}
