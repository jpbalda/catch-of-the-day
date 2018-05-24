import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAGS2P6fJp-FZSZWdpUDBiuWWruMejf-E0',
  authDomain: 'catch-of-the-day-jpba.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-jpba.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
