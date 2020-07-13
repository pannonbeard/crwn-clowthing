import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCr_H3tv24Zxgo5L7aD8OX7F2hchY4RLWg",
  authDomain: "crwn-db-d6e9c.firebaseapp.com",
  databaseURL: "https://crwn-db-d6e9c.firebaseio.com",
  projectId: "crwn-db-d6e9c",
  storageBucket: "crwn-db-d6e9c.appspot.com",
  messagingSenderId: "1095189103397",
  appId: "1:1095189103397:web:fa090e060abd4c142350cc",
  measurementId: "G-H4HVXTEVRZ"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase