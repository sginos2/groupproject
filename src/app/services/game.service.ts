import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  roundsPlayed = 0;
  highestScoreIdx = 0;
  highestScore: any;
  winner: any;
  timer = 25;
  timerInterval: any;
  rotateInterval: any;
  snackbarRef: any;

  constructor(
    public snackbar: MatSnackBar
  ) { }

  getUserSelections() {
    this.retrievedUserSelections = localStorage.getItem('userSelections');
    this.userSelections = JSON.parse(this.retrievedUserSelections);
    this.selectedSet = this.userSelections.set;
    this.matchNum = this.userSelections.matchesNum;
    this.players = this.userSelections.players;
    this.currentPlayer = this.players[0];
  }

  rotatePlayers() {
    this.timerInterval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.timer = 25;
      }
    }, 1000);
    this.rotateInterval = setInterval(() => {
      if (this.currentPlayerIdx < this.players.length - 1) {
        this.currentPlayerIdx++;
        this.currentPlayer = this.players[this.currentPlayerIdx];
      } else if (this.currentPlayerIdx = this.players.length) {
        this.currentPlayerIdx = 0;
        this.currentPlayer = this.players[0];
        console.log(this.currentPlayer);
        this.roundsPlayed++;
      }
    }, 28000)
  }

  findWinner() {
    this.highestScore = this.players[0].score;
    for(let i = 0; i < this.players.length; i++) {
      if (this.players[i].score > this.highestScore) {
        this.highestScoreIdx = i;
        this.highestScore = this.players[i].score;
      }
    }
    this.winner = this.players[this.highestScoreIdx].username;
  }

}
