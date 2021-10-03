import { Component, OnInit } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, orderBy, query, limit } from "firebase/firestore";
import { setUserId } from 'firebase/analytics';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  auth = getAuth();
  user = this.auth.currentUser;
currentUserName = `${this.user?.displayName}`;

userinfo = `${this.getUserInfo()}`;

  constructor() { }

  ngOnInit(): void {
    }

   
async getUserInfo() {
  const db = getFirestore();
  const usersRef = collection(db, "users");
  const docRef = doc(db, "users");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}   



}
