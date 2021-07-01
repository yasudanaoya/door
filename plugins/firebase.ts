import firebase from 'firebase'

// ** Firebaseプロジェクトの設定を記す
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY, // web api key
    authDomain: `${process.env.FIREBASE_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.FIREBASE_ID}.firebaseio.com`,
    projectId: `${process.env.FIREBASE_ID}`,
    storageBucket: `${process.env.FIREBASE_ID}.appspot.com`,
    messagingSenderId: '1234567890', // ** cloudmessagingを使う場合は設定
  })
}

export const firestore = firebase.firestore()
export const storage = firebase.storage()
export default firebase
