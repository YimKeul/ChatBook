import firebase from "firebase/compat/app";
import config from "../../firebase.json";
import "firebase/compat/auth";
import "firebase/compat/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const auth = firebase.auth();
const db = firebase.firestore();

// export const firebase_db = firebase.database()
export { auth, db };
