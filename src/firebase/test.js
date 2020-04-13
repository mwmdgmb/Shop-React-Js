import firebase from 'firebase/app';
import 'firebase/firestore';


const firestore = firebase.firestore();



firestore.collection('users').doc('dTjODThxGpMHr1TE5jUz').collection('cartItems').doc('RKs3K9KFWcrYp32V99CR')
firestore.doc('/users/dTjODThxGpMHr1TE5jUz/cartItems/RKs3K9KFWcrYp32V99CR');
firestore.collection('/users/dTjODThxGpMHr1TE5jUz/cartItems')