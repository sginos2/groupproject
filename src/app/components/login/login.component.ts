import { Component, OnInit, Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

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
    private router: Router
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
        this.addUserData();
        this.router.navigate(['./setup']);
     
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
const uid = user.uid;
const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    console.log(displayName);
  } else {
  }
  });
}

async addUserData() {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const displayName = user.displayName;
      const db = getFirestore();
    const docRef = await addDoc(collection(db, "users"), {
      username: displayName,
      totalGames: 0,
      wins: 0,
      losses: 0
    });
    console.log("Document written with ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  console.log('added to database'); 
}



}
