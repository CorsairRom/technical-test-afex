import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBzV0wbWAUKvx-o7RcnS6KVHkeURUiCObw",
    authDomain: "playlist-751ea.firebaseapp.com",
    projectId: "playlist-751ea",
    storageBucket: "playlist-751ea.appspot.com",
    messagingSenderId: "849388062398",
    appId: "1:849388062398:web:fbf72a18861e5b44dbc0ef",
    measurementId: "G-REWWNZG5B3"
};

const app = initializeApp(firebaseConfig);
const  db = getFirestore(app)
export {db};