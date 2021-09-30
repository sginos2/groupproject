import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { doc, getDoc, getFirestore, query, where, getDocs, onSnapshot, orderBy, limit, collection } from "firebase/firestore";

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SetupComponent implements OnInit {

  sets: any;
  selectedMatchNum: any;
  selectedSet: any;
  selectedPlayers: any[] = [];
  userSelections: any;
  players = [ //push the usernames from function onto a collective "list" so it doesnt repeat
    {username: `${this.getPlayers()}`, score: 0},
    {username: `${this.getPlayers()}`, score: 0},
    {username: `${this.getPlayers()}`, score: 0},
    {username: `${this.getPlayers()}`, score: 0}
  ];
  

  checkBoxChecked: any = false;
  checkBoxValue: any;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.http.get('https://api.pokemontcg.io/v2/sets')
    .subscribe((data: any) => {
      this.sets = data.data;
    })
  }

  checkedPlayer(id: any) {
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i]) {
        this.checkBoxValue = this.players[i];
      }
    }
    this.selectedPlayers.push(this.checkBoxValue);
  }

  startGame() {
    this.userSelections = {
      matchesNum: this.selectedMatchNum,
      set: this.selectedSet,
      players: this.selectedPlayers
    }
    localStorage.setItem('userSelections', JSON.stringify(this.userSelections));
    this.router.navigate(['./match']);
  }

  async getPlayers() { 
    const db = getFirestore();
    const usersRef = collection(db, "users");
    const q = query(usersRef, limit(4));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
          users.push(doc.data().name);
          for (let i = 0; i < this.players.length; i++) {
                if (this.players[i].username) {
                 this.players[i].username = doc.data().username;
                  
                  console.log(doc.data());
                }
              } 
          console.log(doc.data().username);
      });
    });
    
  }

displayPlayers() {
  
}


}
  

  
