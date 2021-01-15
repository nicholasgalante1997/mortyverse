import * as firebase from "firebase"
import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyAOQYCsAVhgHUKxxEFT_d8OUh8L23VuKCY",
    authDomain: "mortyverse-754e0.firebaseapp.com",
    databaseURL: "https://mortyverse-754e0.firebaseio.com",
    projectId: "mortyverse-754e0",
    storageBucket: "mortyverse-754e0.appspot.com",
    messagingSenderId: "80917449150",
    appId: "1:809174491507:ios:5aec4bd5dd40dc039b2506"
}

firebase.initializeApp(firebaseConfig)

export default firebase 