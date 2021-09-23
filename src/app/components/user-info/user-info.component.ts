import { Component, OnInit } from '@angular/core';
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore"; 
  

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async gamesPlayed() {
    try {
        const db = getFirestore();
        
        const docRef = await addDoc(collection(db, "users", "games"), { //add sub collection for game states for signed in user (right now throws an error)
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

