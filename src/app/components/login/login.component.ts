import { Component, OnInit, Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore"; 
import { doc } from "firebase/firestore";

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit(): void {  
  
  }

  callSignIn() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        const user = result.user;
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      }); 
      
  }
  
  currentUser() {
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    //user is signed in, see docs for a list of available properties
    const uid = user.uid;
  } else {
  }
  });
}

currentUserProfile() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    console.log(displayName);
  }
}



async getUserData() {
  
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      console.log(displayName);
    }
    const db = getFirestore();
    
    //add a google user to database
    const docRef = await addDoc(collection(db, "users"), {
      username: user?.displayName, //google displayname
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  
}
// const defeatedRef = doc(db, "users", "defeated") {
        
// } sub collection for invidual users for both losts and wins in users collection?

async gamesPlayed() {
  try {
      const db = getFirestore();
      
      const docRef = await addDoc(collection(db, "users", "games"), {
        totalPlayed: 10, //total games played by signed in user
       totalWon: 2, //total won games played by signed in user
        totalLosts: 50,// total loss games played by signed in user
      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
   
  
}



}
