import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { CountdownConfig, CountdownEventAction, CountdownEvent } from 'ngx-countdown';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  config: CountdownConfig = {
    leftTime: 15,
    formatDate: ({ date }) => `${date / 1000}`,
    notify: 1
  };

  constructor(
    private snackbar: MatSnackBar,
  ) { }

  handleEvent(event: any){
    if (event.action === 'notify') {
      this.snackbar.open('Next Player\'s turn', 'Close');
    }
  }
}
