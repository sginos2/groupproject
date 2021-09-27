import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { doc, getDoc, getFirestore, collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
=======
import { CardMatchComponent } from '../card-match/card-match.component';
import { TimerComponent } from '../timer/timer.component';
>>>>>>> fdc97e86d465675790ef8add228d13660b6ae5f0

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

<<<<<<< HEAD

  constructor() { }
=======
  retrievedUserSelections: any;
  userSelections: any;
  sideMatchNum: any;
  players: any;

  constructor(
    public match: CardMatchComponent,
  ) { }
>>>>>>> fdc97e86d465675790ef8add228d13660b6ae5f0

  ngOnInit(): void {
    this.retrievedUserSelections = localStorage.getItem('userSelections');
    this.userSelections = JSON.parse(this.retrievedUserSelections);
    this.players = this.userSelections.players;
    this.sideMatchNum = this.userSelections.matchesNum;
  }  

  async getPlayers() { //need to add realtime updates
    const db = getFirestore();
    const usersRef = collection(db, "users");
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }

}
