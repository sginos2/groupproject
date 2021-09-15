import { Component } from '@angular/core';

interface Set {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sets: Set[] = [
    {value: 'set-1', viewValue: 'Sword and Shield'},
    {value: 'set-2', viewValue: 'Sun and Moon'},
    {value: 'set-3', viewValue: 'XY'},
  ];
}
