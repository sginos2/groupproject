import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameService } from '../../../services/game.service';

@ViewChild('cd', { static: false })

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TimerComponent {

  config = this.game.config;
     
  constructor(
    private snackbar: MatSnackBar,
    public game: GameService
  ) { }

  handleEvent(event: any){
    if (event.action === 'notify') {
      this.snackbar.open('Next Player\'s turn', 'Close');
      
    }
  }
}
