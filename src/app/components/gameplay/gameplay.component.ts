import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent implements OnInit {

  constructor(
    public game: GameService
  ) { }

  ngOnInit(): void {
    this.game.getUserSelections();
    this.game.rotatePlayers();
  }

}
