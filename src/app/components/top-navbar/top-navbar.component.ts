import { Component, OnInit } from '@angular/core';
import { signOut, getAuth } from 'firebase/auth';
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  callSignOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

  currentUserProfile() {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const displayName = user.displayName;
      console.log(displayName);
    }
   
  }

}
