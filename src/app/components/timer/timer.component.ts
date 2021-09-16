import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

class Timer {
  constructor(public counter = 30) {

      let intervalId = setInterval(() => {
          this.counter = this.counter - 1;
          console.log(this.counter)
          if(this.counter === 0) clearInterval(intervalId)
      }, 1000)
  }
}