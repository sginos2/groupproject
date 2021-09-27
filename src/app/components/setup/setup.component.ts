import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { doc, getDoc, getFirestore, query, where, getDocs, onSnapshot, orderBy, limit, collection } from "firebase/firestore";

import { FormBuilder, FormGroup } from '@angular/forms'; 


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  sets: any;
  selectedMatchNum: any;
  selectedSet: any;
  selectedPlayers: any[] = [];
  userSelections: any;
  players = [
    {username: 'player1', id: '1', score: 0}, // display data here eventually
    {username: 'player2', id: '2', score: 0},
    {username: 'player3', id: '3', score: 0},
    {username: 'player4', id: '4', score: 0},
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
      if (this.players[i].id === id) {
        this.checkBoxValue = this.players[i];
      }
    }
    this.selectedPlayers.push(this.checkBoxValue);
    console.log(this.selectedPlayers);
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

  async getPlayers() { //need to add realtime updates
    const db = getFirestore();
    const usersRef = collection(db, "users");
    const q = query(usersRef, limit(4));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      
    });
    
  }

}
  

  
