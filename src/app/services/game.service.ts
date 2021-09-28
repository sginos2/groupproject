import { Injectable } from '@angular/core';
import { CountdownConfig, CountdownComponent } from 'ngx-countdown';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  retrievedUserSelections: any;
  userSelections: any;
  selectedSet: any;
  matchNum: any;
  players: any;
  currentPlayer: any;
  currentPlayerIdx = 0;
  config: CountdownConfig = {
    leftTime: 15,
    formatDate: ({ date }) => `${date / 1000}`,
    notify: 1
  };
  roundsPlayed = 0;

  constructor() { }

  getUserSelections() {
    this.retrievedUserSelections = localStorage.getItem('userSelections');
    this.userSelections = JSON.parse(this.retrievedUserSelections);
    this.selectedSet = this.userSelections.set;
    this.matchNum = this.userSelections.matchesNum;
    this.players = this.userSelections.players;
    this.currentPlayer = this.players[0];
  }

  rotatePlayers() {
    // setInterval(() => {
    //   if (this.currentPlayerIdx < this.players.length - 1) {
    //     this.currentPlayerIdx++;
    //     this.currentPlayer = this.players[this.currentPlayerIdx];
    //     console.log(this.currentPlayer);
    //   } else if (this.currentPlayerIdx >= this.players.length) {
    //     this.currentPlayerIdx = 0;
    //     this.roundsPlayed++;
    //   }
    // }, 15000)
  }

}
