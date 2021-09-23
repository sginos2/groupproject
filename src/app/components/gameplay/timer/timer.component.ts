// import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { CountdownConfig } from 'ngx-countdown';

// @Component({
//   selector: 'app-timer',
//   templateUrl: './timer.component.html',
//   styleUrls: ['./timer.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class TimerComponent implements OnInit {

//   constructor(public config: CountdownConfig) { }

//   ngOnInit(): void {
//     this.config = {
//       leftTime: 60 * 3,
//       formatDate: ({ date }) => `${date / 1000}`,
//     };
//   }


// }
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountdownConfig } from 'ngx-countdown';

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
  };
}
