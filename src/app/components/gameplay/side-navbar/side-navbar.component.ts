import { Component, OnInit } from '@angular/core';
import { getFirestore, collection, query, doc, getDocs } from '@firebase/firestore';
import { GameService } from '../../../services/game.service';

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
    public game: GameService
  ) { }

  ngOnInit(): void {
    this.game.getUserSelections();
    this.game.rotatePlayers();
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
