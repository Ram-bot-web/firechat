import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    //Api keys
}

const db = firebase.initializeApp(config);

export default db