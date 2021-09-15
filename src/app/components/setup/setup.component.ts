import { Component, OnInit } from '@angular/core';

interface Set {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

  sets: Set[] = [
    {value: 'set-1', viewValue: 'Sword and Shield'},
    {value: 'set-2', viewValue: 'Sun and Moon'},
    {value: 'set-3', viewValue: 'XY'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  

}
