import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDP_DzZZXypvZshmy-bdZihKLrHvzzj8MY",
    authDomain: "netflix-clone-app-e7585.firebaseapp.com",
    projectId: "netflix-clone-app-e7585",
    storageBucket: "netflix-clone-app-e7585.appspot.com",
    messagingSenderId: "167555516433",
    appId: "1:167555516433:web:dbe0202c2e1627a41c09b0"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { auth };
  export default db;