import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: `${process.env.FIREBASE_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.FIREBASE_ID}.firebaseio.com`,
    projectId: `${process.env.FIREBASE_ID}`,
    storageBucket: `${process.env.FIREBASE_ID}.appspot.com`,
  })
}

export const firestore = firebase.firestore()
export const storage = firebase.storage()
export default firebase
