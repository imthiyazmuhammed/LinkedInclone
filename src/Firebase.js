import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBSREpYDruXZ7QnX80KFUbOzRVXAxwkf8Q',
	authDomain: 'linkedin-mi.firebaseapp.com',
	projectId: 'linkedin-mi',
	storageBucket: 'linkedin-mi.appspot.com',
	messagingSenderId: '389621679278',
	appId: '1:389621679278:web:f42499416cac0db54a593f',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
