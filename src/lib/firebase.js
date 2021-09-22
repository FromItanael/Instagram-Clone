import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: 'AIzaSyButtZ6ePZl-2rAEVHyX4GBkE4uBI09mh0',
    authDomain: 'instagram-clone-72a53.firebaseapp.com',
    projectId: 'instagram-clone-72a53',
    storageBucket: 'instagram-clone-72a53.appspot.com',
    messagingSenderId: '776711615160',
    appId: '1:776711615160:web:4c6edb4665500a79963a4d'
};

const firebaseApp = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebaseApp);

export { firebaseApp, FieldValue };
