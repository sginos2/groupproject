import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { doc, getDoc, getFirestore, collection, query, where, getDocs, onSnapshot } from "firebase/firestore";

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
    {username: 'player1', id: '1'},
    {username: 'player2', id: '2'},
    {username: 'player3', id: '3'},
    {username: 'player4', id: '4'},
  ];

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
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }
  
}
