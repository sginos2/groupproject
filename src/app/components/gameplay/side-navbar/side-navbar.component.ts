import { Component, OnInit } from '@angular/core';
import { CardMatchComponent } from '../card-match/card-match.component';
import { TimerComponent } from '../timer/timer.component';
import { getFirestore, collection, query, doc, getDocs } from '@firebase/firestore';


@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  retrievedUserSelections: any;
  userSelections: any;
  sideMatchNum: any;
  players: any;

  constructor(
    public match: CardMatchComponent,
  ) { }

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
