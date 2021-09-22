import { Component, OnInit, Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getRedirectResult } from "firebase/auth";

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
        // getRedirectResult('../setup/setup') : Promise < UserCredential >;
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


}
