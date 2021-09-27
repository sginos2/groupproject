import { Component, OnInit } from '@angular/core';
import { CardMatchComponent } from '../card-match/card-match.component';
import { TimerComponent } from '../timer/timer.component';

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

}
