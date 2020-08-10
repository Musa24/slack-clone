import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA_TRjdULBZAprcgafxFAN7UMzovS846P4',
  authDomain: 'slack-clone-643f4.firebaseapp.com',
  databaseURL: 'https://slack-clone-643f4.firebaseio.com',
  projectId: 'slack-clone-643f4',
  storageBucket: 'slack-clone-643f4.appspot.com',
  messagingSenderId: '196589696899',
  appId: '1:196589696899:web:825d9e69633cb3fdb928b6',
  measurementId: 'G-MWM20L30TW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Create an instance of the Google provider object:
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
